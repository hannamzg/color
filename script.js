let inpColor = document.getElementById("inpColor");
let btnAddTooArr = document.getElementById("btnAddTooArr");
let divHaveTestColor = document.getElementById("divHaveTestColor");
let colorInRgb = document.getElementById("colorInRgb");
let colorInHex = document.getElementById("colorInHex");
let continarOfAllColorsPike = document.querySelector(".continarOfAllColorsPike");
let addColors = document.getElementById("addColors");
let favoriteColorsDiv = document.getElementById("favoriteColorsDiv");

let coronetId = 0;
let arr = []; 
let favoriteColor = [];



colorInRgb.addEventListener('click', copy);

btnAddTooArr.addEventListener("click" , ()=>{
    printColor()
});


String.prototype.convertToRGB = function(){
    let aRgbHex = this.match(/.{1,2}/g);
    let aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16),

        
    ];
    return  String(aRgb[0])+ ` `+ String(aRgb[1]) + ` ` + String(aRgb[2]) ;
}

function printColor(){
    const color = inpColor.value;
    arr.push(color);
    showTheColor();
}


function copy(){
    let text = colorInRgb.innerText;
    let input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    
    document.execCommand('copy');
    document.body.removeChild(input);
    
    alert('Copied: ' + text);
}


function showTheColor(){
    for(let i=0; i<arr.length; i++){
         divHaveTestColor.style.backgroundColor = arr[i]; 
         colorInHex.innerHTML = `color in hex:  ${arr[i]}`;
         colorInRgb.innerHTML =  `color in rgb:  ${String(arr[i].substring(1)).convertToRGB()}` 
    }
     
}

addColors.addEventListener("click" , buildDivColor)

function buildDivColor(e){
    const color = inpColor.value;
    favoriteColor.push(color);
    console.log(favoriteColor);
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    div.style.width = "150px";
    div.style.height = "150px";

    div.style.backgroundColor = inpColor.value;
    h2.innerHTML = `color in hex:  ${inpColor.value}` ;
    h3.innerHTML = `color in rgb:  ${String(inpColor.value.substring(1)).convertToRGB()}`;
    
    for(let favoriteColors of favoriteColor){
        h1.innerHTML = favoriteColors;
    }

    favoriteColorsDiv.appendChild(h1)
    div.appendChild(h2);
    div.appendChild(h3)
    continarOfAllColorsPike.appendChild(div);
}




