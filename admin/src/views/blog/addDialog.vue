<template>
  <a-modal
    title="写博客"
    :visible="blogVisble"
    :dialog-style="{ top: 0 }"
    width="100%"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <p>hello</p>
  </a-modal>
</template>

<script>
export default {
  props: {
    blogVisble: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    handleOk () {
      this.$emit('closeDialog')
    },
    handleCancel () {
      this.$emit('closeDialog')
    }
  },
}
</script>

<style lang="less" scoped>
</style>