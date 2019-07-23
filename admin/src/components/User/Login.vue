<template>
  <div class="login">
    <div class="login_container">
      <div>
        <h2 class="title">博客管理后台</h2>
        <el-card class="box-card">
          <div class="login_form">
            <el-form
            class="form_container" 
            @submit.native.prevent="save">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="model.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="model.password" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button native-type="submit" type="primary">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
      async save() {
          const res = await this.$http.post('/user/login',this.model)
          localStorage.token = res.data.token
          this.$router.push('/')
          this.$message({
              type:'success',
              message:'登录成功'
          })
      }
  },
};
</script>

<style lang="scss" scoped>
.login{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: url("../../../public/logo.jpg");
}
.login_container {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 30px;
  .title {
    font-size: 60px;
  }
  .box-card {
    margin-top: 35px;
  }
}
</style>