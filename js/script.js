//MUSTACHE zadanie 10.2
var templateItem = document.getElementById('template-product-item').innerHTML;

Mustache.parse(templateItem);

var listItems = '';

for (var i = 0; i < sliderData.length; i++) {
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
restartButton.addEventListener('click', function() {
  flkty.select(0);
});

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});

//GOOGLE MAPS zadanie 10.3
window.initMap = function() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: sliderData[0].coords
  });

  var marker = [];
  for (var i = 0; i < sliderData.length; i++) {
    marker[i] = new google.maps.Marker({
      position: sliderData[i].coords,
      map: map
    });
//    marker[i].addListener('click', function() {
//      flkty.select(i);
//    });
  }

  marker[0].addListener('click', function() {
    flkty.select(0);
  });
  marker[1].addListener('click', function() {
    flkty.select(1);
  });
  marker[2].addListener('click', function() {
    flkty.select(2);
  });
  marker[3].addListener('click', function() {
    flkty.select(3);
  });
  marker[4].addListener('click', function() {
    flkty.select(4);
  });
  marker[5].addListener('click', function() {
    flkty.select(5);
  });
}