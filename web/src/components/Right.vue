<template>
  <div>
    <el-card>
      <div slot="header">
        <span>博客分类</span>
      </div>
      <div v-for="item in categories" :key="item.id" class="text-center">{{item.typename}}<hr></div>
    </el-card>
    <el-card class="m-2">
      <div slot="header">
        <span>推荐博客</span>
      </div>
      <div v-for="item in categories" :key="item.id" class="text-center">{{item.typename}}<hr></div>
      
    </el-card>
    <el-card class="m-2">
      <div slot="header">
        <span>热门博客</span>
      </div>
      <div v-for="item in categories" :key="item.id" class="text-center">{{item.typename}}<hr></div>
      
    </el-card>
    <el-card class="m-2">
      <div slot="header">
        <span>最新博客</span>
      </div>
      <div v-for="item in categories" :key="item.id" class="text-center">{{item.typename}}<hr></div>
      
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    };
  },
  methods: {
    async fetchCategory() {
      const res = await this.$http.get("/categories");
      this.categories = res.data;
    }
  },
  created() {
    this.fetchCategory();
  }
};
</script>

<style lang="scss" scoped>
</style>