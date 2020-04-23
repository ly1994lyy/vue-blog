import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import {
  createCategory,
  getCategoryById,
  putCategory
} from "../../api/category";
import {SketchPicker} from "react-color"

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

function EditCategory(props) {
  const [form] = Form.useForm();
  const [dataCurrent] = useState({});
  const [currentColor,setColor] = useState('')
  useEffect(() => {
    if (props.match.params.id) {
      getCategoryById(props.match.params.id).then(res => {
        form.setFieldsValue({ ...res.data });
        setColor(res.data.color)
      });
    }
  }, []);
  const onFinish =async values => {
    values.color = currentColor
    if (props.match.params.id) {
      await putCategory(props.match.params.id, { ...values });
      message.success("修改分类成功！");
    } else {
      await createCategory({ ...values });
      message.success("添加分类成功！");
    }
    props.history.push("/admin/category");
  };

  const onFinishFailed = errorInfo => {
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
        label="分类名称"
        name="name"
        rules={[{ required: true, message: "请填写分类" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="颜色"
        name="color"
        rules={[{ required: true, message: "请选择颜色" }]}
      >
        <SketchPicker onChange={e=>setColor(e.hex)} color={currentColor}/>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditCategory;
