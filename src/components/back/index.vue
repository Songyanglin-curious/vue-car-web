<template>
  <div class="head-back-wrap ">
    <div class="head-back">
      <i class="icon"></i>
      <h4 class="head-news">{{news}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Back",
  props:{
    news:{
      type: String,
      default: '',
    }
  }
};
</script>

<style lang="scss" scoped>
.head-back-wrap {
  position: relative;
  height: 147px;
}
.head-back {
  position: fixed;
  top: 23px;
  .icon {
    width: 36px;
    height: 36px;
    margin-right: 20px;
    cursor: pointer;
    &::before {
      content: "";
      display: inline-block;
      box-sizing: border-box;
      width: 12px;
      height: 12px;
      border-top: solid 2px $blue-color;
      border-left: solid 2px $blue-color;
      @include webkit(transform, rotate(-45deg))
    }
  }
  .head-news {
      display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    color: #fff;
  }
}
</style>