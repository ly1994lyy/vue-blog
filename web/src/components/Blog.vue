<template>
    <div>
        <el-card>
            <div class="blog_container">
                <h2 class="text-center blog_title">{{model.title}}</h2>
                <div class="text-center blog_text"><i class="el-icon-timer"></i>{{model.created}}|<i class="el-icon-folder-opened"></i>{{model.categories.map(v=>v.typename).join('|')}}</div>
                <p v-html="model.body" class="blog_body"></p>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        props:{
            id:''
        },
        data() {
            return {
                model: {
                    categories:[]
                }
            }
        },
        methods: {
            async fetch() {
                const res = await this.$http.get(`/posts/${this.id}`)
                this.model = res.data
            }
        },
        created () {
            this.fetch();
        },
    }
</script>

<style lang="scss" scoped>

</style>