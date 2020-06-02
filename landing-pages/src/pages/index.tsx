import React from 'react';
import './index.less';
import { Carousel, Layout, Menu, Row, Col, Typography } from 'antd';
import Product from './products'
import Solutions from './solutions'
import Lowcost from './lowcost'
import Multicloud from './multicloud'
import Projects from './projects'
import { ReactComponent as Logo } from '../assests/bg1.svg'

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default () => {
  return (
    <div>


      <Layout >
        <Header style={{ background: '#fff', zIndex: 20 }} >
          <div className="logo" style={{ background: 'transparent' }}><h1>格物云基</h1></div>
          <Menu theme="light" style={{ background: 'transparent' }} mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">产品</Menu.Item>
            {/* <Menu.Item key="2">方案</Menu.Item>
            <Menu.Item key="3">价格</Menu.Item>
            <Menu.Item key="4">服务</Menu.Item>
            <Menu.Item key="5">关于</Menu.Item>
            <Menu.Item key="6">文档</Menu.Item>
            <Menu.Item key="7">控制台</Menu.Item> */}
          </Menu>

        </Header >
        <Content >
          <Carousel >
            <div>
            <h3>Serverless 低成本服务
            <br/>
            基于Serverless实现低成本全球部署,快速研发,成本模型与用户量线性相关
            </h3>
              <h3></h3>
            </div>
            <div>
              <h3>多云策略</h3>
              <h3>避免Vendor lock-in,提供多云迁移与多云竞价方案,公有云混合云混合部署,IaC</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
          <div style={{ padding: '50px 50px' }}>
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
                </Typography>
              </Col>
              <Col span={24} >
                <Lowcost />
              </Col>
              <Col span={24} >
                <Typography>
                  <Title level={2}>多云方案</Title>
                </Typography>
              </Col>
              <Col span={24} >
                <Multicloud />
              </Col>
              <Col span={24} >
                <Typography>
                  <Title level={2}>项目</Title>
                </Typography>
              </Col>
              <Col span={24} >
                <Projects />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff' }}>Yiwen Chen @Chaosbase , 合肥工业大学 软件学院 </Footer>
      </Layout>
    </div>
  );
}
