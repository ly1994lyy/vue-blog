import React from "react";
import "./index.scss";
import { Layout, Menu, Breadcrumb } from "antd";
import { adminRouter } from "../../routes/index";
import {withRouter} from "react-router-dom"
const { Header, Content, Sider, Footer } = Layout;
const routes = adminRouter.filter(item =>item.isShow);

function Index(props) {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {routes.map(route => {
              return (
                <Menu.Item key={route.path} onClick={p=>props.history.push(p.key)}>
                  {route.icon}
                  <span>{route.title}</span>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: '100vh'
            }}
          >
            {props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Code Life ©2020 Created by Jericho
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default withRouter(Index);
