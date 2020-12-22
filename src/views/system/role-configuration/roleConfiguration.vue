<template>
    <el-card>
        <div slot="header" class="clearfix">
            <span>菜单权限控制</span>
        </div>
        <!-- <el-button @click="handleClick" type="primary">确定</el-button> -->
       
        <table-bank :tableColumn="tableColumn" :tableData="tableData">
            <el-table-column slot="extraColumn" fixed="right" label="操作" width="220">
                <!-- handleEdit(scope.$index, scope.row) -->
                <!-- @click="handleDelete(scope.$index, scope.row)" -->
                <!-- <template slot-scope="scope"> -->
                    <el-button size="mini" @click="()=>{dialogVisible = true}">配置</el-button>
                    <el-button size="mini" type="danger" >删除</el-button>              
                <!-- </template> -->
            </el-table-column> 
        </table-bank>
     <!-- 弹窗 -->
        <el-dialog title="用户菜单权限配置" :visible.sync="dialogVisible" @close="clickCancel" width="600" top="10vh">
            <el-tree
                ref="tree"
                :data="data"
                show-checkbox
                node-key="id"
                :default-checked-keys="defaultCheckedKeys"
                :default-expand-all="false"
                @check="handleCheckChange"
                >
            </el-tree>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleChecked">全选/反选</el-button>
                <el-button @click="clickCancel">取 消</el-button>
                <el-button type="primary" @click="clickSubmit">确 定</el-button>
            </div>
        </el-dialog>
    </el-card>
</template>
<script>
import tableBank from "../../common-components/table-bank/tableBank"
export default {
    name:'menu-configuration',
    components:{tableBank},
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
            checkedKeys:[],
            tableColumn:[
                {
                    label: '用户名',
                    prop: 'user'
                },
                {
                    label: '说明',
                    prop: 'description'
                }
            ],
            tableData:[
                {
                    user:'admin',
                    description:''
                },
                {
                    user:'123',
                    description:''
                }
            ],
            dialogVisible: false,
            checkAll:false
        }
    },
    methods:{
        init(){
            //初始化默认选项
            this.defaultCheckedKeys=['5x']
            this.checkedKeys=['5x']
        },
        //树形控件选中
        handleCheckChange(data, node){
            this.checkedKeys=node.checkedKeys
            console.log('选中数据',data,node)
        },
        //全/反选
        handleChecked(){
            if(this.checkAll){
                this.$refs.tree.setCheckedKeys([]);
            }else{

            }
            this.checkAll=!this.checkAll
        },
        //保存
        clickSubmit(){
            console.log('保存',this.checkedKeys)
            this.clickCancel()
        },
        //取消（关闭弹窗）
        clickCancel(){
            this.dialogVisible = false
        }
    }
}
</script>