<template>
  <div>
    <h2>{{id ? '编辑':'新建'}}分类</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="分类名称">
        <el-input v-model="model.typename"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        const res = await this.$http.put(`/categories/edit/${this.id}`,this.model);
      } else {
        const res = await this.$http.post("/categories", this.model);
      }
      this.$message({
        message: "添加成功",
        type: "success"
      });
      this.$router.push("/categories/lists");
    },
    async fetch(){
        const res = await this.$http.get(`/categories/${this.id}`)
        this.model = res.data
    }
  },
  created () {
      this.id && this.fetch();
  },
};
</script>

<style lang="scss" scoped>
</style>