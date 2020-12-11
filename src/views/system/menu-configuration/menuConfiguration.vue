<template>
    <el-card>
        <div slot="header" class="clearfix">
            <span>菜单权限控制</span>
        </div>
        <el-button @click="handleClick">测试操作选中</el-button>
        <el-tree
            ref="tree"
            :data="data"
            show-checkbox
            node-key="id"
            :default-checked-keys="defaultCheckedKeys"
            @check-change="handleCheckChange">
        </el-tree>
    </el-card>
</template>
<script>
export default {
    name:'menu-configuration',
    data(){
        return{
            data: [
                {
                    id: '1x',
                    label: '一级 1',
                    children: [{
                        id: '4x',
                        label: '二级 1-1',
                    },{
                        id: '5x',
                        label: '二级 1-2',
                    }
                    ]
                }, 
                {
                    id: '2x',
                    label: '一级 2',
                    children: [{
                        id: '6x',
                        label: '二级 2-1'
                    }, {
                        id: '7x',
                        label: '二级 2-2'
                    }]
                }
            ],
            defaultCheckedKeys:[],
            checkedKeys:[]
        }
    },
    methods:{
        handleCheckChange(data, checked, indeterminate){
            this.checkedKeys=this.$refs.tree.getCheckedKeys()
            console.log('选中node',this.$refs.tree.getCheckedNodes());
            console.log('选中id',this.$refs.tree.getCheckedKeys())
        },
        handleClick(){
            this.defaultCheckedKeys=['5x']
        }
    }
}
</script>