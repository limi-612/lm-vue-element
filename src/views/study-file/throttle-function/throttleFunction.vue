<template>
    <div>
        <!-- 失效节流函数： -->
        <svgMark v-for="item in 10" :key="item.id" />
    </div>
</template>
<script>
import SvgMark from "./SvgMark"
export default {
    name:'throttle-function',
    components:{
        SvgMark
    },
    data(){
        return{

        }
    }
}
</script>