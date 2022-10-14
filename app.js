const photoFade = document.querySelector('.photo-fade');
const photoFadeImages = document.querySelectorAll('.photo-fade img')

const prevBtn = document.querySelector('#prevBtn');
const nxtBtn = document.querySelector('#nxtBtn');

let photoNum = 1;
const photoSize = photoFadeImages[0].clientWidth;

photoFade.style.transform = 'translateX(' + (-photoSize * photoNum) + 'px)';

nxtBtn.addEventListener('click', ()=>{
    
    photoFade.style.transition = "transform 1s eas-in-out";
    photoNum ++;
    photoFade.style.transform = 'translateX(' + (-photoSize * photoNum) + 'px)';
})

prevBtn.addEventListener('click', ()=>{
    if (photoNum <=0) return;
    photoFade.style.transition = "transform 1s eas-in-out";
    photoNum --;
    photoFade.style.transform = 'translateX(' + (-photoSize * photoNum) + 'px)';
})

photoFade.addEventListener('tranistionend', () => {
    if (photoFadeImages[photoNum].id === 'firstC') {
    photoFade.style.transition = "none";
    photoNum = photoFadeImages.length - 2;
    photoFade.style.transform = 'translateX(' + (-photoSize * photoNum) + 'px)';
}

    if (photoFadeImages[photoNum].id === 'lastC') {
    photoFade.style.transition = "none";
    photoNum = photoFadeImages.length - photoNum;
    photoFade.style.transform = 'translateX(' + (-photoSize * photoNum) + 'px)';
}
})



