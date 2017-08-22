//
//  table.swift
//  Cricket
//
//  Created by Aman Singh on 8/6/17.
//  Copyright © 2017 A_Production. All rights reserved.
//

import UIKit

class name1: UIViewController, UITableViewDelegate, UITableViewDataSource
{
  
  @IBOutlet weak var tableview: UITableView!
  
  var data = [Player]();
  
  override func viewDidLoad()
  {
    super.viewDidLoad()
    loaddata()
  }
  
  
  //File Path
  var filePath: String
  {
    let manager = FileManager.default;
    let url = manager.urls(for: .documentDirectory, in: .userDomainMask).first;
    return url!.appendingPathComponent("Data").path;
  }
  
  
  //Load Data
  private func loaddata()
  {
    if let ourdata = NSKeyedUnarchiver.unarchiveObject(withFile: filePath)as? [Player]
    {
      
      data = ourdata
    }
  }
  
  //Save Data
  private func savedata(player: Player)
  {
    data.append(player);
    
    NSKeyedArchiver.archiveRootObject(data, toFile: filePath);
    
  }
  
  
  
  //Number of Rows
  
  func numberOfSections(in tableView: UITableView) -> Int
  {
    
    return 1;
    
  }
  
  func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int
  {
    
    return data.count;
  }
  
  
  func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell
  {
    let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
    cell.textLabel?.text =  data[indexPath.row].Name;
    cell.detailTextLabel?.text = data[indexPath.row].Lastname;
    
    return cell;
  }
  
  //Edit
  func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool
  {
    return true;
  }
  
  
  //Delete
  func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath)
  {
    if editingStyle == UITableViewCellEditingStyle.delete
    {
      data.remove(at: indexPath.row)
      NSKeyedArchiver.archiveRootObject(data, toFile: filePath);

      
      tableView.deleteRows(at: [indexPath], with: .automatic)
    }
  }
  
  
  //Add Player
  @IBAction func Addplayer(_ sender: Any) {
  
    
    let alert = UIAlertController(title: "Add new player", message: "Enter First and Last name", preferredStyle: .alert);
    
    let save = UIAlertAction(title: "Save", style: .default)
    {
      (alertAction: UIAlertAction) in
      
      let name = alert.textFields?[0].text!;
      let lastname = alert.textFields?[1].text!;
      let newplayer = Player(name: name!, lastname: lastname!)
  
      
      self.savedata(player: newplayer)
      self.tableview.reloadData();
    }
    
    
    alert.addTextField(configurationHandler: nil);
    alert.addTextField(configurationHandler: nil);
    
    let cancel = UIAlertAction(title: "Cancel", style: .default, handler: nil)
    
    
    alert.addAction(save);
    alert.addAction(cancel);
    self.present(alert, animated: true, completion: nil);
  }
  

}
