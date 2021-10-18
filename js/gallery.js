function randomImage() {
    let imgPathArr = [
        "./assets/img/galery10.avif",
        "./assets/img/galery11.avif",
        "./assets/img/galery12.avif",
        "./assets/img/galery13.avif",
        "./assets/img/galery14.avif",
        "./assets/img/galery15.avif",
        "./assets/img/galery1.avif",
        "./assets/img/galery2.avif",
        "./assets/img/galery3.avif",
        "./assets/img/galery4.avif",
        "./assets/img/galery5.avif",
        "./assets/img/galery6.avif",
        "./assets/img/galery7.avif",
        "./assets/img/galery8.avif",
        "./assets/img/galery9.avif",
      ];
      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      shuffle(imgPathArr);
      imgPathArr.map(function(el) {
        const pictureWrapper = document.querySelector('.gallery_picture');
        const img = document.createElement('img');
        img.classList.add('gallery_img')
        img.src = el;
        img.alt = `galery`;
        pictureWrapper.append(img);
      })

}    
randomImage()

const galleryItems = document.querySelectorAll('.gallery_img');

if (galleryItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params){
    for (let i=0; i < galleryItems.length; i++){
      const galleryItem = galleryItems[i];
      const galleryItemHeight = galleryItem.offsetHeight;
      const galleryItemOffset = offset(galleryItem).top;
      const galleryStart = 4;

      let galleryItemPoint = window.innerHeight - galleryItemHeight / galleryStart;

      if (galleryItemHeight > window.innerHeight) {
        galleryItemPoint = window.innerHeight - window.innerHeight / galleryStart;
      }

      if ((pageYOffset > galleryItemOffset - galleryItemPoint) && pageYOffset < (galleryItemOffset + galleryItemHeight)) {
        galleryItem.classList.add('active');
      } else {
        galleryItem.classList.remove('active');
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect (),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll();
}