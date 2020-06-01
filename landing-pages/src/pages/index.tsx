import React from 'react';
import './index.less';
import { Layout, Menu, Row, Col, Typography } from 'antd';
import Product from './products'
import Solutions from './solutions'
import Lowcost from './lowcost'
import Multicloud from './multicloud'
import Projects from './projects'
const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default () => {
  return (
    <div>
      <Layout >
        <Header style={{background: '#fff'}} >
          <div className="logo" style={{background: 'transparent',}}><h1>格物云基</h1></div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">产品</Menu.Item>
            <Menu.Item key="2">方案</Menu.Item>
            <Menu.Item key="3">价格</Menu.Item>
            <Menu.Item key="4">服务</Menu.Item>
            <Menu.Item key="5">关于</Menu.Item>
            <Menu.Item key="6">文档</Menu.Item>
            <Menu.Item key="7">控制台</Menu.Item>
          </Menu>
        </Header >
        <Content style={{ padding: '50px 50px' }}>
          <Row gutter={[16, 16]}>
            <Col span={24} >
              <Typography>
                <Title level={2}>云产品</Title>
              </Typography>
            </Col>
            <Col span={24} >
              <Product />
            </Col>
            <Col span={24} >
              <Typography>
                <Title level={2}>解决方案</Title>
              </Typography>
            </Col>
            <Col span={24} >
              <Solutions />
            </Col>
            <Col span={24} >
              <Typography>
                <Title level={2}>低成本方案</Title>
                <Title level={3}>基于Serverless实现低成本全球部署,快速研发,成本模型与用户量线性相关</Title>
              </Typography>
            </Col>
            <Col span={24} >
              <Lowcost />
            </Col>
            <Col span={24} >
              <Typography>
                <Title level={2}>多云方案</Title>
                <Title level={3}>避免Vendor lock-in,提供多云迁移与多云竞价方案,公有云混合云混合部署,IaC</Title>
              </Typography>
            </Col>
            <Col span={24} >
              <Multicloud />
            </Col>
            <Col span={24} >
              <Typography>
                <Title level={2}>研发立项</Title>
                <Title level={3}>研发项目介绍</Title>
              </Typography>
            </Col>
            <Col span={24} >
              <Projects />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Yiwen Chen, @ChaosBases</Footer>
      </Layout>
    </div>
  );
}
