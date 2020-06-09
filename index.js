

function login(callback)
{
      var un = document.getElementById("usr").value;
      var pw = document.getElementById("pwd").value;
        var username = "admin"; 
        var password = "12345";
      if ((un == username) && (pw == password)) {
               // alert("valid");
                //window.location = "main.html";
                display();
               return false;
            }
        else {
              alert ("Login was unsuccessful, please check your username and password");
             //return false;
          }
   callback();
   
}

function display()
{
   window.location = "main.html"; 
}







    
