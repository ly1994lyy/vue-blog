<template>
  <div>
    <el-button type="primary" @click="$router.push('/category/create')">新增</el-button>
    
    <el-table :data="model" stripe>
      <el-table-column type="index" align="center" width="130px">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="分类名称"
        width="220px"
      >
      </el-table-column>
      <el-table-column label="操作" width="160px">
        <template v-slot="scope">
          <el-button @click="edit(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-popconfirm title="确定删除吗" @onConfirm="del(scope.row)">
            <el-button type="text" slot="reference" size="small"
              >删除</el-button
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getCate, delCate } from "../api/category";

export default {
  data() {
    return {
      model: {
        name: "",
        color: "",
      },
    };
  },
  methods: {
    async fetch() {
      const res = await getCate();
      this.model = res.data.data;
    },
    edit(row) {
      this.$router.push(`category/edit/${row._id}`);
    },
    async del(row) {
      await delCate(row._id);
      this.$message.success("删除成功!");
      this.fetch();
    },
  },
  created() {
    this.fetch();
  },
};
</script>
