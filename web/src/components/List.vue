<template>
    <div>
        <el-card>
            <div class="blog_container">
                <div v-for="item in model" :key="item.id">
                    <h2 class="text-center">{{item.title}}</h2>
                    <div class="text-center"><i class="el-icon-timer"></i> 2019-7-24|<i class="el-icon-folder-opened"></i></div>
                    <p v-html="item.body"></p>
                </div> 
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: []
            }
        },
        methods: {
            async fetch() {
                const res = await this.$http.get('/posts')
                console.log(res.data)
                this.model = res.data
            }
        },
        created () {
            this.fetch();
        },
    }
</script>

<style lang="scss" scoped>
.blog_container{
    background-color: #eee;
}
</style>