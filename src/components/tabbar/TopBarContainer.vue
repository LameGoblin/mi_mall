<template>
    <div class="site-topbar">
      <table></table>
      <div class="container">
        <ul class="topbar-nav clearfix">
          <li><a href="#">小米商城</a><span class="sep">|</span></li>
          <li><a href="#">MIUI</a><span class="sep">|</span></li>
          <li><a href="#">loT</a><span class="sep">|</span></li>
          <li><a href="#">云服务</a><span class="sep">|</span></li>
          <li><a href="#">金融</a><span class="sep">|</span></li>
          <li><a href="#">有品</a><span class="sep">|</span></li>
          <li><a href="#">小爱开放品台</a><span class="sep">|</span></li>
          <li><a href="#">政企服务</a><span class="sep">|</span></li>
        </ul>
        <div class="topbar-cart">
          <a href="#">
            <i class="iconfont icon-gouwuche"></i>
            购物车
            <span class="J_cartNum">(0)</span>
          </a>
        </div>
        <ul class="topbar-info">
          <li><a href="#">登录</a><span class="sep">|</span></li>
          <li><a href="#">注册</a><span class="sep">|</span></li>
          <li><a href="#">消息通知</a></li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: 'TopBarContainer'
}
</script>

<style scoped>
  .site-topbar{
    line-height: 40px;
    width: 100%;
    background-color: #333;
  }
  .topbar-nav, .topbar-info{
    list-style-type: none;
  }
  .topbar-nav, .topbar-nav>li, .site-topbar .topbar-info>li{
    float: left;
    height: 40px;
  }
  .site-topbar a{
    color: #b0b0b0;
    text-decoration: none;
  }
  .site-topbar .sep{
    margin: 0 .5em;
    color: #424242;
  }
  .site-topbar .topbar-cart, .site-topbar .topbar-info{
    float: right;
  }
  .site-topbar .topbar-cart{
    width: 120px;
    margin-left: 15px;
    background: #424242;
  }
</style>
