<template>
    <div>
        <h2>{{id?"编辑":"新建"}}</h2>
        <el-form :model="model" ref="form" label-width="80px">
            <el-form-item label="分类名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="create">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        
    </div>
</template>

<script>
import {createCate, getCateById,updataCate} from '../api/category'

export default {
    props:{
        id:{} 
    },
    data() {
        return {
            model:{
                name:''
            }
        }
    },
    methods: {
        async create(){
            if(this.id){
                await updataCate(this.id,{name:this.model.name})
                this.$message.success('修改成功')
            }else{
                await createCate({name:this.model.name})
                this.$message.success('创建成功')
            }
            
            this.$router.push('/category')
        },
        async fetch(){
            const res = await getCateById(this.id)
            this.model = res.data
        }
    },
    created() {
        console.log(this.id);
        this.id && this.fetch()
    },
}
</script>