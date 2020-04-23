import React, { useState, useEffect } from "react";
import {
  Card,
  Popconfirm,
  message,
  Table,
  Tag,
  Input,
  Row,
  Col
} from "antd";
import {getUser,delUser} from "../../api/auth"

const { Search } = Input;

function UserList() {
  const columns = [
    {
      title: "序号",
      dataIndex: "_id",
      align: "center",
      render: (text, record, index) => index + 1
    },
    {
      title: "用户名称",
      align: "center",
      dataIndex: "username"
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
                const { data } = await delUser(record._id);
                message.success(data.message);
                fetchUser()
              }}
            >
              <Tag color="#f50">删除</Tag>
            </Popconfirm>
          </div>
        );
      }
    }
  ];
  const [userList, setUserList] = useState([]);

  const fetchUser = async (searchValue)=>{
      const res = await getUser(searchValue)
      setUserList(res.data)
  }
  useEffect(() => {
    fetchUser()
  }, []);

  const searchUser= async values => {
    const res = await getUser({ username: values });
    setUserList(res.data);
  };

  return (
    <Card title="用户列表">
      <Row justify="space-between" style={{ marginBottom: "15px" }}>
        <Col span={4}>
          <Search
            placeholder="搜索分类"
            allowClear
            onSearch={searchUser}
            style={{ width: 200 }}
          />
        </Col>
      </Row>

      <Table
        rowKey="_id"
        columns={columns}
        dataSource={userList}
        bordered
        pagination={{ pageSize: 5, showQuickJumper: true }}
      />
    </Card>
  );
}

export default UserList
