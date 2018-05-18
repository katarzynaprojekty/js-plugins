/*
var elem = document.querySelector('.main-carousel');

var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true
});
*/

var flkty = new Flickity('.main-carousel', {
  // options
    cellAlign: 'left',
    contain: true,
    hash: true,
    imagesLoaded: true,
    percentPosition: false,
});

//zad11
var restartButton = document.querySelector('#restart');
restartButton.addEventListener( 'click', function() {
  flkty.select(0);
});

//zad12
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

/*
//zad 12v2
//keyhole parallax
var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on( 'scroll', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});
*/








/*
requirejs( [ 'vendor/flickity-hash' ], function( Flickity ) {
    var flkty = new Flickity('.main-carousel', {
      // options
        cellAlign: 'left',
        contain: true,
        hash: true
    });
});
*/