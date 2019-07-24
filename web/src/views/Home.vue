<template>
  <div class="home">
     <Nav></Nav>
     <el-row>
       <el-col :span=16 :offset=2 style="background-color:yellow">
         <List></List>
       </el-col>
       <el-col :span=4 :offset=1 style="background-color:black">
         <Right></Right>
       </el-col>
     </el-row>
     <router-view></router-view>
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
