<template>
  <div>
    <!-- 轮播图区域   -->
    <mt-swipe :auto="2000">
      <mt-swipe-item>
        <img src="../../images/carouselMap/0.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/carouselMap/1.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/carouselMap/2.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/carouselMap/3.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/carouselMap/4.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/carouselMap/5.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/carouselMap/6.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/carouselMap/7.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/carouselMap/8.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/carouselMap/9.jpg" />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" />
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" />
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" />
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // carouselMap:[]   // 保存轮播图的数组
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-midea-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
