<template>
  <div>
    <h2>{{id ? '编辑':'新建'}}博客</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
          <el-select v-model="model.categories" multiple>
              <el-option 
              v-for="item in categories" 
              :key="item.id"
              :value="item._id"
              :label="item.typename"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="内容">
          <vue-editor v-model="model.body" type="textarea"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      categories:{}
    };
  },
  components: {
      VueEditor,
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        const res = await this.$http.put(`/posts/edit/${this.id}`,this.model);
      } else {
        const res = await this.$http.post("/posts", this.model);
      }
      this.$message({
        message: "添加成功",
        type: "success"
      });
      this.$router.push("/posts/lists");
    },
    async fetch(){
        const res = await this.$http.get(`/posts/${this.id}`)
        this.model = res.data
    },
    async fetchCategory(){
        const res = await this.$http.get('/categories')
        this.categories = res.data
    }
  },
  created () {
      this.id && this.fetch();
      this.fetchCategory();
  },
};
</script>

<style lang="scss" scoped>
</style>