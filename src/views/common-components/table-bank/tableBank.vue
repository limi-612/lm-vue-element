<template>
  <div>
    <el-table
      :data="tableData"
      border
      :height="tableHeight"
      style="width: 100%"
    >
      <el-table-column
        v-for="(item, index) in tableColumn"
        :key="index"
        :type="item.type"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :fixed="item.fixed"
      ></el-table-column>
      <slot name="extraColumn"></slot>
    </el-table>
    <div v-if="DetailedPagination" class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.pageNumber"
        :page-sizes="pageSizes"
        :page-size="params.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
    <div v-else class="pagination special-page">
      <span class="el-pagination__total">{{
        $t("common.currentPage") + params.pageNumber
      }}</span>
      <el-button-group>
        <el-button
          icon="el-icon-arrow-left"
          size="mini"
          :disabled="params.pageNumber !== 1 ? false : true"
          @click="changePage('del')"
          >上一页</el-button
        >
        <el-button
          size="mini"
          :disabled="tableData.length < params.pageSize ? true : false"
          @click="changePage('add')"
          >下一页<i class="el-icon-arrow-right el-icon--right"></i
        ></el-button>
      </el-button-group>
      <span class="el-pagination__jump">{{ $t("common.goto") }}</span>
      <el-input-number
        class="input-number"
        v-model="params.pageNumber"
        controls-position="right"
        :min="1"
        size="mini"
        @change="handleChange"
      ></el-input-number>
      <span>{{ $t("common.page") }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "table-bank",
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    tableColumn: {
      type: Array,
      required: true,
    },
    tableHeight: {
      type: Number,
      required: false,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 30, 50],
    },
    params: {
      type: Object,
      required: false,
    },
    DetailedPagination: {
      type: Object,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSizeChange(v) {
      this.params.pageSizes = v;
      this.$emit("getList");
    },
    handleCurrentChange(v) {
      this.params.pageNumber = v;
      this.$emit("getList");
    },
    changePage(satse) {
      satse === "add"
        ? (this.params.pageNumber = parseInt(this.params.pageNumber + 1))
        : (this.params.pageNumber = parseInt(this.params.pageNumber - 1));
      this.$emit("getList");
      // this.clearSelectAll();
    },
    handleChange(v) {
      this.params.pageNumber = this.params.pageNumber
        ? this.params.pageNumber
        : 1;
      this.$emit("getList");
    },
  },
};
</script>
<style lang="less" scoped>
.pagination {
  float: right;
  margin: 10px 0;
}
.special-page {
  padding: 2px 5px;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  .input-number {
    width: 75px;
    padding: 0 2px;
    margin: 0 2px;
  }
}
</style>