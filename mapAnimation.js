// The string value for accessToken should be a valid access token from a Mapbox user account.
mapboxgl.accessToken =
  [add your accessToken here];

// mapboxgl.Map initializes a Mapbox map inside an HTML element on a webpage.
//  map parameters (style, center, and zoom) define the initial appearance of the map.
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

//ending marker at Harvard
let markerHarvard = new mapboxgl.Marker({
  color: '#A51C30',
})
  .setLngLat([-71.118625, 42.374863])
  .addTo(map);

//beginning marker at MIT
let markerMIT = new mapboxgl.Marker({
  color: '#8A8B8C',
})
  .setLngLat([-71.092761, 42.357575])
  .addTo(map);

//marker for bus route
let marker = new mapboxgl.Marker({
  color: '#00A36C',
})
  .setLngLat([-71.092761, 42.357575])
  .addTo(map);

// Request the coordinates for all bus stops between MIT and Harvard from MBTA
async function getBusLocations() {
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

let counter = 0;

async function run() {
  // get bus data
  const locations = await getBusLocations();

  setTimeout(() => {
    marker.setLngLat([
      locations[counter].attributes.longitude,
      locations[counter].attributes.latitude,
    ]);
    console.log(locations[counter].attributes.longitude);
    console.log(locations[counter].attributes.latitude);
    counter++;
    run();
  }, 15000);
}

run();
