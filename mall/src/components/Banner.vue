<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in bannersList" :key="index">
          <a href="javascript:void(0);">
	          <img v-lazy="'static/'+item.prodcutImg" alt = "item.productName" />
        	</a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
</div>
</template>
<style>

</style>

<script>
import  "../assets/css/swiper.mini.css"
import  "../assets/css/swiper_use.css"
// import Swiper from "../assets/js/swiper"
import Swiper from "swiper"
    export default{
        props:["bannersList"],
        data(){
          return {

          }
        },
        mounted () {
          this.setSwiper();
        },
        methods:{
          // closeModal () {
          //   this.$emit("close");
          // },
          setSwiper () {
            let swiper = new Swiper('.swiper-container', {
            observer: true,  // 修改swiper自己或子元素时，自动初始化swiper
        　  observeParents: true,  // 修改swiper的父元素时，自动初始化swiper
            lazyLoading: true,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            },
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
        })
        }
      }
  }
</script>
