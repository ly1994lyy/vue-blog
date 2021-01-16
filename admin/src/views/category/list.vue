<template>
  <div>
    <a-row
      type="flex"
      align="middle"
      :style="{marginBottom:'20px'}"
    >
      <a-col :span="4">
        <a-input-search
          placeholder="搜索分类"
          style="width: 200px"
          @search="onSearch"
        />
      </a-col>
      <a-col :span="4">
        <a-button
          type="primary"
          icon="plus"
          @click="add"
        >新增</a-button>
      </a-col>
    </a-row>
    <a-table
      rowKey="_id"
      :dataSource="tableData"
      :columns="columns"
      :loading="loading"
      bordered
    >
      <span
        slot="operation"
        slot-scope="text, record"
      >
        <a-button
          type="link"
          @click="edit(record)"
        >编辑</a-button>
        <a-button
          type="link"
          @click="del(record._id)"
        >删除</a-button>
      </span>
    </a-table>

    <add-dialog
      :visible="visible"
      :id="id"
      :name="name"
      @closeDialog="closeDialog"
      @fetch="fetch"
    ></add-dialog>
  </div>
</template>

<script>
import { getCate, delCate } from '@/api/cate';
import { mapState } from 'vuex';
import { cateCols } from '@/utils/enum'
import AddDialog from './addDialog.vue';

export default {
  name: 'CateList',
  data () {
    return {
      tableData: [],
      columns: cateCols,
      visible: false,
      id: '',
      name: ''
    };
  },
  components: {
    AddDialog,
  },
  methods: {
    async fetch () {
      try {
        const res = await getCate();
        if (res) {
          this.tableData = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    edit (row) {
      this.id = row._id
      this.name = row.name
      this.visible = true
    },
    del (id) {
      let self = this
      this.$confirm({
        title: '提示',
        content: '确定要删除此条分类?',
        onOk () {
          return new Promise((resolve, reject) => {
            delCate(id).then((res) => {
              if (res.status === 200) {
                self.$message.success('修改成功!')
                self.fetch()
                resolve()
              }
            }).catch(() => {
              console.log(reject)
            })
          })
        },
        onCancel () { },
      });
    },
    onSearch () {
      console.log('sda')
    },
    add () {
      this.visible = true
    },
    closeDialog () {
      this.id = ""
      this.name = ""
      this.visible = false
    }
  },
  computed: {
    ...mapState(['loading']),
  },
  created () {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped></style>
