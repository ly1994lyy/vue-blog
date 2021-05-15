export const cateCols = [
  {
    align: 'center',
    dataIndex: '_id',
    title: 'ID',
  },
  {
    align: 'center',
    dataIndex: 'name',
    title: '分类名称',
  },
  {
    align: 'center',
    title: '创建时间',
    scopedSlots: { customRender: 'createTime' },
  },
  {
    align: 'center',
    title: '操作',
    scopedSlots: { customRender: 'operation' },
  },
]

export const BlogCols = [
  {
    align: 'center',
    dataIndex: '_id',
    title: 'ID',
  },
  {
    align: 'center',
    dataIndex: 'title',
    title: '标题',
  },
  {
    align: 'center',
    dataIndex: 'cate',
    title: '分类',
  },
  {
    align: 'center',
    title: '创建时间',
    scopedSlots: { customRender: 'createTime' },
  },
  {
    align: 'center',
    title: '操作',
    scopedSlots: { customRender: 'operation' },
  },
]