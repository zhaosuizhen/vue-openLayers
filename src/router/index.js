import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect:'/firstMap',
      name: 'nav',
      component: () => import('@/components/nav'),
      children:[
        {
          path: 'firstMap',
          name: 'firstMap',
          component: () => import('@/views/01_firstMap')
        },
        {
          path: 'popup',
          name: 'popup',
          component: () => import('@/views/02_popup')
        },
        {
          path: 'mapMarker',
          name: 'mapMarker',
          component: () => import('@/views/03_mapMarker')
        },
        {
          path: 'zoom',
          name: 'zoom',
          component: () => import('@/views/04_zoom')
        },
        {
          path: 'tabindex',
          name: 'tabindex',
          component: () => import('@/views/05_tabindex')
        },
        {
          path: 'changeTarget',
          name: 'changeTarget',
          component: () => import('@/views/06_changeTarget')
        },
        {
          path: 'synchronization',
          name: 'synchronization',
          component: () => import('@/views/07_synchronization')
        },
        {
          path: 'preloadMap',
          name: 'preloadMap',
          component: () => import('@/views/08_preloadMap')
        },
        {
          path: 'vectorJSON',
          name: 'vectorJSON',
          component: () => import('@/views/09_vectorJSON')
        },
        {
          path: 'rotationMap',
          name: 'rotationMap',
          component: () => import('@/views/10_rotationMap')
        },
        {
          path: 'viewAnimate',
          name: 'viewAnimate',
          component: () => import('@/views/11_viewAnimate')
        },
        {
          path: 'graticule',
          name: 'graticule',
          component: () => import('@/views/12_graticule')
        },
        {
          path: 'scaleLine',
          name: 'scaleLine',
          component: () => import('@/views/13_scaleLine')
        },
        {
          path: 'fullScreen',
          name: 'fullScreen',
          component: () => import('@/views/14_fullScreen')
        },
        {
          path: 'zoomToExtent',
          name: 'zoomToExtent',
          component: () => import('@/views/15_zoomToExtent')
        },
        {
          path: 'overviewMap',
          name: 'overviewMap',
          component: () => import('@/views/16_overviewMap')
        },
        {
          path: 'mousePosition',
          name: 'mousePosition',
          component: () => import('@/views/17_mousePosition')
        },
        {
          path: 'zoomSlider',
          name: 'zoomSlider',
          component: () => import('@/views/18_zoomSlider')
        },
        {
          path: 'layerSet',
          name: 'layerSet',
          component: () => import('@/views/19_layerSet')
        },
        {
          path: 'setZindex',
          name: 'setZindex',
          component: () => import('@/views/20_setZIndex')
        },
        {
          path: 'setResolution',
          name: 'setResolution',
          component: () => import('@/views/21_setResolution')
        },
        {
          path: 'setExtent',
          name: 'setExtent',
          component: () => import('@/views/22_setExtent')
        },
        {
          path: 'setSource',
          name: 'setSource',
          component: () => import('@/views/23_setSource')
        },
        {
          path: 'simplenessLabel',
          name: 'simplenessLabel',
          component: () => import('@/views/24_simplenessLabel')
        },
        {
          path: 'brightMark',
          name: 'brightMark',
          component: () => import('@/views/25_brightMark')
        },
        {
          path: 'polymerization',
          name: 'polymerization',
          component: () => import('@/views/26_polymerization')
        },
        {
          path: 'googleMap_1',
          name: 'googleMap_1',
          component: () => import('@/views/27_googleMap_1')
        },
        {
          path: 'googleMap_2',
          name: 'googleMap_2',
          component: () => import('@/views/28_googleMap_2')
        },
        {
          path: 'googleMap_3',
          name: 'googleMap_3',
          component: () => import('@/views/29_googleMap_3')
        },
        {
          path: 'gaodeMap',
          name: 'gaodeMap',
          component: () => import('@/views/30_gaodeMap')
        }
      ]
    }
  ]

const router = new VueRouter({
  routes
})

export default router
