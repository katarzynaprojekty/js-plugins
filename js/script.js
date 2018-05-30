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
    zoom: 6,
    center: sliderData[0].coords
  });

  var marker = [];
  for (let i = 0; i < sliderData.length; i++) {
    marker[i] = new google.maps.Marker({
      position: sliderData[i].coords,
      value: i,
      map: map
    });
        marker[i].addListener('click', function() {
//            let t = i;
//            flkty.select(t);
            flkty.select(this.value);
        });
      
  }

  // zadanie 10.4
  flkty.on('change', function(index) {
    console.log('Flickity change ' + index);
          map.panTo(sliderData[index].coords);
          map.setZoom(8);
  });

}