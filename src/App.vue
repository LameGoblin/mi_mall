<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    margin: 0;
    padding: 0;
    font: 14px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif
  }
  #app {
    font: 14px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50
  }
  .container{
    width: 1226px;
    margin-left: auto;
    margin-right: auto;
  }
  .container::before{
    content: "";
    display: table;
  }
  .container::after{
    content: '';
    display: block;
    clear: both;
  }
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  a{
    text-decoration: none;
  }
  .btn {
    display: inline-block;
    width: 158px;
    height: 38px;
    padding: 0;
    margin: 0;
    border: 1px solid #b0b0b0;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    color: #b0b0b0;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s;
  }
  .btn-line-primary {
    border-color: #ff6700;
    background: #fff;
    color: #ff6700;
  }
  .btn-small {
    width: 118px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
  }
  .ir {
    display: block;
    text-align: left;
    text-indent: -9999em;
    overflow: hidden;
    _zoom: 1;
  }
  .sep {
    margin: 0 .25em;
    font-family: sans-serif;
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .home-hero-slider .el-carousel .el-carousel__arrow--left {
    left: 234px;
  }
</style>
