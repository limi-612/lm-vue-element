<template>
    <el-card>
        <div slot="header" class="clearfix">
            <span>菜单权限控制</span>
        </div>
        <!-- <el-button @click="handleClick" type="primary">确定</el-button> -->
       
        <table-bank :tableColumn="tableColumn" :tableData="tableData" :params="searchForm">
            <el-table-column  slot="extraColumn" fixed="right" label="操作" width="220">
                <template slot-scope="scope">
                    <el-button size="mini" @click="showConfiguration(scope.$index, scope.row)">配置</el-button>
                    <el-button size="mini" type="danger" >删除</el-button>              
                </template>
            </el-table-column> 
        </table-bank>
     <!-- 弹窗 -->
        <el-dialog title="用户菜单权限配置" :visible.sync="dialog.dialogVisible" @close="clickCancel" :close-on-click-modal="false" width="600" top="10vh">
            <el-tree
                ref="tree"
                :data="treeData.data"
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
import util from "../../../libs/util"
export default {
    name:'menu-configuration',
    components:{tableBank},
    data(){
        return{
            defaultCheckedKeys:[],
            checkedKeys:[],
            halfCheckedKeys:[],
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
            dialog:{
                rowId:null,
                dialogVisible: false
            },
            checkAll:false,
            treeData:{
                data:[]
            },
            searchForm:{
                pageNumber:1,
                pageSize:10,
            }
        }
    },
    methods:{
        init(){
            //初始化默认选项
            this.defaultCheckedKeys=['5x']
            this.checkedKeys=['5x']
        },
        showConfiguration(index,row){
            console.log(row)
            //保存当前id
            this.dialog.rowId=row.user
            //弹窗展示
            this.dialog.dialogVisible = true
            //获取设置目录数据
            this.treeData = util.getMenuPermissionData(this,this.$store.state.AllShowPages)
            //设置已给权限目录
            let roleData= JSON.parse(window.localStorage.getItem('role-'+this.dialog.rowId))
            this.defaultCheckedKeys = roleData ? roleData.checkedKeys : []
            //判断全选或者反选
            roleData&&roleData.checkedKeys.length+roleData.halfCheckedKeys.length >= this.treeData.ids.length ? this.checkAll = true : this.checkAll = false
            console.log('获取存储目录权限',window.localStorage.getItem('role-'+this.dialog.rowId))
        },
        //树形控件选中
        handleCheckChange(data, node){
            console.log(data,node)
            //存储当前选项
            this.checkedKeys=node.checkedKeys
            this.halfCheckedKeys=node.halfCheckedKeys
        },
        //全/反选
        handleChecked(){
            if(this.checkAll){
                this.$refs.tree.setCheckedKeys([]);
                this.checkedKeys=[]
            }else{
                this.$refs.tree.setCheckedKeys(this.treeData.ids);
                this.checkedKeys=this.treeData.ids
            }
            this.checkAll=!this.checkAll
        },
        //保存
        clickSubmit(){
            console.log('根据用户存储目录权限',this.checkedKeys)
            //根据id存储当前权限
            window.localStorage.setItem('role-'+this.dialog.rowId, JSON.stringify({'checkedKeys':this.checkedKeys,'halfCheckedKeys':this.halfCheckedKeys}));
            //清理
            this.clickCancel()
        },
        //取消（关闭弹窗）
        clickCancel(){
            this.dialog.dialogVisible = false
            this.checkAll=false
        }
    }
}
</script>