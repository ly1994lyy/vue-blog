<template>
  <div class="center login-box">
    <div class="login-box-main">
      <h1 class="center login-title">博客系统后台</h1>
      <div class="center form-box">
        <a-form-model
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
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
    </div>
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
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '用户名长度在3~5之间', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 8, message: '密码长度在6~8之间', trigger: 'blur' },
        ]
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
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-box {
  background: #d4c1c1;
  width: 100vw;
  height: 100vh;
  .login-box-main {
    width: 50vw;
    height: 60vh;
    border-radius: 1%;
    background: yellow;
    .login-title {
      font-size: 75px;
      font-weight: 700;
    }
    .form-box {
      width: 30vw;
      height: 40vh;
      .ant-form {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>