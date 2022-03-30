// function changePages() {
    // location.href= "http://127.0.0.1:5500/thankYou.html" ;
  // }
 
function printOutput(){
  document.getElementById("select").innerText= getOutput();
}
function getOutput(){
return document.querySelector('.active').innerHTML;
}
// const getActiveRating = document.querySelector('.active').innerHTML;
// printOutput(this.id);
// You selected ${getActiveRating} out of 5



var button= document.getElementById("but");
button.addEventListener('click' , function(){
  
  location.href= "http://127.0.0.1:5500/thankYou.html" ;
  printOutput();
  
  // var output= getOutput();
  
  // output= num.this.id;
  


})



var number = document.getElementsByClassName("num");

for(var i= 0; i < number.length; i++){
    number[i].addEventListener('click' , function(){ 
      var current = document.getElementsByClassName("active");

     if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
   
    
      

    })
}