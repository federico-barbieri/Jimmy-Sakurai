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

string6.addEventListener('click', () =>{
    sound6.play();
    string6.classList.add('stringMoves6');
    setTimeout(stopMoving6, 1300);
})

function stopMoving6(){
    string6.classList.remove('stringMoves6');
}

// string 5

string5.addEventListener('click', () =>{
    sound5.play();
    string5.classList.toggle('stringMoves5');
    setTimeout(stopMoving5, 1300);
})

function stopMoving5(){
    string5.classList.remove('stringMoves5');
}

// string 4

string4.addEventListener('click', () =>{
    sound4.play();
    string4.classList.toggle('stringMoves4');
    setTimeout(stopMoving4, 1300);
})

function stopMoving4(){
    string4.classList.remove('stringMoves4');
}

// string 3

string3.addEventListener('click', () =>{
    sound3.play();
    string3.classList.toggle('stringMoves3');
    setTimeout(stopMoving3, 1300);
})

function stopMoving3(){
    string3.classList.remove('stringMoves3');
}

// string 2

string2.addEventListener('click', () =>{
    sound2.play();
    string2.classList.toggle('stringMoves2');
    setTimeout(stopMoving2, 1300);
})

function stopMoving2(){
    string2.classList.remove('stringMoves2');
}

// string 1

string1.addEventListener('click', () =>{
    sound1.play();
    string1.classList.toggle('stringMoves1');
    setTimeout(stopMoving1, 1300);
})

function stopMoving1(){
    string1.classList.remove('stringMoves1');
}


////////////////

// ramen time

let count = 0;

const thirtyYearsSection = document.querySelector('.for-the-past-30-years-section');

const ramen = document.querySelector('.ramen');

thirtyYearsSection.addEventListener('click', () => {
    count++;
    ramen.classList.add('.assignRotation');
})
