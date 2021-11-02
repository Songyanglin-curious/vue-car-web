<template>
  <div class="car-item-wrap">
    <section class="car-item">
      <h4 class="car-log">
        <img src="../../assets/images/cars-logo.png" alt="车标" />
        <span class="name">Mustang 2019款</span>
        <p>新能源汽车5座</p>
      </h4>

      <div class="car-content">
        <div>
          <h4 class="car-number">粤 B745N8</h4>
          <div class="route-news">
            <ul class="car-electric car-electric-2">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <span class="route">约</span>
            <strong>600</strong>
            <span>KM</span>
          </div>
        </div>
        <img src="../../assets/images/cars.png" alt="汽车图片" />
      </div>

      <footer>
        <a class="parking" href="javascript:void(0);">某某停车场</a>
      </footer>
    </section>

    <section class="car-item car-item-detail" :style="`height:${height}`">
      <div class="detail-wrap">
        <div class="parking-name">
          <p>某某停车场</p>
          <icon class="close" name="icon-guanbi" size="16" />
        </div>
        <h4 class="car-log">
          <img src="../../assets/images/cars-logo.png" alt="车标" />
          <span class="name">Mustang 2019款</span>
          <p>新能源汽车5座</p>
        </h4>
        <img src="../../assets/images/cars.png" alt="汽车图片" />
        <div class="route-number">
          <h4 class="car-number">粤 B745N8</h4>
          <div class="route-news">
            <span class="route">约</span>
            <strong>600</strong>
            <span>KM</span>
          </div>
        </div>
        <div class="electricity">
          <div class="bg"></div>
          <div class="value"></div>
        </div>
        <p class="cost-detail">取车约支付12.0元停车费，实际补贴12.0元</p>
        <ul class="combo">
          <li class="combo-item">
            <span>日租车</span>
            <span>￥300/1天</span>
          </li>
          <li class="combo-item">
            <span>日租车</span>
            <span>￥300/1天</span>
          </li>
          <li class="combo-item">
            <span>日租车</span>
            <span>￥300/1天</span>
          </li>
          
          
        </ul>
        <div class="argument">
          <span>参保《全面保障服务》用车更放心</span>
          <i></i>
        </div>
        
      </div>
      <div class="change-cars">预约用车</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CarList",
  props: {
    height: {
      type: String,
      default: "0",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>