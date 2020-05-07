<template>
  <div class="vm">
    <h2 class="h-title">引用谷歌地形地图</h2>

    <!-- 地图容器 -->
    <div id="map" class="map-x"></div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

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

        layers: [ // 图层
          new Tile({
            source: new XYZ({
                url:'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0',
                wrapX:false
            })
          })
        ],

        view: new View({ // 地图视图
          projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
          // projection: "EPSG:3857", // 坐标系，有EPSG:4326和EPSG:3857
          center: [114.064839, 22.548857], // 默认显示的中心点
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