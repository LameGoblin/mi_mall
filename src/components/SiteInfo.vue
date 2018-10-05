<template>
    <div class="site-info">
      <div class="container">
        <el-row>
          <el-col :span="1">
            <img src="../assets/imgs/logo-footer.png">
          </el-col>
          <el-col class="info-text" :span="14">
            <p class="sites">
              <template v-for="(item, key, index) in ListInfo">
                <a href="#" :key="key">{{item}}</a>
                <span v-if="index < ListInfo.length-1" class="sep" :key="key">|</span>
              </template>
            </p>
            <p>
              © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号 营业执照
            </p>
            <p>
              违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
            </p>
          </el-col>
          <el-col class="info-links" :span="9">
            <a v-for="(item,key) in ImagesList" :href="item.img_url" :key="key">
              <img :src="item.img_src">
            </a>
          </el-col>
        </el-row>
        <div class="slogan ir">探索黑科技，小米为发烧而生</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SiteInfo',
  data () {
    return {
      ListInfo: ['小米商城', 'MIUI', '米家', '米聊', '多看', '游戏', '路由器', '米粉卡', '政企服务', '小米天猫店', '问题反馈', '廉政举报', 'Select Region'],
      ImagesList: [
        {img_src: '../static/imgs/truste.png', img_url: '#'},
        {img_src: '../static/imgs/v-logo-2.png', img_url: '#'},
        {img_src: '../static/imgs/v-logo-1.png', img_url: '#'},
        {img_src: '../static/imgs/v-logo-3.png', img_url: '#'},
        {img_src: '../static/imgs/ba10428a4f9495ac310fd0b5e0cf8370.png', img_url: '#'}
      ]
    }
  }
}
</script>

<style scoped>
  .site-info {
    padding: 30px 0;
    font-size: 12px;
    background: #fafafa;
  }
  .site-info .info-text{
    color: #b0b0b0;
  }
  .site-info .info-text p{
    margin: 0;
    line-height: 18px;
    text-align: left;
    text-indent: 14px;
  }
  .site-info .info-text .sites a {
    color: #757575;
  }
  .site-info .info-links img{
    width: auto;
    height: 28px;
  }
  .site-info .slogan {
    clear: both;
    margin: 30px auto 0;
    width: 267px;
    height: 19px;
    background: url(../../static/imgs/slogan2016.png) no-repeat center 0;
  }
</style>
