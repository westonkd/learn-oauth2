import React from "react";
import { Layout, Typography, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

interface SoundStreamProps {
  children: JSX.Element;
}

const SoundStream = ({ children }: SoundStreamProps): JSX.Element => {
  return (
    <Layout className="layout">
      <Header>
        <div className="pt-1.5">
          <Typography.Title style={{ color: "white" }}>
            Sound Stream
          </Typography.Title>
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Developers</Breadcrumb.Item>
          <Breadcrumb.Item>Register Application</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Sound Stream ©2022</Footer>
    </Layout>
  );
};

export default SoundStream;
