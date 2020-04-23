import React, { useState, useEffect } from "react";
import { Card, Popconfirm, message, Button } from "antd";
import { Table, Tag, Input, Row, Col,Switch } from "antd";
import { getArticle, delArticle,putArticle } from "../../api/article";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

function ArticleList(props) {
  const columns = [
    {
      title: "序号",
      dataIndex: "_id",
      align: "center",
      render: (text, record, index) => index + 1
    },
    {
      title: "标题",
      align: "center",
      dataIndex: "title"
    },
    {
        title:"分类",
        align:"center",
        render:(text,record,index)=>{
            if(record.categories){
                return (
                    <div>
                        {record.categories.map(item=>{
                            return <Tag key={item._id} color="#87d068" >{item.name}</Tag>
                        })}
                    </div>
                )
            }
        }
    },
    {
      title: "是否热门",
      align: "center",
      dataIndex: "isHot",
      render: (text, record, index) => {
        return <Switch checked={record.isHot} onChange={async checked=>{
          await putArticle(record._id,{isHot:checked});
          const res = await getArticle();
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
                const { data } = await delArticle(record._id);
                message.success(data.message);
                const res = await getArticle();
                setDataList(res.data);
              }}
            >
              <Tag color="#f50">删除</Tag>
            </Popconfirm>
            <Tag
              color="#108ee9"
              onClick={() =>
                props.history.push(`/admin/article/edit/${record._id}`)
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
    getArticle().then(res => {
      setDataList(res.data);
    });
  }, []);

  const searchCate = async values => {
    const res = await getArticle({ searchWord: values });
    setDataList(res.data);
  };

  return (
    <Card title="文章列表">
      <Row justify="space-between" style={{ marginBottom: "15px" }}>
        <Col span={4}>
          <Search
            placeholder="搜索文章"
            allowClear
            onSearch={searchCate}
            style={{ width: 200 }}
          />
        </Col>
        <Col span={1.5}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => props.history.push("/admin/article/create")}
          >
            写文章
          </Button>
        </Col>
      </Row>

      <Table
        rowKey="_id"
        columns={columns}
        dataSource={dataList}
        bordered
        pagination={{ pageSize: 5, showQuickJumper: true}}
      />
    </Card>
  );
}

export default ArticleList;

