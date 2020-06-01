import { Avatar, Card, Col, List, Skeleton, Row, Statistic } from 'antd';
import React, { Component } from 'react';
import { Dispatch } from 'redux';
import Link from 'umi/link';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import moment from 'moment';
import { ModalState } from './model';
import EditableLinkGroup from './components/EditableLinkGroup';
import styles from './style.less';
import { ActivitiesType, CurrentUser, NoticeType, RadarDataType } from './data.d';
import StaticPannel from './StaticPannel';
import StaticInfos from './StaticInfos';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';

const links = [
  {
    title: '关闭终端',
    href: 'smartlab.api.lreceive.com:5000/api/power/closeclient',
  },
  {
    title: '停机计划',
    href: '',
  },
  {
    title: '断开外网',
    href: '',
  },
  {
    title: '恢复外网',
    href: '',
  },
  {
    title: '切换到机器学习模式',
    href: '',
  },
  {
    title: '切换到渲染模式',
    href: '',
  },
  {
    title: '教室名单',
    href: '',
  },
];
interface ServerdashProps {
  currentUser: CurrentUser;
  projectNotice: NoticeType[];
  activities: ActivitiesType[];
  radarData: RadarDataType[];
  dispatch: Dispatch<any>;
  currentUserLoading: boolean;
  projectLoading: boolean;
  activitiesLoading: boolean;
}

const PageHeaderContent: React.FC<{
  currentUser: CurrentUser;
}> = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;

  if (!loading) {
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 1,
        }}
        active
      />
    );
  }

  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          早安，
          {currentUser.name}
          ，祝你开心每一天！
        </div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </div>
  );
};

const ExtraContent: React.FC<{}> = () => (
  <div className={styles.extraContent}>
    <div className={styles.statItem}>
      <Statistic title="项目数" value={18} />
    </div>
    <div className={styles.statItem}>
      <Statistic title="团队内排名" value={1} suffix="/ 1" />
    </div>
    <div className={styles.statItem}>
      <Statistic title="项目访问" value={1} />
    </div>
  </div>
);

@connect(
  ({
    serverdash: { currentUser, projectNotice, activities, radarData },
    loading,
  }: {
    serverdash: ModalState;
    loading: {
      effects: any;
    };
  }) => ({
    currentUser,
    projectNotice,
    activities,
    radarData,
    currentUserLoading: loading.effects['serverdash/fetchUserCurrent'],
    projectLoading: loading.effects['serverdash/fetchProjectNotice'],
    activitiesLoading: loading.effects['serverdash/fetchActivitiesList'],
  })
)
class Serverdash extends Component<ServerdashProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'serverdash/init',
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'serverdash/clear',
    });
  }

  renderActivities = (item: ActivitiesType) => {
    const events = item.template.split(/@\{([^{}]*)\}/gi).map(key => {
      if (item[key]) {
        return (
          <a href={item[key].link} key={item[key].name}>
            {item[key].name}
          </a>
        );
      }

      return key;
    });
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.user.avatar} />}
          title={
            <span>
              <a className={styles.username}>{item.user.name}</a>
              &nbsp;
              <span className={styles.event}>{events}</span>
            </span>
          }
          description={
            <span className={styles.datetime} title={item.updatedAt}>
              {moment(item.updatedAt).fromNow()}
            </span>
          }
        />
      </List.Item>
    );
  };

  render() {
    const {
      currentUser,
      activities,
      projectNotice,
      projectLoading,
      activitiesLoading,
      radarData,
    } = this.props;
    const data = [
      {
        year: "1991",
        value: 3
      },
      {
        year: "1992",
        value: 4
      },
      {
        year: "1993",
        value: 3.5
      },
      {
        year: "1994",
        value: 5
      },
      {
        year: "1995",
        value: 4.9
      },
      {
        year: "1996",
        value: 6
      },
      {
        year: "1997",
        value: 7
      },
      {
        year: "1998",
        value: 9
      },
      {
        year: "1999",
        value: 13
      }
    ];
    const cols = {
      value: {
        min: 0
      },
      year: {
        range: [0, 1]
      }
    };
    return (
      <PageHeaderWrapper
        content={<PageHeaderContent currentUser={currentUser} />}
        extraContent={<ExtraContent />}
      >
        <Row gutter={24}>

          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <Card
              bodyStyle={{
                marginBottom: 24,
              }}
              bordered={false}
              className={styles.activeCard}
              title="数据面板"
              loading={activitiesLoading}
            >
              <StaticPannel />

            </Card>

            <Card
              bodyStyle={{
                padding: 0,
              }}
              bordered={false}
              className={styles.activeCard}
              title="日志"
              loading={activitiesLoading}
            >
              <List<ActivitiesType>
                loading={activitiesLoading}
                renderItem={item => this.renderActivities(item)}
                dataSource={activities}
                className={styles.activitiesList}
                size="large"
              />
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card
              style={{
                marginBottom: 24,
              }}
              title="快速开始 / 便捷导航"
              bordered={false}
              bodyStyle={{
                padding: 0,
              }}
            >
              <EditableLinkGroup onAdd={() => { }} links={links} linkElement={Link} />
            </Card>
            <Card
              style={{
                marginBottom: 24,
              }}
              bordered={false}
              title="温度状况"
              loading={radarData.length === 0}
            >
              <Chart height={400} data={data} scale={cols} forceFit>
                <Axis name="year" />
                <Axis name="value" />
                <Tooltip
                  crosshairs={{
                    type: "y"
                  }}
                />
                <Geom type="line" position="year*value" size={2} />
                <Geom
                  type="point"
                  position="year*value"
                  size={4}
                  shape={"circle"}
                  style={{
                    stroke: "#fff",
                    lineWidth: 1
                  }}
                />
              </Chart>
            </Card>
            <Card
              style={{
                marginBottom: 24,
              }}
              bordered={false}
              title="检索目录"
              loading={radarData.length === 0}
            >
              <StaticInfos />
            </Card>
          </Col>
        </Row>
        {/* <DailyNote /> */}
      </PageHeaderWrapper>
    );
  }
}

export default Serverdash;
