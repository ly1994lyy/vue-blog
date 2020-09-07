<template>
    <div>
        <el-table :data="model" border stripe>
            <el-table-column v-for="col in columns"
                :prop="col.id"
                :key="col.id"
                :label="col.label"
                :width="col.width">
            </el-table-column>
        </el-table>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            model:{
                name:'',
                color:''
            }
        }
    },
    methods: {
        async fetch() {
            const res = await this.$http.get('/categories')
            this.model = res.data.data
        }
    },
    created() {
        this.fetch()
    },
}
</script>