<template>
    <div class="site-header">
      <div class="container">
        <div class="header-logo">
          <a class="logo" href="#"></a>
        </div>
        <div class="doodle">
          <a class="link-block" href="#"></a>
        </div>
        <div class="header-nav clearfix">
          <ul class="nav-list">
            <li class="nav-category">
              <a href="#"></a>
              <div class="site-category">
                <el-menu class="site-category-list"
                  text-color="#fff"
                  active-text-color="#fff"
                  @select="handleSelect"
                  background-color="rgba(0,0,0,0.6)">
                  <el-menu-item v-for="(item, key) in menuList" :key="key" :index="key+''">
                    <span class="title">{{item.title}}</span>
                    <i class="iconfont icon-arrowright"></i>
                  </el-menu-item>
                  <ChildrenList></ChildrenList>
                </el-menu>
              </div>
            </li>
            <li v-for="(item, key) in navList" :key="key" class="nav-item">
              <a href="#">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="header-search">
          <el-input placeholder="请输入内容" v-model="input">
            <el-row class="search-hot-words" slot="suffix">
              <el-col>
                <a href="#">小米8</a>
                <a href="#">小米MIX 2S</a>
              </el-col>
            </el-row>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>
</template>

<script>
import ChildrenList from '../ChildrenList'
export default {
  name: 'HeaderContainer',
  data () {
    return {
      input: '',
      navList: [
        {title: '小米手机', nav_url: '#'},
        {title: '红米', nav_url: '#'},
        {title: '电视', nav_url: '#'},
        {title: '笔记本', nav_url: '#'},
        {title: '空调', nav_url: '#'},
        {title: '新品', nav_url: '#'},
        {title: '路由器', nav_url: '#'},
        {title: '智能硬件', nav_url: '#'},
        {title: '服务', nav_url: '#'},
        {title: '社区', nav_url: '#'}
      ],
      menuList: [
        {title: '手机 电话卡'},
        {title: '电视 盒子'},
        {title: '笔记本 平板'},
        {title: '家电 插线板'},
        {title: '出行 穿戴'},
        {title: '智能 路由器'},
        {title: '电源 配件'},
        {title: '健康 儿童'},
        {title: '耳机 音响'},
        {title: '生活 箱包'}
      ]
    }
  },
  components: {ChildrenList},
  methods: {
    handleSelect (index, indexPath) {
      console.log(index + ',' + indexPath)
    }
  }
}
</script>

<style scoped>
  .site-header{
    height: 100px;
    position: relative;
  }
  .site-header .header-logo{
    width: 62px;
    margin-top: 20px;
    float: left;
  }
  .site-header .logo{
    width: 55px;
    height: 55px;
    background-color: #ff6700;
    background-image: url("../../assets/imgs/mi-logo.png");
    background-position: 50% 50%;
    display: block;
  }
  .site-header .container{
    position: relative;
    height: 100%;
  }
  .doodle .link-block{
    background-image: url("../../assets/imgs/725c8ab6-34d8-b4c6-edab-ef174f5a7c54.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    width: 165px;
    height: 100px;
    position: absolute;
    left: 69px;
    bottom: 0;
  }
  .site-header .header-nav{
    float: left;
    width: 850px;
  }
  .site-header .nav-list{
    position: relative;
    list-style-type: none;
    float: left;
    font-size: 16px;
    width: 820px;
    height: 88px;
    padding: 12px 0 0 30px;
  }

  .site-header .nav-item{
    float: left;
  }
  .site-header .nav-category a,.site-header .nav-item a{
    display: block;
    padding: 26px 10px 38px;
    color: #333;
  }
  .site-header .nav-category{
    position: relative;
    float: left;
    width: 127px;
    padding-right: 15px;
  }
  .site-header .nav-category .site-category {
    position: absolute;
    top: 88px;
    left: -92px;
    z-index: 21;
    width: 234px;
    height: 460px;
    font-size: 14px;
  }
  .site-header .nav-category .site-category .el-menu {
    width: 100%;
    height: 420px;
    padding: 20px 0;
    border: 0;

  }
  .site-header .nav-category .site-category .el-menu .el-menu-item {
    position: relative;
    display: block;
    padding-left: 30px !important;
    height: 42px;
    line-height: 42px;
    text-align: left;
    background-color: rgba(0,0,0,0) !important;
  }
  .site-header .nav-category .site-category .el-menu .el-menu-item:hover{
     background-color: #ff6700 !important;
   }
  .site-category-list .el-menu-item i {
    position: absolute;
    top: 12px;
    right: 20px;
    font-size: 16px;
    line-height: 16px;
    color: #e0e0e0;
  }
  .site-header .header-search{
    float: right;
    width: 296px;
    margin-top: 25px;
  }
  .search-hot-words{
    margin-top: 11px;
  }
  .search-hot-words a{
    margin-top: 10px;
    font-size: 12px;
    background: #eee;
    color: #757575;
    padding: 0 5px;
  }
</style>
