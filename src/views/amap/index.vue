<template>
  <div class="amap-wrap">
    <!-- class为容器设置宽高不起作用，可能是权重的问题 -->
      <el-amap vid="amapContainer" :zoom="zoom" :events="events" class="amap-demo"></el-amap>
  </div>
</template>

<script>
import {AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap';
export default {
  name: "Map",
  data() {
    // const self = this;
    return {
      // 地图
      map: null,
      zoom: 14,
      events: {},
    };
  },

  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      console.log('地图加载成功')
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: new AMap.LngLat(117.117148, 39.062564),
        zoom: this.zoom
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.amap-wrap {
  width: 100%;
  height: 100vh;
}
</style>