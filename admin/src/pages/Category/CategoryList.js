import React, { useState, useEffect } from "react";
import {
  Card,
  Popconfirm,
  message,
  Button,
  Switch,
  Table,
  Tag,
  Input,
  Row,
  Col
} from "antd";
import { getCategory, delCategory,putCategory } from "../../api/category";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

function CategoryList(props) {
  const columns = [
    {
      title: "序号",
      dataIndex: "_id",
      align: "center",
      render: (text, record, index) => index + 1
    },
    {
      title: "分类",
      align: "center",
      dataIndex: "name"
    },
    {
      title: "是否热门",
      align: "center",
      dataIndex: "isHot",
      render: (text, record, index) => {
        return <Switch checked={record.isHot} onChange={async checked=>{
          await putCategory(record._id,{isHot:checked});
          const res = await getCategory();
          setDataList(res.data)
        }} />;
      }
    },
    {
      title: "操作",
      align: "center",
      render: (text, record, index) => {
        return (
          <div>
            <Popconfirm
              title="确定删除此项吗?"
              okText="是"
              cancelText="否"
              onCancel={() => message.error("取消删除")}
              onConfirm={async () => {
                const { data } = await delCategory(record._id);
                message.success(data.message);
                const res = await getCategory();
                setDataList(res.data);
              }}
            >
              <Tag color="#f50">删除</Tag>
            </Popconfirm>
            <Tag
              color="#108ee9"
              onClick={() =>
                props.history.push(`/admin/category/edit/${record._id}`)
              }
            >
              编辑
            </Tag>
          </div>
        );
      }
    }
  ];
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    getCategory().then(res => {
      setDataList(res.data);
    });
  }, []);

  const searchCate = async values => {
    const res = await getCategory({ searchWord: values });
    setDataList(res.data);
  };

  return (
    <Card title="分类管理">
      <Row justify="space-between" style={{ marginBottom: "15px" }}>
        <Col span={4}>
          <Search
            placeholder="搜索分类"
            allowClear
            onSearch={searchCate}
            style={{ width: 200 }}
          />
        </Col>
        <Col span={1.5}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => props.history.push("/admin/category/create")}
          >
            添加分类
          </Button>
        </Col>
      </Row>

      <Table
        rowKey="_id"
        columns={columns}
        dataSource={dataList}
        bordered
        pagination={{ pageSize: 5, showQuickJumper: true }}
      />
    </Card>
  );
}

export default CategoryList;
