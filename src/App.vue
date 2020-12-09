<template>
  <div id="app">
    <!-- <div id="nav">
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import './style/common.less'
export default {
  data(){
    return{}
  },
  mounted(){
    window.addEventListener('beforeunload', e => {
        this.beforeunloadFn(e)
    });
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
  },
  methods:{
    beforeunloadFn(e){
      console.log('刷新')
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  user-select: none;
  -webkit-user-seletct: none;
  -moz-user-seletct: none;
  -ms-user-seletct: none;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden; 
  padding: 0;
  margin: 0;
}
ul,li{
  margin: 0;
  list-style-type: none;
}
</style>
