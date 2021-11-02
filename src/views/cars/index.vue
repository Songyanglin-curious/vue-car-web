<template>
  <div class="carList-wrap">
    <div class="car-swiper-wrap">
      <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <carItem height="600px"></carItem>
        </swiper-slide>
        <swiper-slide>
          <carItem></carItem>
        </swiper-slide>
        <swiper-slide>
          <carItem></carItem>
        </swiper-slide>
        <swiper-slide>
          <carItem></carItem>
        </swiper-slide>
        <swiper-slide>
          <carItem></carItem>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next" slot="button-next" @click="next"></div>
    </div>

    <!-- <section class="car">
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
    </section> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import carItem from "@c/carList";
export default {
  name: "Cars",
  components: { Swiper, SwiperSlide, carItem },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        // slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  // computed:{
  //   swiper(){
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>