<template>
    <div>
        <el-card>
            <div class="blog_container">
                <div v-for="item in model" :key="item.id">
                    <h2 class="text-center blog_title">{{item.title}}</h2>
                    <div class="text-center blog_text"><i class="el-icon-timer"></i> 2019-7-24|<i class="el-icon-folder-opened"></i>{{item.categories.map(v=>v.typename).join('|')}}</div>
                    <p v-html="item.body" class="blog_body"></p>
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
// .blog_container{
//     background-color: #eee;
// }
.blog_text{
    margin: 10px 0;
}
.blog_body{
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
}
.blog_title{
    margin-top: 20px;
}
</style>