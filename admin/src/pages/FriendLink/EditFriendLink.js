import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import {
  createFriendLink,
  getFriendLinkById,
  putFriendLink,
} from "../../api/friendLink";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function EditFriendLink(props) {
  const [form] = Form.useForm();
  const [dataCurrent] = useState({});
  useEffect(() => {
    if (props.match.params.id) {
      getFriendLinkById(props.match.params.id).then((res) => {
        form.setFieldsValue({ ...res.data });
      });
    }
  }, []);
  const onFinish = async (values) => {
    if (props.match.params.id) {
      await putFriendLink(props.match.params.id, { ...values });
      message.success("修改成功！");
    } else {
      await createFriendLink({ ...values });
      message.success("添加成功！");
    }
    props.history.push("/admin/friendlink");
  };

  const onFinishFailed = (errorInfo) => {
    message.error("请检查填写项");
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={dataCurrent}
      form={form}
    >
      <Form.Item
        label="名称"
        name="title"
        rules={[{ required: true, message: "请填写名称" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="地址"
        name="ref"
        rules={[{ required: true, message: "请填写地址" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditFriendLink;
