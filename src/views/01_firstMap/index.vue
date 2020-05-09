<template>
  <div class="vm">
    <h2 class="h-title">第一个地图</h2>

    <!-- 地图容器 -->
    <div id="map" class="map-x"></div>

    <div class="explain">
      <p>Map：地图容器，核心部分，可加载各类地图与功能控件，用于渲染、表现动态地图。</p>
      <p>target：目标元素</p>
      <p>layers：图层，包含多个调用数据的子类，由子类的实例加载地图数据，必须结合图层数据源匹配使用。</p>
      <p>view：地图视图，控制地图缩放等基本交互，以及地图投影坐标系、地图中心点、分辨率、旋转角度等。</p>
    </div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export default {
  name: 'FirstMap',
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {
      // 地图实例
      // 三个必须的属性：target：对应地图容器的ID属性
      //                layers：设置地图图层，可对照ps图层理解，可以有多个层级
      //                view：设置显示地图的视图
      this.map = new Map({
        target: "map", // 对应页面里 id 为 map 的元素

        layers: [ // 图层，每一个title对应一个地图层，参考ps中的图层概念
          new Tile({
            source: new OSM({
              wrapX:false   //这个设置可以使地图只有一个
            }) // 图层数据源
          })
        ],

        view: new View({ // 地图视图
          projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
          // projection: "EPSG:3857", // 坐标系，有EPSG:4326和EPSG:3857
          center: [114.064839, 22.548857], // 默认显示的中心点
          minZoom:10, // 地图缩放最小级别
          maxZoom:14, // 地图缩放最大级别
          zoom: 12 // 打开时默认的地图缩放级别（打开页面时默认级别）
        })
      })
    }
  },
  mounted () {
    this.initMap();
  }
}
</script>

<style scoped>
  
</style>