let btn1 = document.querySelector("#btn1");
let btn2 =document.querySelector("#btn2");
let colorcode = document.querySelector(".copycode");

let rgb1 = "#000";
let rgb2 = "#444";
const gethexcode = () =>{
    let hexvalues = "0123456789abcdef";
    let colors = "#";
    for(let i=0;i<6 ;i++)
        {
       colors =colors + (hexvalues[Math.floor(Math.random()*16)]);
        }
        return colors;
};
const handlebutton1 = () =>{
    rgb1 = gethexcode();
    rgb2 = gethexcode();
    btn1.innerHTML = "LINEAR GRADIENT";
   document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
 colorcode.innerHTML =  `background-image: linear-gradient(to right,${rgb1},${rgb2})`;
    /* btn1.innerHTML = `${rgb1}`;*/
   colorcode.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2}`;
btn1.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2}`;
};
const handlebutton2 = () =>{
    rgb1 = gethexcode();
    rgb2 = gethexcode();
    
     document.body.style.backgroundImage = `radial-gradient( circle at center,${rgb1},${rgb2})`;
   colorcode.innerHTML =  `background-image: radial-gradient(${rgb1} ,${rgb2})`;
   colorcode.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2}`;
   btn2.innerHTML ="RADIAL-GRADIENT";
   btn2.style.backgroundImage =`linear-gradient(to right,${rgb1},${rgb2}`;
};
 

btn1.addEventListener("click",handlebutton1);
btn2.addEventListener("click",handlebutton2);
