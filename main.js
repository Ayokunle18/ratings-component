
let rateBox= document.getElementById("rateBox");
let thankBox= document.getElementById("thankBox");
let span = document.getElementById('rating');





var number = document.getElementsByClassName("num");

for(var i= 0; i < number.length; i++){
    number[i].addEventListener('click' , function(e){ 
      value = e.target.innerText;
      span.innerText = value;
      
      var current = document.getElementsByClassName("active");
     
     if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";


    let button= document.getElementById("but");
    button.addEventListener('click' , function(){
    rateBox.style.display = 'none';
    thankBox.style.display = 'flex';
   
     });
  })
}