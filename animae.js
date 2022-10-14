const saveCont = document.querySelector(".saves");

const strCont = saveCont.textContent;

const spltCont = strCont.split("");
saveCont.textContent = "";

for(let x=0; x < spltCont.length; x++){
    saveCont.innerHTML += "<span>" + spltCont[x] + "</span>"
}

let int = 0;
let clock = setInterval(onTick, 40);

function onTick(){
    const rang = saveCont.querySelectorAll('span')[int];
    rang.classList.add('fade');
    int++
    if(int === spltCont.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(clock);
    clock = null;
}
