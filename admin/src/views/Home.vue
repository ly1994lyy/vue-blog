<template>
  <div class="home">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-row>
          <el-col :span="2">博客后台管理系统</el-col>
          <el-col :span="1" :offset="21">
            <el-dropdown>
              <i class="el-icon-setting"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
    <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: #545c64">
        <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>博客管理
            </template>
            <el-menu-item-group>
              <template slot="title">博客分类</template>
              <el-menu-item index="/categories/lists">分类列表</el-menu-item>
              <el-menu-item index="/categories/create">新建分类</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: rgb(75, 10, 10);
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
