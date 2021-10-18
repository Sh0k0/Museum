const imageComparison = document.querySelector('.image-comparison');
const comparisonBefore = imageComparison.querySelector('.image-comparison__before');
const imageBefore = comparisonBefore.querySelector('.image-comparison__image');
const comparisonSlider = imageComparison.querySelector('.image-comparison__slider');

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = imageComparison.offsetWidth;
  imageBefore.style.width = `${width}px`
})

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, imageComparison.offsetWidth - 5))
  comparisonBefore.style.width = `${shift}px`;
  comparisonSlider.style.left = `${shift}px`;
}

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
}
document.body.addEventListener('mouseup', () => {
  isActive = false;
})
document.body.addEventListener('mousedown', () => {
  isActive = true;
})
document.body.addEventListener('mouseleave', () => {
  isActive = false;
})
document.body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }
  let x = e.pageX;
  x -= imageComparison.getBoundingClientRect().left;
  beforeAfterSlider(x); 
  pauseEvents(e);
})

