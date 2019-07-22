<template>
  <div>
    <template>
      <el-table :data="model">
        <el-table-column prop="_id" label="Id" width="400"></el-table-column>
        <el-table-column prop="typename" label="分类名称"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                type="primary" icon="el-icon-edit" circle
                size="mini"
                @click="$router.push(`/categories/edit/${scope.row._id}`)"></el-button>
                <el-button
                icon="el-icon-delete" circle
                size="mini"
                type="danger"
                @click="remove(scope.row)"></el-button>
            </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/categories");
      this.model = res.data;
    },
    async remove(row)  {
        this.$confirm(`此操作将删除分类${row.typename}, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
            const res = await this.$http.delete(`/categories/delete/${row._id}`)
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            this.fetch()
        }).catch(async () => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
</style>