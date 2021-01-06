<!--  -->
<template>
  <el-card>
     <div class="infinite-list-wrapper" style="overflow:auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
  </div>
  </el-card>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "palatability",
  components: {},
  data() {
    //这里存放数据
    return {
      count: 10,
      loading: false
    };
  },
  //监听属性 类似于data概念
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style lang='less' scoped>
/* lang='scss' @import url(); 引入公共scss文件 */
/* lang='less' @import './xx.less'; 引入公共less文件 */
.list{
  height: 200px;
  width: 200px;
  list-style: none;
  .list-item + .list-item {
      margin-top: 10px;
  }
  li{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #fff6f6;
    color: #ff8484;
  }
}
</style>