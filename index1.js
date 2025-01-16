const roll = document.getElementById("roll");
const mylabel = document.getElementById("mylabel");
const min=1;
const max=100;
let randomnumber;

roll.onclick=function(){
    randomnumber=Math.floor(Math.random() * max)+ min;
    mylabel.textContent= randomnumber;
}