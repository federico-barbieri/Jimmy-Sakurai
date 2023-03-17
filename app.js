"use strict";

window.addEventListener('DOMContentLoaded', start);

function start(){
    string3Moves();
    setTimeout(string6Moves, 1000);
    setTimeout(string1Moves, 2000);
}

// initial string movement

function string3Moves(){
    string3.classList.toggle('stringy3');
    setTimeout(stopMoving3, 500);
}

function string1Moves(){
    string1.classList.toggle('stringy1');
    setTimeout(stopMoving1, 500);
}

function string6Moves(){
    string6.classList.toggle('stringy6');
    setTimeout(stopMoving6, 500);
}


// grab strings and make sound when touch

let string6 = document.querySelector('.hr-a');
let string5 = document.querySelector('.hr-b');
let string4 = document.querySelector('.hr-c');
let string3 = document.querySelector('.hr-d');
let string2 = document.querySelector('.hr-e');
let string1 = document.querySelector('.hr-f');

let sound6 = document.querySelector('.audio-string6');
let sound5 = document.querySelector('.audio-string5');
let sound4 = document.querySelector('.audio-string4');
let sound3 = document.querySelector('.audio-string3');
let sound2 = document.querySelector('.audio-string2');
let sound1 = document.querySelector('.audio-string1');


// string 6

string6.addEventListener('click', function addString(e){
    sound6.play();
    string6.classList.add('stringy6');
    setTimeout(stopMoving6, 500);
})

function stopMoving6(){
    string6.classList.remove('stringy6');
}

// string 5

string5.addEventListener('click', () =>{
    sound5.play();
    string5.classList.toggle('stringy5');
    setTimeout(stopMoving5, 500);
})

function stopMoving5(){
    string5.classList.remove('stringy5');
}

// string 4

string4.addEventListener('click', () =>{
    sound4.play();
    string4.classList.toggle('stringy4');
    setTimeout(stopMoving4, 500);
})

function stopMoving4(){
    string4.classList.remove('stringy4');
}

// string 3

string3.addEventListener('click', () =>{
    sound3.play();
    string3.classList.toggle('stringy3');
    setTimeout(stopMoving3, 500);
})

function stopMoving3(){
    string3.classList.remove('stringy3');
}

// string 2

string2.addEventListener('click', () =>{
    sound2.play();
    string2.classList.toggle('stringy2');
    setTimeout(stopMoving2, 500);
})

function stopMoving2(){
    string2.classList.remove('stringy2');
}

// string 1

string1.addEventListener('click', () =>{
    sound1.play();
    string1.classList.toggle('stringy1');
    setTimeout(stopMoving1, 500);
})

function stopMoving1(){
    string1.classList.remove('stringy1');
}
