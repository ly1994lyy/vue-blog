<template>
  <a-layout
    id="components-layout-demo-responsive"
    style="height:100vh"
  >
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      style="height:100vh"
    >
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="[$route.path]"
      >
        <a-menu-item
          v-for="item in mainRoutes"
          :key="item.path"
          @click="$router.push({name:item.name})"
        >
          <a-icon :type="item.type" />
          <span class="nav-text">{{item.title}}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Route from '../router/index'

export default {
  name: "Main",
  data () {
    return {
      theme: 'dark'
    }
  },
  methods: {
    onCollapse (collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint (broken) {
      console.log(broken);
    }
  },
  computed: {
    mainRoutes () {
      return Route.options.routes.find(e => e.path === '/').children
    }
  }
}
</script>

<style lang="less" scoped>
</style>