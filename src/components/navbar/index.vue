<template>
  <div class="navbar">
    <ul>
      <li class="icon"><icon class="ico" name="icon-wenhao" size="20" /></li>
      <li class="icon"><icon class="ico" name="icon-sousuo" size="20" /></li>
      <li class="change-cars">选择车辆</li>
      <li class="icon"><icon class="ico" name="icon-dingwei" size="20" /></li>
      <li class="icon">
        <icon class="ico user" name="icon-yonghu" size="20" @click="toUser" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{

    }
  },
  methods:{
    toUser(){
      this.$router.push({
        name: "User"
      })
    }
  },
  
};
</script>

<style lang="scss" scope>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 10;
  text-align: center;
  li {
    display: inline-block;
  }
}

li[class^="icon"] {
  margin: 0 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: $main-color;
  display: inline-block;
  text-align: center;
}
.ico {
  line-height: 44px;
  color: #fff;
  &.user {
    color: #00a3ff;
  }
}

</style>