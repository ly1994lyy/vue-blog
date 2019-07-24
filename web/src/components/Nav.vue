<template>
  <div>
    <el-container>
      <el-header class="header_title d-flex jc-between">
        <div class="blog_title">前端菜鸟</div>
        <div class="blog_nav">
          <el-menu
            router
            :default-active="activeIndex"
            class="el-menu-demo"
            background-color="#f7f8e8"
            active-text-color="#ffd04b"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="/">博客列表</el-menu-item>
            <el-menu-item index="2">博客分类</el-menu-item>
            <el-menu-item index="3">时间归档</el-menu-item>
            <el-menu-item index="4">关于博主</el-menu-item>
          </el-menu>
        </div>
        <div class="blog_user">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-user"></i>
              李月
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.header_title {
  font-size: 30px;
  line-height: 60px;
  .blog_title {
    margin-left: 20px;
  }
}
.el-menu-demo {
  li {
    padding: 0 40px;
  }
}
</style>