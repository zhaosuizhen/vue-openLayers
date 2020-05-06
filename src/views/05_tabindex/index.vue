<template>
  <div class="vm">
    <h2 class="h-title">点击激活地图 tabindex</h2>

    <!-- 在这里设置'tabindex="1"'可实现选中激活 -->
    <div tabindex="1" id="map" class="map-x"></div>

    <div class="explain">
      <p>通过给地图容器设置 tabindex="1" 来控制默认不会选中地图。</p>
      <p>只有当鼠标点击地图时，才能进行缩放等操作。</p>
      <p>如果没选中地图，即使在地图上滑动滚轮，也不会操作到地图</p>
    </div>
  </div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export default {
  name: 'TabIndex',
  data () {
    return {
      map: null
    }
  },
  methods: {
    initMap () {
      this.map = new Map({
        target: "map",

        layers: [
          new Tile({
            source: new OSM()
          })
        ],

        view: new View({
          projection: "EPSG:4326",
          center: [113.120444,23.034742],
          zoom: 12
        })
      })
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style scoped>
  .content {
    width: 100px;
    margin: 10px auto;
  }
  .explain{
    height: 200vh;
  }
</style>