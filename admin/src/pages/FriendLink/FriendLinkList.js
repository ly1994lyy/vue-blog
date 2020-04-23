import React, { useState, useEffect } from "react";
import {
  Card,
  Popconfirm,
  message,
  Button,
  Table,
  Tag,
  Row,
  Col
} from "antd";
import { getFriendLink, delFriendLink } from "../../api/friendLink";
import { PlusOutlined } from "@ant-design/icons";

function FriendLinkList(props) {
  const columns = [
    {
      title: "序号",
      dataIndex: "_id",
      align: "center",
      render: (text, record, index) => index + 1
    },
    {
      title: "名称",
      align: "center",
      dataIndex: "title"
    },
    {
        title: "地址",
        align: "center",
        dataIndex: "ref"
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
                const { data } = await delFriendLink(record._id);
                message.success(data.message);
                const res = await getFriendLink();
                setDataList(res.data);
              }}
            >
              <Tag color="#f50">删除</Tag>
            </Popconfirm>
            <Tag
              color="#108ee9"
              onClick={() =>
                props.history.push(`/admin/friendlink/edit/${record._id}`)
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
    getFriendLink().then(res => {
      setDataList(res.data);
    });
  }, []);

  
  return (
    <Card title="友情链接">
      <Row justify="space-between" style={{ marginBottom: "15px" }}>
        <Col span={4}>
        </Col>
        <Col span={1.5}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => props.history.push("/admin/friendlink/create")}
          >
            添加友链
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


export default FriendLinkList
