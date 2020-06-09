
function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if(this.readyState==4&&this.status==200){
            var i;
            var response = JSON.parse(this.responseText);
            
            var output ="";
            var check ="";
           
           
          
          
            for(i=0;i<response.length;i++){
              if(response[i].completed == true){
                output += "<input type=checkbox checked>" +  response[i].title;
               
                document.getElementById("demo").innerHTML = output;
              }
             
             if(response[i].completed == false){
               output += "<input type=checkbox unchecked >" +  response[i].title;
              
               document.getElementById("demo").innerHTML = output;
              }
              output += "<br>";
            
              

            }
             

           
        
        

        }
        
    }
         
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

