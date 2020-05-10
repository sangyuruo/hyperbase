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
    <PageHeaderWrapper content="这是一个伟大的项目" >
      <Card
        style={{
          marginBottom: 24,
        }}
      >
        <Typography>
          <Title>Introduction</Title>
          <Paragraph>
            有一天我在想, 我做过的东西要用什么展示出来, 不如做一个企业中台级的开发能力吧. 就叫他<Text strong>格物云基</Text>了, 我觉得它会慢慢成长, 告诉别人我作为软件架构师的才华. 不如一个个做出来
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
      
    </PageHeaderWrapper>

  );
};
