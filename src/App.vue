<template>
  <div class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title='My first Vue project'></mt-header>
    <!-- 中间的路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部Tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link to="./member" class="mui-tab-item">				
        <span class="mui-icon mui-icon-contact">
          <span class="mui-badge">68</span>
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>

      <router-link to="./shoppingcar" class="mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link to="./search" class="mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

  </div>
</template>

<style lang="scss" scoped>
.app-container{
  padding-top:40px;
  overflow-x: hidden;
}

.v-enter{
  opacity: 0;
  transform:translate(100%);
}

.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position:absolute;
}

.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
