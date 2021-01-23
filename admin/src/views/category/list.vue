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
      :pagination="pagination"
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
import { getCate, delCate } from '@/api/cate'
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
      search: '',
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        showTotal: total => `共 ${total} 条数据`,
        pageSizeOptions: ['10', '20', '30', '50'],
        onChange: (current, pageSize) => this.changeCurrent(current, pageSize),
        onShowSizeChange: (current, size) => this.changSize(current, size)
      }
    };
  },
  components: {
    AddDialog,
  },
  methods: {
    async fetch () {
      let params = {
        query: {
          limit: this.pagination.pageSize,
          page: this.pagination.current
        }
      }
      if (this.search) {
        params = {
          query: {
            limit: this.pagination.pageSize,
            page: 1,
            where: {
              name: this.search
            }
          }
        }
      }
      const res = await getCate(params);
      if (res.status === 200) {
        this.tableData = res.data.data;
        this.pagination.total = Number(res.data.total)
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
    },
    changeCurrent (current, pageSize) {
      this.pagination.current = current
      this.pagination.pageSize = pageSize
      this.fetch()
    },
    changSize (current, size) {
      this.pagination.current = current
      this.pagination.pageSize = size
      this.fetch()
    }
  },
  computed: {
    ...mapState(['loading']),
  },
  created () {
    this.pagination.current = 1
    this.fetch();
  },
};
</script>

<style lang="less" scoped></style>
