<template>
<!-- 
////////////////////////////////////////////////////////////////////
//                          _ooOoo_                               //
//                         o8888888o                              //
//                         88" . "88                              //
//                         (| ^_^ |)                              //
//                         O\  =  /O                              //
//                      ____/`---'\____                           //
//                    .'  \\|     |//  `.                         //
//                   /  \\|||  :  |||//  \                        //
//                  /  _||||| -:- |||||-  \                       //
//                  |   | \\\  -  /// |   |                       //
//                  | \_|  ''\---/''  |   |                       //
//                  \  .-\__  `-`  ___/-. /                       //
//                ___`. .'  /--.--\  `. . ___                     //
//              ."" '<  `.___\_<|>_/___.'  >'"".                  //
//            | | :  `- \`.;`\ _ /`;.`/ - ` : | |                 //
//            \  \ `-.   \_ __\ /__ _/   .-` /  /                 //
//      ========`-.____`-.___\_____/___.-`____.-'========         //
//                           `=---='                              //
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //
//              佛祖保佑       永无BUG     永不修改                 //
////////////////////////////////////////////////////////////////////
 -->
  <el-row class="box">
      <el-col :span='4' class="nav">
          <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router>
                <el-menu-item v-for="(item,index) in navList" :key="index" :index="item.router" :class="{activeNow:$route.path == item.router}">
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </el-menu>
      </el-col>
      <el-col :span='20'  class="content">
          <router-view></router-view>
      </el-col>
  </el-row>
</template>

<script>
export default {
    data(){
        return{
            navList:[
                {
                    title: '第一个地图 firstMap',
                    router: '/firstMap'
                },
                {
                    title: '弹窗 popup',
                    router: '/popup'
                },
                {
                    title: '标记 marker',
                    router: '/mapMarker'
                },
                {
                    title: '地图缩放级别 zoom',
                    router: '/zoom'
                },
                {
                    title: '单击激活地图 tabindex',
                    router: '/tabindex'
                },
                {
                    title: '切换地图容器 changeTarget',
                    router: '/changeTarget'
                },
                {
                    title: '同步两个地图 synchronization',
                    router: '/synchronization'
                },
                {
                    title: '预加载 preload',
                    router: '/preloadMap'
                },
                {
                    title: '矢量图 JSON',
                    router: '/vectorJSON'
                },
                {
                    title: '旋转 rotation',
                    router: '/rotationMap'
                },
                {
                    title: '动画 animate',
                    router: '/viewAnimate'
                },
                {
                    title: '网格 Graticule',
                    router: '/graticule'
                },
                {
                    title: '比例尺控件 ScaleLine',
                    router: '/scaleLine'
                },
                {
                    title: '全屏控件 FullScreen',
                    router: '/fullScreen'
                },
                {
                    title: '导览控件 ZoomToExtent',
                    router: '/zoomToExtent'
                },
                {
                    title: '总览控件 OverviewMap',
                    router: '/overviewMap'
                },
                {
                    title: '鼠标位置控件 MousePosition',
                    router: '/mousePosition'
                },
                {
                    title: '缩放滑块控件 ZoomSlider',
                    router: '/zoomSlider'
                },
                {
                    title: '图层组 Group',
                    router: '/layerSet'
                },
                {
                    title: '控制图层层叠关系 Set zIndex',
                    router: '/setZIndex'
                },
                {
                    title: '限制分辨率 setResolution',
                    router: '/setResolution'
                },
                {
                    title: '按限制范围加载图层 setExtent',
                    router: '/setExtent'
                },
                {
                    title: '设置图层的源 setSource',
                    router: '/setSource'
                },
                {
                    title: '简单的标记 simplenessLabel',
                    router: '/simplenessLabel'
                },
                {
                    title: '定义标记颜色 brightMark',
                    router: '/brightMark'
                },
                {
                    title: '聚合数据 polymerization',
                    router: '/polymerization'
                }
            ]
        }
    }
}
</script>

<style scoped>
.nav{
    background: #545C64;
    max-height: 100vh;
    overflow-y:auto;
}
.content{
    max-height: 100vh;
    overflow-y:auto;
}
.activeNow{
    background-color: rgb(2, 66, 131) !important;
    color:#ffd04b !important;
}
</style>