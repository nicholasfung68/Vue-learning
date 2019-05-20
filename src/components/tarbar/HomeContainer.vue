<template>
    <div>
      <!-- 轮播图区域   -->
      <mt-swipe :auto='2000'>
          <mt-swipe-item>
              <img src="../../images/carousel map/0.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
              <img src="../../images/carousel map/1.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
              <img src="../../images/carousel map/2.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
              <img src="../../images/carousel map/3.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
              <img src="../../images/carousel map/4.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
              <img src="../../images/carousel map/5.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
              <img src="../../images/carousel map/6.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
              <img src="../../images/carousel map/7.jpg">
          </mt-swipe-item>
           <mt-swipe-item>
              <img src="../../images/carousel map/8.jpg">
          </mt-swipe-item>       
          <mt-swipe-item>
              <img src="../../images/carousel map/9.jpg">
          </mt-swipe-item>
       
        <!-- 在线api挂了... -->
        <!-- 在组件中，若使用v-for循环的话，一定要使用key -->
        <!-- 轮播图 ： carousel map -->
        <!-- <mt-swipe-item v-for="item in carouselMap" :key='item.url'>
            <img :src="item.url">
        </mt-swipe-item> -->
      </mt-swipe>
    
       <!-- 九宫格到六宫格的改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div></a></li>
    </ul> 


    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    // data(){
    //     return{
    //         // carouselMap:[]   // 保存轮播图的数组
    //     }
    // },

    // created(){
    //     // this.getCarouselMap()
    // },

    methods:{
        // getCarouselMap(){
        //     // 获取轮播图数据的方法
        //     // 由于api接口失效，这里就用了这个来测试是否可是正常使用vue-resource，测试结果证明可用
        //     this.$http.get("https://jsonplaceholder.typicode.com/posts/1/comments").then(result =>{
        //         console.log(result.body)
        //         // if(result.body === 0){
        //         //     this.carouselMap = result.body.message
        //         // }else{
        //         //     Toast('Sorry,failed to load carousel map...')
        //         // }
        //     })
        }
}

</script>

<style lang="scss" scoped>

    .mint-swipe{
        height: 200px;

    // &:nth-child(1) {
    //   background-color: red;
    // }
    // &:nth-child(2) {
    //   background-color: blue;
    // }
    // &:nth-child(3) {
    //   background-color: cyan;
    // }
    }
    .mint-swipe-item{
        img{
            width: 100%;
            height: 100%;
        }
    }

    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border:none;
        img{
            width: 60px;
            height: 60px;
        }

        .mui-midea-body{
            font-size: 13px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }

</style>
