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
          @search="fetch"
          allow-clear
          v-model="search"
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
      name: '',
      search: ''
    };
  },
  components: {
    AddDialog,
  },
  methods: {
    async fetch () {
      let params = {}
      if (this.search) {
        params = { name: this.search }
      }
      const res = await getCate(params);
      if (res.status === 200) {
        this.tableData = res.data.data;
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
        async onOk () {
          const res = await delCate(id)
          if (res.status === 200) {
            self.$message.success('删除成功!')
            self.fetch()
          }
        },
        onCancel () { },
      });
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
