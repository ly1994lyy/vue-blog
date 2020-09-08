<template>
  <div class="login-container">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#2d2424"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <div class="login-box">
      <h2 class="login-title">欢迎登录</h2>
      <el-form ref="form" :model="model" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" :loading="loginLoading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from '../api/auth'

export default {
  data() {
    return {
      loginLoading:false,
      model:{
        username:'',
        password:''
      }
    };
  },
  methods: {
    async login(){
      this.loginLoading = true
      const res = await login({username:this.model.username,password:this.model.password})
      const token = res.data.token
      localStorage.setItem('adminToken',token)
      this.loginLoading = false
      this.$router.push('/')
    }
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  #particles-js {
    width: 100vw;
    height: 100vh;
    background: #000;
  }
  .login-box {
    position: absolute;
    top: 25vh;
    left: 35vw;
    width: 30vw;
    height: 50vh;
    border: 1px solid #fff;
    .login-title {
      text-align: center;
      color: #fff;
    }
  }
}
</style>
