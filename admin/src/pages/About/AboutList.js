import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Table,
  Tag,
  Row,
  Col
} from "antd";
import { getAbout } from "../../api/about";
import { PlusOutlined } from "@ant-design/icons";

function AboutList(props) {
  const columns = [
    {
      title: "序号",
      dataIndex: "_id",
      align: "center",
      render: (text, record, index) => index + 1
    },
    {
      title: "ID",
      align: "center",
      dataIndex: "_id"
    },
    {
      title: "操作",
      align: "center",
      render: (text, record, index) => {
        return (
          <div>
            <Tag
              color="#108ee9"
              onClick={() =>
                props.history.push(`/admin/about/edit/${record._id}`)
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
    getAbout().then(res => {
      setDataList(res.data);
    });
  }, []);


  return (
    <Card title="关于作者">
      <Row justify="space-between" style={{ marginBottom: "15px" }}>
        <Col span={1.5}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => props.history.push("/admin/about/create")}
          >
            新增关于作者
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

export default AboutList
