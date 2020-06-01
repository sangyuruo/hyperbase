import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { Typography, Card, Avatar, Tabs } from 'antd';
import Link from 'umi/link';
import moment from 'moment';
import styles from './style.less';

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

export default () => {
  const projectList = [
    {
      id: '0',
      title: 'MicroProgram Cloud',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '1',
      title: 'MicroService Cloud',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '2',
      title: 'Community Software Developing',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '3',
      title: 'Data-driven Software Cloud',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '4',
      title: 'Network Design Lab',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '5',
      title: 'Operations Cloud',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '6',
      title: 'Storage Cloud',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '7',
      title: 'Hardware Operations',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '8',
      title: 'IaaS Infrastructure',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '9',
      title: 'Multi-Tenant Mirrors',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '10',
      title: 'SaaS Stores',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '11',
      title: 'Power Hub',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '12',
      title: 'Capsino Capitalism',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '13',
      title: 'AIoT Cloud',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },

    {
      id: '14',
      title: 'Knowledge Power Hub',
      logo: '../projects.png',
      description: 'Giant`s Projects',
      updatedAt: new Date(),
      member: 'Handler :-)',
      href: '',
      memberLink: '',
    },
  ];
  return (
    // <PageHeaderWrapper content="格物云基首页" >
    <div>
      <Card
        style={{
          marginBottom: 24,
        }}
      >
        <Typography>
          <Title>行业分析</Title>
          <Paragraph>
          怎样理解行业发展?我认为在低成本方案时使用Serverless,规模大时使用多云架构,将为客户提供有利的方案.如何低成本或大规模使用时优秀的成本模型,将深刻改变信息技术的应用.
          基于公有云,我们尝试构建了中国的Salesforces,提供了有竞争力的云计算技术的商业应用方案.
          </Paragraph>
        </Typography>
      </Card>

      <h1>进行中的项目</h1>
      <Card
        className={styles.projectList}
        style={{
          marginBottom: 24,
        }}
        title=""
        bordered={false}
        bodyStyle={{
          padding: 0,
        }}
      >
        {projectList.map(item => (
          <Card.Grid className={styles.projectGrid} key={item.id}>
            <Card
              bodyStyle={{
                padding: 0,
              }}
              bordered={false}
            >
              <Card.Meta
                title={
                  <div className={styles.cardTitle}>
                    <Avatar size="small" src={item.logo} />
                    <Link to={item.href}>{item.title}</Link>
                  </div>
                }
                description={item.description}
              />
              <div className={styles.projectItemContent}>
                <Link to={item.memberLink}>{item.member || ''}</Link>
                {item.updatedAt && (
                  <span className={styles.datetime} title={item.updatedAt}>
                    {moment(item.updatedAt).fromNow()}
                  </span>
                )}
              </div>
            </Card>
          </Card.Grid>
        ))}
      </Card>
      <h1>解决方案</h1>
      <Card
        style={{
          marginBottom: 24,
        }}
      >
        <Tabs >
          <TabPane tab="容器云" key="1">
            <iframe src='https://47.113.204.44:27027/'></iframe>
          </TabPane>
          <TabPane tab="区块链" key="2">
            Content of tab 2
           </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </Card>
  </div>
    // </PageHeaderWrapper>

  );
};
