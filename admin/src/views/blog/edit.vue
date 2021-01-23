<template>
  <a-card
    title="写博客"
    id="blog-card"
    :bordered="false"
  >
    <a-form-model
      :model="form"
      ref="form"
      layout="horizontal"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item
        label="标题"
        prop="title"
      >
        <a-input v-model="form.title" />
      </a-form-model-item>
      <a-form-model-item
        label="分类"
        prop="cate"
      >
        <a-select
          v-model="form.cate"
          mode="multiple"
        >
          <a-select-option
            :key="item._id"
            :value="item._id"
            v-for="item in categories"
          >{{ item.name }}</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item
        label="内容"
        prop="body"
        :wrapper-col="{ span: 23 }"
      >
        <mavonEditor
          :subfield="false"
          :autofocus="false"
          v-model="form.body"
          ref="md"
          style="width: 99%;z-index:0"
        />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 1 }">
        <a-button
          type="primary"
          @click="onSubmit"
        >
          提交
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </a-card>
</template>

<script>
import { getCate } from '@/api/cate';
import { createBlog } from '@/api/blog';
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'EditBlog',
  components: {
    mavonEditor,
  },
  data () {
    return {
      form: {
        title: '',
        cate: [],
        body: ''
      },
      rules: {
        title: [
          { required: true, message: '请填写标题', trigger: 'blur' },
          { max: 40, message: '标题长度不能超过40', trigger: 'blur' }
        ],
        cate: [
          { required: true, message: '请选择分类', trigger: 'blur' }
        ],
        body: [
          { required: true, message: '请填写内容', trigger: 'blur' }
        ]
      },
      categories: [],
      labelCol: { span: 1 },
      wrapperCol: { span: 6 },
    };
  },
  methods: {
    async getCates () {
      const res = await getCate();
      if (res.status === 200) {
        this.categories = res.data.data;
      }
    },
    async save () {
      const res = await createBlog(this.form)
      if (res.status === 201) {
        this.$message.success('保存成功')
        this.$router.push({ name: 'article' })
      }
    },
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.save()
        }
      })
    }
  },
  created () {
    this.getCates();
  },
};
</script>

<style lang="less" scoped>
#blog-card {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F161222%2F3-161222154931.jpg&refer=http%3A%2F%2Fpicture.ik123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613978706&t=782ea161b4f7ec15e0cc7b7799b6cc2b);
  color: #fff;
}
</style>
