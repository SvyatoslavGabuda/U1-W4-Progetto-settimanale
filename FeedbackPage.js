const callEventButton=function(){
    const bottone=document.querySelector("button");
    bottone.onmouseover=function(e){
        bottone.classList.add("bottonmouseover");
    }
    bottone.onmouseleave=function(e){
        bottone.classList.remove("bottonmouseover");
    }
}


const callEventsOnAllTheStars=function(star,index){
    let isitclicked=false;
    let variabile;
    star.onmouseover=function(){colorTheStars(index,star,isitclicked)};
    star.onclick=function(){
        isitclicked=true;
        variabile=index+1;
        console.log("l'utente ha scelto ",index+1," stelle")
    }
        
    const textfield=document.querySelector("input[type=text]");

    textfield.addEventListener("keydown",(function(){
        if(event.keyCode == 13) {
            console.log("il commento inserito dall' utente è:",textfield.value);
        textfield.value= "";
        isitclicked=true;
        textfield.type="hidden";
        feedbackText=document.querySelector("#feedbackText");
        feedbackText.innerText="Thank you for the FeedBack";
            
        
        
        }
    }))

 
   

}
    




let addColorToStarsBefore=function(){}


const colorTheStars=function(indexFunction,starFuncion,click){
if(click===false){
let starbefore;
let j=0;
while(j<=indexFunction){
starbefore=pathArray[j];
starbefore.classList.remove("defaultColor");
j=j+1;
}
while(j<pathArray.length){
    starbefore=pathArray[j];
    starbefore.classList.add("defaultColor");
    j=j+1;
}
}
}

const div=document.querySelector("#cointeinerStar");
const pathArray=div.querySelectorAll("path");


for(i=0;i<pathArray.length;i++)
{
callEventsOnAllTheStars(pathArray[i],i)
}
callEventButton();









