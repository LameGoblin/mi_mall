<template>
    <div id="home">
      <div class="site-bn-bar">
        <a class="site-bn-bar-link" href="#"></a>
      </div>
      <top-bar-container></top-bar-container>
      <header-container></header-container>
      <div class="home-hero-container container">
        <div class="home-hero">
          <div class="home-hero-slider">
            <el-carousel trigger="click" height="460px">
              <el-carousel-item v-for="item in sliderList" :key="item">
                <a href="#"><img :src="item"></a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <el-row class="home-hero-sub" type="flex" justify="space-between">
            <el-col :span="5">
             <ul class="home-channel-list clearfix">
               <li class="exposure top left">
                 <a href="#">
                   <i class="iconfont icon-phone"></i>
                   选购手机
                 </a>
               </li>
               <li class="exposure top left">
                 <a href="#">
                   <i class="iconfont icon-gift"></i>
                   企业团购
                 </a>
               </li>
               <li class="exposure top left">
                 <a href="#">
                   <i class="iconfont icon-F"></i>
                   F码通道
                 </a>
               </li>
               <li class="exposure top left">
                 <a href="#">
                   <i class="iconfont icon-sim"></i>
                   米粉卡
                 </a>
               </li>
               <li class="exposure top left">
                 <a href="#">
                   <i class="iconfont icon-qiehuan"></i>
                   以旧换新
                 </a>
               </li>
               <li class="exposure top left">
                 <a href="#">
                   <i class="iconfont icon-huafeiquan_"></i>
                   话费充值
                 </a>
               </li>
             </ul>
            </el-col>
            <el-col :span="6">
              <a href="#">
                <img src="../../static/imgs/xmad_15381015124677_QcEGp.jpg">
              </a>
            </el-col>
            <el-col :span="6">
              <a href="#">
                <img src="../../static/imgs/xmad_15350224111785_ASnBL.jpg">
              </a>
            </el-col>
            <el-col :span="6">
              <a href="#">
                <img src="../../static/imgs/xmad_15310599190922_ILJZe.jpg">
              </a>
            </el-col>
          </el-row>
        </div>
      </div>
      <site-footer></site-footer>
      <site-info></site-info>
    </div>
</template>
<script>

import TopBarContainer from './tabbar/TopBarContainer'
import HeaderContainer from './tabbar/HeaderContainer'
import SiteFooter from './SiteFooter'
import SiteInfo from './SiteInfo'
export default {
  name: 'HomeContainer',
  components: {SiteInfo, SiteFooter, HeaderContainer, TopBarContainer},
  data: function () {
    return {
      sliderList: ['../../static/imgs/xmad_15381012113444_GNrio.jpg', '../../static/imgs/xmad_15375484702231_Zobxf.jpg', '../../static/imgs/xmad_15382123647923_htHCk.jpg', '../../static/imgs/xmad_15382887792955_LAHtM.jpg', '../../static/imgs/xmad_15310599701167_AYcbi.jpg']
    }
  }
}
</script>
<style scoped>
  .site-bn-bar{
    background-image: url("../assets/imgs/cms_15380984394349_MPpBH.jpg");
    background-repeat: no-repeat;
    background-position: center 0;
    width: 100%;
  }
  .site-bn-bar .site-bn-bar-link{
    display: block;
    width: 100%;
    height: 120px;
  }
  .home-hero {
    position: relative;
    margin-bottom: 26px;
  }
  .home-hero-slider .el-carousel__item img {
    width: 1226px;
  }

  .home-hero .home-hero-sub {
    margin-top: 14px;
    height: 170px;
  }
  .home-hero .home-hero-sub .el-col img{
    width: 316px;
    height: 170px;
    margin-left: -9.5px;
  }
  .home-channel-list {
    margin: 0;
    padding: 3px;
    list-style-type: none;
    font-size: 12px;
    text-align: center;
    background: #5f5750;
  }
  .home-channel-list li {
    position: relative;
    float: left;
    width: 70px;
    height: 82px;
    padding: 0 3px;
  }
  .home-channel-list a {
    display: block;
    padding-top: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #fff;
    color: rgba(255,255,255,0.7);
    *color: #fff;
    -webkit-transition: color .2s;
    transition: color .2s;
  }
  .home-channel-list li:after {
    top: 6px;
    left: 0;
    width: 1px;
    height: 70px;
  }
  .home-channel-list li:before {
    top: -1px;
    left: 6px;
    width: 64px;
    height: 1px;
  }
  .home-channel-list li:before, .home-channel-list li:after {
    position: absolute;
    content: "";
    background: #665e57;
  }
  .home-channel-list i {
    display: block;
    height: 24px;
    margin-bottom: 4px;
    font-size: 24px;
    line-height: 24px;
  }
  .home-hero-sub .el-col:first-child{
    width: 234px;
  }
</style>
