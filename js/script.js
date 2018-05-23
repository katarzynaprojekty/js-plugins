var templateItem = document.getElementById('template-product-item').innerHTML;

Mustache.parse(templateItem);

var listItems = '';

for(var i = 0; i < sliderData.length; i++){
    listItems += Mustache.render(templateItem, sliderData[i]);
}

var results = document.getElementById('results');
results.insertAdjacentHTML('beforeend', listItems);



//Flickity zadanie 10.1
var flkty = new Flickity('.main-carousel', {
  // options
    cellAlign: 'left',
    contain: true,
    hash: true,
    imagesLoaded: true,
    percentPosition: false,
});

var restartButton = document.querySelector('#restart');
restartButton.addEventListener( 'click', function() {
  flkty.select(0);
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
