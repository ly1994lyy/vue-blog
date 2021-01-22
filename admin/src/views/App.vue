<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from "moment"
import "moment/locale/zh-cn"

moment.locale("zh-cn")
export default {
  data () {
    return {
      locale: zh_CN
    }
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>