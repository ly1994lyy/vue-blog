<template>
  <div>
    <el-card>
      <div slot="header">
        <span>博客分类</span>
      </div>
      <router-link tag="div" :to="`/categories/${item._id}`" v-for="item in categories" :key="item.id" class="text-center">
        {{item.typename}}
        <hr />
      </router-link>
    </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            categories: {}
        }
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