<template>
  <div>监听浏览器窗口变化：{{ index }}</div>

  <!-- 
      节流函数:在初始化的时候产生了一个闭包，闭包内保存了变量 last ，
      这个 last 记录了上一次执行 f 函数的时间。而当下一次触发节流函数的时候，
      如果此时时间 now 减去上次时间 last 小于了我们规定的节流时间 wait ，那么函数 f 将不会执行
    -->
</template>

<script>
import { throttle } from 'lodash'
export default {
  name: 'SvgMark',
  data() {
    return {
      index: 0
    }
  },
  mounted() {
    //正确节流
    this.reDraw = throttle(() => {
      this.index++
    }, 500)
    
    window.addEventListener('resize', this.reDraw)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reDraw)
  },
  methods: {
    //失效节流：很显然，第一个子组件在触发节流函数的时候产生了一个 last，而第二个组件在触发节流函数时候的时产生的 now 并没有满足 now - last > wait 的条件，所以没有执行重绘代码。而到了第 n 个组件触发节流函数的时候，满足了 now - last > wait 的条件所以重绘成功了
    // reDraw: throttle(function() {
    //   this.index++
    // }, 500)
  }
}
</script>