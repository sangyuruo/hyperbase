import moment from 'moment';
import { VisitDataType } from './data.d';
// mock data
const visitData: VisitDataType[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '食用酒水',
    y: 188,
  },
  {
    x: '个护健康',
    y: 344,
  },
  {
    x: '服饰箱包',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const titles = [
  'MicroProgram Cloud',
  'MicroService Cloud',
  'Community Software Developing',
  'Data-driven Software Cloud',
  'Network Design Lab',
  'Operations Cloud',
  'Storage Cloud',
  'Hardware Operations',
  'IaaS Infrastructure',
  'Multi-Tenant Mirrors',
  'SaaS Stores',
  'Power Hub',
  'Capsino Capitalism',
  'AIoT Cloud',
  'Knowledge Power Hub',
];
const avatars = [
  'http://localhost:8000/projects.png'
];

const avatars2 = [
  'http://localhost:8000/100.jpg',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const getNotice = [
  {
    id: 'xxx1',
    title: titles[0],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date(),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx2',
    title: titles[1],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-24'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx3',
    title: titles[2],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date(),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx4',
    title: titles[3],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx5',
    title: titles[4],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[5],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[6],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[7],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[8],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[9],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[10],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[11],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[12],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[13],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[14],
    logo: avatars[0],
    description: 'Giant`s Projects',
    updatedAt: new Date('2019-11-19'),
    member: 'Handler :-)',
    href: '',
    memberLink: '',
  },
];

const getActivities = [
  {
    id: 'trend-1',
    updatedAt: new Date(),
    user: {
      name: '机房',
      avatar: avatars2[0],
    },
    time: {
      name: '11/19 2:46:23',
      link: 'http://github.com/',
    },
    event: {
      name: '停电',
      link: 'http://github.com/',
    },
    template: '在 @{time} 发生 @{event}',
  },
  
];

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: any[] = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach(item => {
  Object.keys(item).forEach(key => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

export default {
  'GET  /api/project/notice': getNotice,
  'GET  /api/activities': getActivities,
  'GET  /api/fake_chart_data': {
    visitData,
    visitData2,
    salesData,
    searchData,
    offlineData,
    offlineChartData,
    salesTypeData,
    salesTypeDataOnline,
    salesTypeDataOffline,
    radarData,
  },

  'GET  /apsi/login/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  },
};
