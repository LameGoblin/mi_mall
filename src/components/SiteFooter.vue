<template>
  <div class="site-footer">
    <div class="container">
      <el-row type="flex" class="footer-servic" justify="center">
        <el-col v-for="(item, index) in ListService" :key="index" :span="5" :style="index==0?'':'border-left:1px solid #e0e0e0'">
          <a href="#"><i class="iconfont" :class="item.icon"></i>{{item.content}}</a>
        </el-col>
      </el-row>
      <el-row class="footer-links" type="flex" justify="center">
        <el-col :span="20">
          <el-row type="flex">
            <el-col v-for="(item, index) in ListLinks" :key="index" :span="4">
              <dl class="col-links">
                <dt>{{item.title}}</dt>
                <dd v-for="(item, index) in item.contents" :key="index"><a href="#">{{item}}</a></dd>
              </dl>
            </el-col>
          </el-row>
        </el-col>
        <el-col  class="col-contact" style="border-left: 1px solid #e0e0e0" :span="5">
          <p class="phone">400-100-5678</p>
          <p>
            周一至周日 8:00-18:00<br>（仅收市话费）
          </p>
          <a href="#" class="btn btn-line-primary btn-small"><i class="iconfont icon-news"></i>联系客服</a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter',
  data: function () {
    return {
      ListService: [
        {icon: 'icon-weixiu', content: '预约维修服务'},
        {icon: 'icon-7', content: '7天无理由退货'},
        {icon: 'icon-15', content: '15天免费换货'},
        {icon: 'icon-tubiao_baoyou', content: '满150元包邮'},
        {icon: 'iconfont icon-dingwei', content: '250余家售后网点'}
      ],
      ListLinks: [
        {title: '帮助中心', contents: ['账户管理', '购物指南', '订单操作']},
        {title: '服务支持', contents: ['售后政策', '自助服务', '相关下载']},
        {title: '线下门店', contents: ['小米之家', '服务网点', '授权体验店']},
        {title: '关于小米', contents: ['了解小米', '加入小米', '投资者关系']},
        {title: '关于我们', contents: ['新浪微博', '官方微信', '联系我们']},
        {title: '特色服务', contents: ['F 码通道', '礼物码', '防伪查询']}
      ]
    }
  }
}
</script>

<style scoped>
  .site-footer .footer-servic{
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .site-footer .footer-servic a{
    color: #616161;
    font-size: 16px;
  }
  .site-footer .footer-servic a .iconfont{
    margin-right: 6px;
    line-height: 24px;
    vertical-align: -4px;
    font-size: 24px;
  }
  .site-footer .footer-links{
    padding:40px 0px;
    text-align: left;
  }
  .site-footer .footer-links .col-links dt{
    margin: -1px 0 26px;
    font-size: 14px;
    line-height: 1.25;
    color: #424242;
  }
  .site-footer .footer-links .col-links dd{
    margin: 10px 0 0;
    font-size: 12px;
  }
  .site-footer .footer-links .col-links a{
    color: #757575;
  }
  .site-footer .col-contact{
    text-align: center;
  }
  .site-footer .col-contact .phone{
    margin: 0 0 5px;
    font-size: 22px;
    line-height: 1;
    color: #ff6700;
  }
  .site-footer .col-contact p{
    margin: 0 0 16px;
    font-size: 12px;
  }
  .site-footer .col-contact .iconfont{
    font-size: 12px;
    margin-right: 3px;
  }
</style>
