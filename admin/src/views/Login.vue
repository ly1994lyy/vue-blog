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
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" :loading="loginLoading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginLoading:false,
      username:'',
      password:''
    };
  },
  methods: {
    async login(){
      this.loginLoading = true
      await this.$http.post('/login',{username:this.username,password:this.password})
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
