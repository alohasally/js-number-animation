'use strict';

const numAni = document.querySelector('.num_animation');
const targetNum = numAni.getAttribute('data-rate');
let num = 0;

const timer =setInterval(function(){
    ++num;
    numAni.innerText = num; // numAni.innerHTML = '<a>'+num+'</a>'
    if(num == targetNum){
        clearInterval(timer);
        };
},10);


