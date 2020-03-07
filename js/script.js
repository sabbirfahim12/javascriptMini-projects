const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
const btn=document.getElementById("btn");
const body=document.getElementById("body");
body.style.backgroundColor="violet";

btn.addEventListener("click",function(){
//random set color
body.style.backgroundColor=colors[parseInt(Math.random()*colors.length+1)];
   
})


