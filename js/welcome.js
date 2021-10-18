const prev = document.querySelector(".slide__panel-arrow-left"),
      next = document.querySelector(".slide__panel-arrow-right"),
      slides = document.querySelectorAll(".silder__image"),
      slider = document.querySelector(".slider"),
      dots = document.querySelectorAll(".slide__panel-number"),
      counterCurrent = document.querySelector(".counter-current")

let index = 0;


const activeSlide = n =>{
    counterCurrent.textContent = "0"+(index+1)
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n =>{
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
const prepareCurrentSlide = (ind) =>{
    activeSlide(ind);
    activeDot(ind);
}
const nextSlide = () =>{
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}
const prevSlide= () =>{
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot)=>{
    item.addEventListener('click',()=>{
        index = indexDot;
        prepareCurrentSlide(index);
    })
})
next.addEventListener('click',nextSlide)
prev.addEventListener('click',prevSlide)

document.addEventListener('keyup', e => {
    if (e.code === 'ArrowRight') {
        nextSlide()
    }
})
document.addEventListener('keyup', e => {
    if (e.code === 'ArrowLeft') {
        prevSlide()
    }
})
slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
}
function handleTouchMove(event) {
    if (!x1){
        return false;
    }
    let x2 = event.touches[0].clientX;

    let xDiff = x2-x1;

    if(xDiff>0){
        prevSlide()
    } else{nextSlide()}
    x1 = null;
}


const scroll = document.querySelector('.up');
window.addEventListener('scroll',function(){
    scroll.classList.toggle('active', window.scrollY>500)
})
scroll.addEventListener('click', scrollToTop)
function scrollToTop(){
    window.scrollTo({
        top:0,
    })
}

console.log(`
*************************************************
Сделано: слайдер в секции welcome, слайдер  в секции Explore,
анимация в с секции gallery и интерактивная карта.
Остальные секции (video,tickets) можно не проверять я их не делал.
В качестве доп функционала добавил кнопку прокрутки страницы вверх, 
которая появляется после 500px.

Самооценка: 46 баллов + доп функционал (тут по мнению проверяющего)

*************************************************
`);
