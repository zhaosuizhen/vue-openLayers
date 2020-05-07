<template>
  <div class="vm">
    <h2 class="h-title">引用高德在线地图</h2>

    <!-- 地图容器 -->
    <div id="map" class="map-x"></div>

    <div class="explain">
        <p>可引入在线地图太多不再一一写demo举例</p><br/>
        <p>可引入的地图层有：OpenStreetMap地图、Bing地图、Stamen地图、MapQuest地图、Yahoo地图、百度地图、腾讯地图、微软地图等等</p>
    </div>
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
                url:'http://webrd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8',//高德地图在线
                wrapX:false,
                // projection: 'EPSG:3857'
            })
          })
        ],

        view: new View({ // 地图视图
          projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
          // projection: "EPSG:3857", // 坐标系，有EPSG:4326和EPSG:3857
          center: [114.064839, 22.548857], // 默认显示的中心点
          zoom: 8 // 打开时默认的地图缩放级别（打开页面时默认级别）
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