<template>
  <div class="children" :style="{ width: 248 * colCount + 'px' }">
    <el-row>
      <el-col v-for="index in colCount" :key="index" :span="24 / colCount">
        <ul>
          <li v-for="item in lists[index-1]" :key="item.id">
            <router-link :to="item.url">
              <img :src="item.img_url">
              <span>{{item.title}}</span>
            </router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      lists: [],
      colCount: 0
    }
  },
  name: 'ChildrenList',
  props: ['cid'],
  mounted () {
    this.axios.get('http://127.0.0.1:3000/category/list?cid=' + this.cid)
      .then(res => {
        if (res.data.code === 1) {
          this.colCount = Math.ceil(res.data.msg.length / 6)
          for (let i = 0; i < this.colCount; i++) {
            let list = []
            list = res.data.msg.slice(i * 6, i * 6 + 6)
            this.lists.push(list)
          }
        }
      })
      .catch(res => {
        console.log(res)
      })
  }
}
</script>

<style scoped>
  .children {
    width: 992px;
    position: absolute;
    left: 234px;
    top: 0;
    z-index: 24;
    height: 458px;
    border: 1px solid #e0e0e0;
    border-left: 0;
    background: #fff;
    -webkit-box-shadow: 0 8px 16px rgba(0,0,0,0.18);
    box-shadow: 0 8px 16px rgba(0,0,0,0.18);
  }
  .children ul{
    list-style-type: none;
    text-align: left;
    padding: 2px 0;
  }
  .children a {
    display: block;
    padding: 18px 0px 18px 20px;
    line-height: 40px;
    color: #333;
    -webkit-transition: color .2s;
    transition: color .2s;
  }
  .children a:hover {
    color: #ff6700;
  }
  .children img {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    vertical-align: middle;
  }
</style>
