import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(
  'pk.eyJ1IjoiY2llbG9henVsMzEwIiwiYSI6ImNqZnlwaml1MjJrd3YzM3FqampkaWxiaHQifQ.KAYTnniDFJ46IX8_kDZm-Q'
);

const map = new mapboxgl.Map({
  container: 'map',
  center: [140.46, 36.37],
  zoom: 17,
  pitch: 30,
  hash: true,
  style: {
    version: 8,
    sources: {
      water: {
        type: 'vector',
        tiles: [
          'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
        ],
      },
    },
    layers: [
      {
        id: 'water',
        source: 'water',
        type: 'fill',
        'source-layer': 'waterarea',
        paint: {
          'fill-color': '#ccf',
        },
      },
    ],
  },
});

map.addControl(new mapboxgl.NavigationControl());
