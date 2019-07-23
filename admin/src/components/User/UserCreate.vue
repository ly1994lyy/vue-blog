<template>
  <div>
    <h2>{{id ? '编辑':'新建'}}用户</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password" type="password"></el-input>
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
        const res = await this.$http.put(`/users/edit/${this.id}`,this.model);
      } else {
        const res = await this.$http.post("/users", this.model);
      }
      this.$message({
        message: "添加成功",
        type: "success"
      });
      this.$router.push("/users/lists");
    },
    async fetch(){
        const res = await this.$http.get(`/users/${this.id}`)
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