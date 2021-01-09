<template>
  <div class="center login-box">
    <a-form-model
      :model="loginForm"
      :rules="loginRules"
      layout="horizontal"
    >
      <a-form-model-item
        label="用户名"
        placeholder="usernam"
        prop="username"
      >
        <a-input v-model="loginForm.username"></a-input>
      </a-form-model-item>
      <a-form-model-item
        label="密码"
        placeholder="password"
        prop="password"
      >
        <a-input v-model="loginForm.password"></a-input>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button
          type="primary"
          @click="reset"
        >
          重置
        </a-button>
        <a-button
          style="margin-left: 10px;"
          @click="login"
        >
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { AdminLogin } from '@/api/auth'

export default {
  name: "login",
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {

      }
    }
  },
  methods: {
    async login () {
      try {
        const res = await AdminLogin({ username: this.loginForm.username, password: this.loginForm.password })
        console.log(res)
      } catch (error) {
        throw new Error(error)
      }
    },
    reset () {
      console.log('sda')
    }
  }
}
</script>

<style lang="less" scoped>
.login-box {
  background: #d4c1c1;
  width: 100vw;
  height: 100vh;
  .ant-form {
    width: 50vw;
    height: 60vh;
    background: yellow;
  }
}
</style>