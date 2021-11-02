<template>
  <div>
    <!-- 地图 -->
    <Map></Map>
    <!-- dom渲染 -->
    <!-- <Cars></Cars> -->
    <!-- 导航 -->
    <Navbar></Navbar>
    <!-- 会员 -->
    <!-- 显示子路由 -->
    <!-- <div id="children-wrap" :class="[show ? 'open' : '']"> -->
    <div id="children-wrap" :class="{ open: show }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Map from "../amap/index.vue";
import Cars from "../cars/index.vue";
import Navbar from "@c/navbar";

export default {
  name: "Index",
  components: { Map, Cars, Navbar },
  data() {
    return {
      //   show: false,
    };
  },

  methods: {},
  computed: {
    show() {
      const route = this.$route;
      return route.name === "Index" ? false : true;
    },
  },
  mounted() {
    document.addEventListener("mouseup", (e) => {
      const userCenter = document.getElementById("children-wrap");
      if (userCenter && !userCenter.contains(e.target)) {
        this.$router.push({
          name: "Index",
        }); 
      }
      // console.log(e)
    });
  },
  watch: {
    // "$route":{
    //   handler(newvalue,oldvalue){
    //     let routeName = newvalue.name;
    //     this.show = routeName === "Index"? false : true;
    //     console.log(this.show)
    //   }
    // }
  },
};
</script>

<style lang="scss" scoped>
#children-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  z-index: 10;
  width: 408px;
  // padding: 0 30px;
  background-color: #34393f;
  color: #818282;
  @include webkit (transition, all .5s ease 0s);
  @include webkit (box-shadow,-5px 0 38px 0 rgba(0,0,0,.8) );
  &.open {
    right: 0;
  }
}
</style>