<template>
  <div class="cropper-wrapper">
    <div class="img-box">
      <img class="cropper-image" :id="imgId" alt="">
    </div>
    <div class="right-con">
      <div v-if="preview" class="preview-box" :id="previewId"></div>
      <div class="button-box">
        <slot>
            <el-upload
                class="upload-demo"
                action="image/upload"
                :before-upload="beforeUpload">
                <el-button style="width: 150px;" size="small" type="primary">上传图片</el-button>
            </el-upload>
          <!-- <Upload action="image/upload" :before-upload="beforeUpload">
            <el-button style="width: 150px;" type="primary">上传图片</el-button>
          </Upload> -->
        </slot>
        <div v-show="insideSrc">
            <el-button-group>
                <el-button type="primary" size="small" @click="rotate">旋转</el-button>
                <el-button type="primary" size="small" @click="shrink">缩小</el-button>
                <el-button type="primary" size="small" @click="magnify">放大</el-button>
                <el-button type="primary" size="small" @click="scale('X')">Y转</el-button>
                <el-button type="primary" size="small" @click="scale('Y')">X转</el-button>
                <el-button type="primary" size="small" @click="move(0, -moveStep)">上移</el-button>
                <el-button type="primary" size="small" @click="move(-moveStep, 0)">左移</el-button>
                <el-button type="primary" size="small" @click="move(0, moveStep)">下移</el-button>
                <el-button type="primary" size="small" @click="move(moveStep, 0)">右移</el-button>
            </el-button-group>
            <el-button style="width: 150px;margin-top: 10px;" type="primary" @click="crop">{{ cropButtonText }}</el-button>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'
export default {
  name: 'Cropper',
  props: {
    src: {
      type: String,
      default: ''
    },
    preview: {
      type: Boolean,
      default: true
    },
    moveStep: {
      type: Number,
      default: 4
    },
    cropButtonText: {
      type: String,
      default: '裁剪'
    }
  },
  data () {
    return {
      cropper: null,
      insideSrc: ''
    }
  },
  computed: {
    imgId () {
      return `cropper${this._uid}`
    },
    previewId () {
      return `cropper_preview${this._uid}`
    }
  },
  watch: {
    src (src) {
      this.replace(src)
    },
    insideSrc (src) {
      this.replace(src)
    }
  },
  methods: {
    beforeUpload (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        this.insideSrc = event.srcElement.result
      }
      return false
    },
    replace (src) {
      this.cropper.replace(src)
      this.insideSrc = src
    },
    rotate () {
      this.cropper.rotate(90)
    },
    shrink () {
      this.cropper.zoom(-0.1)
    },
    magnify () {
      this.cropper.zoom(0.1)
    },
    scale (d) {
      this.cropper[`scale${d}`](-this.cropper.getData()[`scale${d}`])
    },
    move (...argu) {
      this.cropper.move(...argu)
    },
    crop () {
      this.cropper.getCroppedCanvas().toBlob(blob => {
        this.$emit('on-crop', blob)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      let dom = document.getElementById(this.imgId)
      this.cropper = new Cropper(dom, {
        preview: `#${this.previewId}`,
        checkCrossOrigin: true
      })
    })
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
