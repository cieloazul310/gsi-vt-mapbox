//import * as mapboxgl from 'mapbox-gl';
import { Map, AttributionControl, NavigationControl } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
/*
Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(
  'pk.eyJ1IjoiY2llbG9henVsMzEwIiwiYSI6ImNqZnlwaml1MjJrd3YzM3FqampkaWxiaHQifQ.KAYTnniDFJ46IX8_kDZm-Q'
);
*/
const map = new Map({
  container: 'map',
  center: [140.46, 36.37],
  zoom: 17,
  pitch: 0,
  hash: true,
  attributionControl: false,
  style: {
    version: 8,
    sources: {
      gsivt: {
        type: 'vector',
        tiles: [
          'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
        ],
        attribution:
          '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank">国土地理院</a>',
      },
    },
    layers: [
      {
        id: 'water',
        source: 'gsivt',
        type: 'fill',
        'source-layer': 'waterarea',
        paint: {
          'fill-color': '#ccf',
        },
      },
      {
        id: 'coastline',
        source: 'gsivt',
        type: 'line',
        'source-layer': 'coastline',
        paint: {
          'line-color': '#bbd',
        },
      },
      {
        id: 'contour',
        source: 'gsivt',
        type: 'line',
        'source-layer': 'contour',
        paint: {
          'line-color': '#fcc',
        },
      },
      {
        id: 'road',
        source: 'gsivt',
        type: 'line',
        'source-layer': 'road',
        paint: {
          'line-color': '#bbb',
        },
      },
      {
        id: 'railway',
        source: 'gsivt',
        type: 'line',
        'source-layer': 'railway',
        paint: {
          'line-color': '#555',
        },
      },
      {
        id: 'label',
        source: 'gsivt',
        type: 'symbol',
        'source-layer': 'label',
        layout: {
          'text-field': ['get', 'knj'],
        },
        paint: {
          'text-color': 'white',
          'text-halo-color': '#666',
          'text-halo-width': 2,
          'text-halo-blur': .5,
        },
      },
    ],
    glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
  },
}).addControl(
  new AttributionControl({
    compact: false,
  })
);

map.addControl(new NavigationControl());
