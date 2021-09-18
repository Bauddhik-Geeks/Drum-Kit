

// this is for detecting button which is pressed

var numberOfDrumButtons=document.querySelectorAll(".drum").length; // length of class with .Drum

for(var i=0;i<numberOfDrumButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
     var buttonInnerHtml = this.innerHTML;

     makeSound(buttonInnerHtml);
     buttonAnimation(buttonInnerHtml);


  });
}
// if key is presseed then also it will play

document.addEventListener("keydown",function(event){
   makeSound(event.key);

   buttonAnimation(event.key);

});

function makeSound(key){
  switch (key) {
    case "w":
                     var ton1 =new Audio('sounds/tom1.mp3');
                     ton1.play();
                     break;

   case "a":
                     var ton2=new Audio('sounds/tom2.mp3');
                     ton2.play();
                     break;

   case "s":
                     var ton3=new Audio('sounds/tom3.mp3');
                     ton3.play();
                     break;

   case "d":
                    var ton4=new Audio('sounds/tom4.mp3');
                    ton4.play();
                    break;

   case "j":
                    var snare=new Audio('sounds/snare.mp3');
                    snare.play();
                    break;

   case "k":
                    var crash=new Audio('sounds/crash.mp3');
                    crash.play();
                    break;

   case "l":
                    var kick=new Audio('sounds/kick-bass.mp3');
                    kick.play();
                    break;


    default:
           console.log(key);
         }
}

function buttonAnimation(currentkey){

  var activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
