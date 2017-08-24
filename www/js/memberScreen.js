
function toggle_sidebar()
{
    var sidebar = document.getElementById("sidebar");

    console.log(sidebar.style.left);

    if(sidebar.style.left == "-200px")
    {
        sidebar.style.left = "0px";
        document.addEventListener('click', toggle_sidebar, true); // Closing the sidebar
    }
    else
    {
        sidebar.style.left = "-200px";
    }
}
