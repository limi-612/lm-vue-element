<template>
 <el-row>
      <el-col span="24">
        <el-card>
            <div class="cropper-example cropper-first">
                <cropper :src="exampleImageSrc" crop-button-text="确认提交" @on-crop="handleCroped" />
            </div>
        </el-card>
      </el-col>
 </el-row>
</template>
<script>
import Cropper from "../../common-components/cropper-bank/cropperBank"
export default {
    name:'cropper-page',
    components:{
        Cropper
    },
    data(){
        return{

        }
    },
    computed: {
    },
    methods:{
        handleCroped(){

        }
    }
}
</script>
<style lang="less">
.cropper-example{
  height: 400px;
}
</style>