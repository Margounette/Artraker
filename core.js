var elem = document.querySelector(".main-carousel");
var flickity = new Flickity ( elem, {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  cellSelector: '.carousel-cell',
  imagesLoaded: true
});
