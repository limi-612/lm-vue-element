<template>
    <div>
        <el-card class="box-card">
            <p>导出表格</p><el-button type="primary" :loading="exportLoading" @click="exportExcel">主要按钮</el-button>
            <table-bank :tableColumn="column" :tableData="data"></table-bank>
        </el-card>
    </div>
</template>
<script>
import excel from "../../../libs/excel"
import tableBank from "../../common-components/table-bank/tableBank"
export default {
    name:'export-excel',
    components:{
        tableBank
    },
    data(){
        return{
            column:[
                {
                    type:"selection"
                },
                {
                    label: '一级分类',
                    prop: 'category1'
                },
                {
                    label: '二级分类',
                    prop: 'category2'
                },
                {
                    label: '三级分类',
                    prop: 'category3'
                }
            ],
            data:[
                 {
                    category1: 1,
                    category2: 2,
                    category3: 3
                },
                {
                    category1: 4,
                    category2: 5,
                    category3: 6
                },
                {
                    category1: 7,
                    category2: 8,
                    category3: 9
                }
            ],
            exportLoading:false
        }
    },
    methods:{
        exportExcel () {
            if (this.data.length) {
                this.exportLoading = true
                let title = []
                this.column.map(function(item,index){
                    //元素值，元素的索引，原数组。
                    if(item.label){
                        title.push(item.label)
                    }
                })
                let key = []
                this.column.map(function(item,index){
                    //元素值，元素的索引，原数组。
                    if(item.prop){
                        key.push(item.prop)
                    }
                })
                const params = {
                title: title,
                key: key,
                data: this.data,
                autoWidth: true,
                filename: '分类列表'
                }
                excel.export_array_to_excel(params)
                this.exportLoading = false
            } else {
               console.log('空数据')
            }
        }
    }
}
</script>