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
