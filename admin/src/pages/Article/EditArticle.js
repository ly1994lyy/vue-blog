import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Select } from "antd";
import { createArticle, getArticleById, putArticle } from "../../api/article";
import { getCategory } from "../../api/category";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import { imgUrl } from "../../utils/config";

const { Option } = Select;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function EditArticle(props) {
  const [form] = Form.useForm();
  const [cateList, setCateList] = useState([]);
  const [editorState, setEditorState] = useState(null);
  useEffect(() => {
    if (props.match.params.id) {
      getArticleById(props.match.params.id).then((res) => {
        form.setFieldsValue({ ...res.data });
        setEditorState(BraftEditor.createEditorState(res.data.body));
      });
    }
    getCategory().then((res) => {
      setCateList(res.data);
    });
  }, []);

  //富文本媒体上传设置
  const myUploadFn = (param) => {
    const serverURL = imgUrl;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();

    const successFn = (response) => {
      // 假设服务端直接返回文件上传后的地址
      // 上传成功后调用param.success并传入上传后的文件地址
      param.success({
        url: JSON.parse(xhr.responseText).url,
        meta: {
          id: 'img' + Math.random()*10,
          title: "上传文件",
          alt: "上传文件",
          loop: true, // 指定音视频是否循环播放
          autoPlay: true, // 指定音视频是否自动播放
          controls: true, // 指定音视频是否显示控制栏
          poster: "http://xxx/xx.png", // 指定视频播放器的封面
        },
      });
    };

    const progressFn = (event) => {
      // 上传进度发生变化时调用param.progress
      param.progress((event.loaded / event.total) * 100);
    };

    const errorFn = (response) => {
      // 上传发生错误时调用param.error
      param.error({
        msg: "unable to upload.",
      });
    };

    xhr.upload.addEventListener("progress", progressFn, false);
    xhr.addEventListener("load", successFn, false);
    xhr.addEventListener("error", errorFn, false);
    xhr.addEventListener("abort", errorFn, false);

    fd.append("file", param.file);
    xhr.open("POST", serverURL, true);
    xhr.send(fd);
  };

  const onFinish = async (values) => {
    values.body = editorState.toHTML();
    console.log(values);
    if (props.match.params.id) {
      await putArticle(props.match.params.id, { ...values });
      message.success("修改文章成功！");
    } else {
      await createArticle({ ...values });
      message.success("添加文章成功！");
    }
    props.history.push("/admin/article");
  };

  const onFinishFailed = (errorInfo) => {
    message.error("请检查填写项");
    console.log("Failed:", errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const handleEditorChange = (e) => {
    setEditorState(e);
  };
  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="文章标题"
        name="title"
        rules={[{ required: true, message: "请填写标题" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="分类"
        name="categories"
        rules={[{ required: true, message: "请填写分类" }]}
      >
        <Select
          onChange={handleChange}
          mode="multiple"
          placeholder="请选择分类"
          allowClear
        >
          {cateList.map((cate) => {
            return (
              <Option key={cate._id} value={cate._id}>
                {cate.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label="文章内容"
        rules={[{ required: true, message: "请填写内容" }]}
      >
        <BraftEditor
          value={editorState}
          onChange={handleEditorChange}
          style={{ border: "1px solid #e5c6c6" }}
          media={{ uploadFn: myUploadFn }}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditArticle;
