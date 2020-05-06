<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.h-title{
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
.map-x{
  position: relative;
  width: 600px;
  height: 400px;
  left: 50%;
  transform: translate(-50%,0);
  margin-bottom: 30px;
}
.explain{
  position: relative;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 80px;
}
</style>
