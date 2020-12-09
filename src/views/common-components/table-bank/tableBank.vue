<template>
    <el-table :data="tableData" border :height="tableHeight" style="width: 100%">
        <el-table-column v-for="(item,index) in tableColumn" 
        :key="index" 
        :type="item.type"
        :prop="item.prop" 
        :label="item.label"  
        :width="item.width"
        :fixed="item.fixed"
        ></el-table-column>
    </el-table>
</template>
<script>
export default {
    name:'table-bank',
    props:{
        tableData:{
            type:Array,
            required: true
        },
        tableColumn:{
            type:Array,
            required: true
        },
        tableHeight:{
            type:Number,
            required: false
        }
    },
    data(){
        return{

        }
    }
}
</script>