


function toogleButton(x) {
    console.log('button toggle');
    var button = document.querySelector('.slider-button-clicked');
    button.classList.remove('slider-button-clicked');
    let buttons = document.querySelectorAll('.slider-buttons button');
    button = buttons[x-1];
    button.classList.add('slider-button-clicked');
}

function removeCurrentSlide() {
  let list = document.querySelector('#advertisement-slider');
  let classlist = list.classList;
  classlist.remove('slide-one');
  classlist.remove('slide-two');
  classlist.remove('slide-three');
}

function slideOne() {
  removeCurrentSlide();
  document.querySelector('#advertisement-slider').classList.add('slide-one');
  console.log(document.querySelector('#advertisement-slider').classList);
  toogleButton(1);
}

function slideTwo() {
  removeCurrentSlide();
  document.querySelector('#advertisement-slider').classList.add('slide-two');
  console.log(document.querySelector('#advertisement-slider').classList);
  toogleButton(2);
}

function slideThree() {
  removeCurrentSlide();
  document.querySelector('#advertisement-slider').classList.add('slide-three');
  console.log(document.querySelector('#advertisement-slider').classList);
  toogleButton(3);
}

var sliderButtons = document.querySelectorAll('.slider-buttons button');

sliderButtons[0].addEventListener('click',slideOne());
sliderButtons[1].addEventListener('click',slideTwo());
sliderButtons[2].addEventListener('click',slideThree());

