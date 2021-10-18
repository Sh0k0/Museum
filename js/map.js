mapboxgl.accessToken = 'pk.eyJ1Ijoic2gwazAiLCJhIjoiY2t1a2JuYnJlMTRvMTJyb3oxZ3NvZGRvdiJ9.q1kSdGJ38TvkGEoKPQSQVg';

const map = new mapboxgl.Map({
  container: 'map',
  style:  'mapbox://styles/mapbox/light-v10',
  center: [2.3363, 48.8609],
  zoom: 16 
});
map.addControl(new mapboxgl.NavigationControl());


const marker1 = new mapboxgl.Marker({ "color": "#000000" })
.setLngLat([2.3364, 48.86091])
.addTo(map);

const marker2 = new mapboxgl.Marker({ "color": "#858585" })
.setLngLat([2.3333, 48.8602])
.addTo(map);

const marker3 = new mapboxgl.Marker({ "color": "#858585" })
.setLngLat([2.3397, 48.8607])
.addTo(map);

const marker4 = new mapboxgl.Marker({ "color": "#858585" })
.setLngLat([2.3330, 48.8619])
.addTo(map);

const marker5 = new mapboxgl.Marker({ "color": "#858585" })
.setLngLat([2.3365, 48.8625])
.addTo(map);