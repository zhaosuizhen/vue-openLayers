<template>
  <div class="vm">
    <h2 class="h-title">旋转 rotation</h2>
    <div id="map" class="map-x"></div>
    <div class="btn-x">
      <button @click="rotateLeft">顺时针 ↻</button>
      <button @click="rotateRight">逆时针 ↺</button>
    </div>
    <div class="explain">
      <p>使用map.getView().getRotation()获取当前视图的旋转配置</p>
      <p>使用map.getView().setRotation()设置视图的旋转配置</p>
    </div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export default {
  name: 'RotationMap',
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {
      this.map = new Map({
        target: 'map',
        layers: [
          new Tile({
            source: new OSM()
          })
        ],
        view: new View({
          projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
          center: [114.064839, 22.548857], // 深圳坐标
          rotation: 0,
          zoom: 12 // 地图缩放级别（打开页面时默认级别）
        })
      })
    },
    rotateLeft () {
      let currentRotation = this.map.getView().getRotation()    //获取当前视图的旋转配置
      this.map.getView().setRotation(currentRotation + 1)       //设置视图的旋转配置
    },
    rotateRight () {
      let currentRotation = this.map.getView().getRotation()
      this.map.getView().setRotation(currentRotation - 1)
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style scoped>
  .btn-x {
    text-align: center;
    margin-top: 20px;
  }
  button {
      margin: 0 10px;
      margin-bottom: 30px;
      background: #666;
      border: none;
      color: #fff;
      padding: 4px 12px;
      border-radius: 4px;
  }
</style>