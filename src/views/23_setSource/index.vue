<template>
  <div class="vm">
    <h2 class="h-title">设置图层的源 setSource</h2>
    <div id="map" class="map-x"></div>
    <button @click="setSource('osm')">设置为OSM</button>
    <button @click="setSource('bing')">设置为BingMaps</button>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import { OSM, BingMaps } from 'ol/source'

export default {
  name: 'SetSource',
  data () {
    return {
      map: null,
      osm: new OSM(),
      bing: new BingMaps({
        key: 'AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-',
        imagerySet: 'Aerial'
      }),
      layer: new Tile()
    }
  },
  methods: {
    initMap () {
      this.map = new Map({
        target: 'map',
        layers: [this.layer],
        view: new View({
          projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
          center: [114.064839, 22.548857], // 深圳坐标
          zoom: 12 // 地图缩放级别（打开页面时默认级别）
        })
      })
      this.layer.setSource(this.osm)
    },
    setSource (data) {
      this.layer.setSource(this[data])
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style scoped>
  button {
      margin: 0 10px;
      margin-bottom: 30px;
      background: #666;
      border: none;
      color: #fff;
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
  }
</style>