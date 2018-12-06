// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
// let myQuakes = [];

function getQuakeData(){
  axios.get(weekly_quakes_endpoint)
    .then(res => {
      console.log(res);
      let myQuakes = res.data.features;
      let quakeWrapper = document.getElementById('info');

      let quakeTitles = myQuakes.forEach(t => {
        let eachTitle = document.createElement('p');
        eachTitle.innerHTML = t.properties.title;
        quakeWrapper.appendChild(eachTitle);
        var coords = t.geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1],coords[0]);
        var icon = {
          url: "./images/skull.png", // url
          scaledSize: new google.maps.Size(25, 25), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
      };
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          icon: icon
        });
      //
      //console.log(quakeTitles);
      });
    })
}

getQuakeData();

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 2
        })
      }

      initMap();

      // map.data.setStyle({
      //   icon: '//example.com/path/to/image.png',
      //   fillColor: 'green'
      // });

      // function applyPins(arr) {
        
      //   // for (var i = 0; i < arr.length; i++) {
      //   //   console.log('hi');
      //   //   var coords = arr.features[i].geometry.coordinates;
      //   //   var latLng = new google.maps.LatLng(coords[1],coords[0]);
      //   //   var marker = new google.maps.Marker({
      //   //     position: latLng,
      //   //     map: map
      //   //   });
      //   // }

      //   arr.forEach(x => {
      //     console.log('hi');
      //     var coords = x.geometry.coordinates;
      //     var latLng = new google.maps.LatLng(coords[1],coords[0]);
      //     var marker = new google.maps.Marker({
      //       position: latLng,
      //       map: map
      //   });
      // })
      // }

      // applyPins(myQuakes);
