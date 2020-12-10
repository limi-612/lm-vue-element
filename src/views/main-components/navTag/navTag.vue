<template>
    <div class="nav-tag-bar" :style="'width: calc(100% - '+(collapse ? '65px)' : '240px)')">
        <div class="el-tabs__nav-left">
            <span class="el-tabs__nav-prev nav-p-f" @click="collapseBtn"><i :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i></span>
            <span class="el-tabs__nav-prev nav-p-b" @click="scrollBtn(240)"><i class="el-icon-arrow-left"></i></span>
        </div>
        <div class="el-tabs__nav-right" style="background-color: #FFF;">
            <span class="el-tabs__nav-next nav-n-b" @click="scrollBtn(-240)"><i class="el-icon-arrow-right"></i></span>
            <el-dropdown size="small" style="width:26px" @command="deleteTag">
                <span class="nav-n-d"><i class="el-icon-circle-close"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="all">{{$t('common.closeAll')}}</el-dropdown-item>
                    <el-dropdown-item command="others">{{$t('common.closeOther')}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div ref="scrollCon" class="nav-tag">
            <div ref="scrollBody" class="tags" :style="'left:'+tagBodyLeft+'px;'">
                <el-tag
                    :effect="currentPagePath==tag.path ? 'dark' : 'plain'"
                    size="medium" 
                    v-for="(tag,index) in pageTagsList"
                    :ref="tag.path"
                    :name="tag.name"
                    :class="currentPagePath==tag.path ? 'is-active-tag' : 'el-tag--info'"
                    :key="index"
                    :closable="tag.path=='/home' ? false : true "
                    :disable-transitions="false"
                    @close="handleClose(tag)"
                    @click="handleClick(tag)">
                    {{tag.meta.title}}
                </el-tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-tag-bar',
    props:{
        theme:{
            type:Object,
            default:()=>{
                let data={
                    backgroundColor:'#545c64',
                    textColor:'#fff',
                    activeTextColor:'#ffd04b',
                    tagType:'warning',
                }
                return data
            }
        },
        collapse:Boolean
    },
    data(){
        return{
            pageTagsList:this.$store.state.openPages,
            tagBodyLeft:0,
            currentPageName:this.$route.name,
            currentPagePath:this.$route.path,
        }
    },
    methods:{
        collapseBtn(){
            this.$emit('changeCollapse', !this.collapse)
        },
        scrollBtn(offset){
             const outerWidth = this.$refs.scrollCon.offsetWidth
             const bodyWidth = this.$refs.scrollBody.offsetWidth
            if(offset>0){
                this.tagBodyLeft=Math.min(0, this.tagBodyLeft + offset)
            }else{
                if (outerWidth < bodyWidth) {
                    if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
                        this.tagBodyLeft = this.tagBodyLeft
                    } else {
                        this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
                    }
                } else {
                    this.tagBodyLeft = 0
                }
            }
        },
        //关闭tag
        handleClose(tag){
            let pageOpenedList = this.$store.state.openPages;
            let lastPageObj = pageOpenedList[0];
            if (this.currentPagePath === tag.path) {
                let len = pageOpenedList.length;
                for (let i = 1; i < len; i++) {
                    if (pageOpenedList[i].path === tag.path) {
                        if (i < len - 1) {
                        lastPageObj = pageOpenedList[i + 1];
                        } else {
                        lastPageObj = pageOpenedList[i - 1];
                        }
                        break;
                    }
                }
            }
            this.$store.commit('closeSinglePage',tag.path)
            this.$store.commit('closeCachePage',tag.path)
            if (this.currentPagePath === tag.path) {
              this.$router.push({path:lastPageObj.path})
            }
        },
        //关闭所有tag
        deleteTag(command){
            if(command.includes('all')){
                this.$store.commit('clearAllPages')
                this.$router.push({name:'home'})
            }else{
                this.$store.commit('clearOthersPages',this.$route)
            }
            this.tagBodyLeft = 0
        },
        //跳转tag
        handleClick(tag){
            this.$router.push({path:tag.path})
        },
        RightViewingDistance(route){
        //   console.log('left距离',this.$refs[route.path][0].$el.offsetLeft)
        //   this.tagBodyLeft=this.$refs[route.path][0].$el.offsetLeft
          let routeLeft=this.$refs[route.path][0].$el.offsetLeft
          let routeWidth=this.$refs[route.path][0].$el.offsetWidth
            if(this.$refs.scrollBody.offsetWidth<this.$refs.scrollCon.offsetWidth){
                this.tagBodyLeft=0
                
            }else{
                if(this.$refs.scrollCon.offsetWidth<(routeLeft+routeWidth)){
                    this.tagBodyLeft=(this.$refs.scrollCon.offsetWidth-(routeLeft+routeWidth))
                }else{
                    this.tagBodyLeft=0
                }
            }
        }
    },
    mounted(){
        this.refsTag = this.$refs.tagsPageOpened0;
        // console.log('this:',this.$route.path)
    },
    watch: {
        $route(to) {
        this.currentPagePath = to.path;
            this.$nextTick(() => {
                this.RightViewingDistance(to);
                // console.log(this.refsTag)
                // this.refsTag.forEach((item, index) => {
                //     if (to.path === item.path) {
                //         let tag = this.refsTag[index].$el;
                //         this.RightViewingDistance(tag);
                //     }
                // });
            });
        }
    }
}
</script>