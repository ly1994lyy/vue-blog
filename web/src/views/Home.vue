<template>
  <div class="home">
     <Nav></Nav>
     <el-row>
       <el-col :span=16 :offset=2>
         <router-view></router-view>
       </el-col>
       <el-col :span=4 :offset=1>
         <Right></Right>
       </el-col>
     </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../components/Nav";
import List from "../components/List";
import Right from "../components/Right";

export default {
  name: "home",
  components: {
    Nav,
    List,
    Right
  }
};
</script>

<style lang="scss" scoped>

</style>
