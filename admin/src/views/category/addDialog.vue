<template>
  <a-modal
    :visible="visible"
    :title="title"
    cancelText="取消"
    okText="提交"
    :closable="false"
    @ok="submit"
    @cancel="cancel"
  >
    <a-form-model
      ref="form"
      :model="form"
      :rules="rules"
    >
      <a-form-model-item
        label='分类名称'
        prop="name"
      >
        <a-input v-model="form.name"></a-input>
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
import { createCate, putCate } from '@/api/cate';

export default {
  props: {
    id: String,
    visible: {
      type: Boolean,
      default: false,
    },
    name: String
  },
  data () {
    return {
      form: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请填写分类', trigger: 'blur' },
          { max: 7, message: '最大长度不能超过7', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    title () {
      if (this.id) {
        return '编辑';
      } else {
        return '新增';
      }
    },
  },
  watch: {
    name () {
      if (this.id && this.name) this.form.name = this.name
    }
  },
  methods: {
    cancel () {
      this.$emit('closeDialog')
    },
    submit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            if (this.id) {
              const res = await putCate(this.id, { ...this.form })
              if (res.status === 200) {
                this.$message.success('修改成功!')
                this.$emit('closeDialog')
                this.$emit('fetch')
              }
            } else {
              const res = await createCate({ ...this.form })
              if (res.status === 201) {
                this.$message.success('新增成功!')
                this.$emit('closeDialog')
                this.$emit('fetch')

              }
            }

          } catch (error) {
            console.log(error)
          }
        }
      })
    }
  },
};
</script>

<style lang="less" scoped></style>
