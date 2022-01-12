
jQuery(document).ready(function() {
  $( "#service1" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
  });
  $( "#service2" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
  });
  $( "#service3" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
  });
  
  
    

    document.getElementById("submit").addEventListener(("click"), function () {
      let userName =document.getElementById("name").value
        let email=document.getElementById("email").value
        let  message=document.getElementById("texta").value
        const em= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(userName===null||userName===""){
        alert("Please Write your Name")
        }
        else if(email===""|email===null){
          alert("Please write your email")
       }
        else if (message===""||message===null){
        alert("Please write your message")
        }
        else if(email.match(em) && email!="" && message !="" && userName !=""){
          alert(`${userName} we have received your message. Thank you for reaching out to us.`)
      
        }
      })
  });
       

window.onload = (event) => {
    animateWelcomeText();
  
   
  };
  
  var i = 0,txt ;
  var txt = 'HELLO WELCOME TO FELICE PIZZA PLACE EVERY  DAY IS A GOOD DAY FOR SOME PIZZA!';
  
  // Speed in milliseconds
  var speed = 300;
  
  function animateWelcomeText() {
    if (i < txt.length) {
      document.getElementById("welcome").innerHTML += txt.charAt(i);
      i++;
      setTimeout(animateWelcomeText, speed);
    } else {
      document.getElementById("welcome").innerHTML = "";
      i = 0;
      setTimeout(animateWelcomeText, speed);
    }
  }
 