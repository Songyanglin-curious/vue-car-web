<template>
  <div class="User-wrap">
    <header class="user-news">
      <img src="@/assets/images/four.png" alt="" />
      <div class="news">
        <p class="email">409019683@qq.com</p>
        <p class="score">文明驾驶分<strong>0</strong></p>
      </div>
    </header>
    <nav class="link-group">
      <router-link to="" tag="a">
        <icon name="icon-qian4" size="24" class="User-center-icon" />
        <p>我的账户</p>
      </router-link>
      <router-link to="" tag="a">
        <icon name="icon-fangxiangpan" size="24" class="User-center-icon" />
        <p>租车订单</p>
      </router-link>
      <router-link to="" tag="a">
        <icon name="icon-shimingrenzheng" size="24" class="User-center-icon" />
        <p>实名认证</p>
      </router-link>
      <router-link :to="{name: 'Safe'}" tag="a">
        <icon name="icon-anquanshezhi1" size="24" class="User-center-icon" />
        <p>安全设置</p>
      </router-link>
      <router-link to="" tag="a">
        <icon name="icon-bangzhuzhongxin" size="24" class="User-center-icon" />
        <p>帮助中心</p>
      </router-link>
    </nav>
    <footer>
        <button class="log-out">登出</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "User",

  methods: {},
};
</script>

<style lang="scss" scoped>
.User-wrap {
  height: 100vh;
  position: relative;
}
.user-news {
  padding: 90px 0 100px 0;
  margin: 0 30px;
  display: flex;
  img {
    width: 78px;
    height: 78px;
    border-radius: 50%;
    border: solid 6px #2f343a;
    box-sizing: border-box;
    margin: 0 17px 0 11px;
  }
  .news {
    .email {
      height: 42px;
      line-height: 42px;
      font-size: 18px;
    }
    .score {
      display: inline-block;
      font-size: 14px;
      color: #fff;
      line-height: 28px;
      height: 28px;
      border-radius: 14px;
      padding: 0 16px;
      background-color: $blue-color;
    }
  }
}
.User-center-icon {
  margin: 0 12px 0 0;
  color: $blue-color;
}

  
  .log-out {
    position: absolute;
    // top: 0;
    bottom: 40px;
    left: 50%;
    margin-left: -82px;
    display: inline-block;
    font-size: 18px;
    color: #fff;
    height: 58px;
    line-height: 58px;
    width: 165px;
    text-align: center;
    border-radius: 29px;
    background-color: #2d3339;
    border: none;
    outline: none;
  }

</style>