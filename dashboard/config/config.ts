import { IConfig, IPlugin } from 'umi-types';
import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import webpackPlugin from './plugin.config';
const { pwa, primaryColor } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins: IPlugin[] = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: false,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      // dynamicImport: {
      //   loadingComponent: './components/PageLoading/index',
      //   webpackChunkName: true,
      //   level: 3,
      // },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
]; // 针对 preview.pro.ant.design 的 GA 统计代码

if (isAntDesignProPreview) {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
}

export default {
  plugins,
  exportStatic: {},
  block: {
    // 国内用户可以使用码云
    defaultGitUrl: 'https://gitee.com/ant-design/pro-blocks', // defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
        {
          name: '登录页',
          icon: 'smile',
          path: '/userlogin',
          component: './UserLogin',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: './introduction',
            },
            {
              name:'介绍',
              path:'./introduction',
              component:'./introduction'
            },
            {
              name: '容器云',
              path: './container',
              routes:[
                {
                  name:'轻量虚拟机',
                  path:'./computer'
                },
                {
                  name:'虚拟公有容器云',
                  path:'./virtualkubelet'
                },
                {
                  name:'Serverless容器',
                  path:'./knative'
                },
                {
                  name:'容器云',
                  path:'./k8s',
                },
                {
                  name:'微服务',
                  path:'./service'
                }
              ]
            },
            {
              name:'Serverless',
              path:'./serverless',
              routes:[
                {
                  name:'后端CDN',
                  path:'./backend'
                },
                {
                  name:'前端CDN',
                  path:'./statics'
                },
                {
                  name:'API网关',
                  path:'./api-gateway'
                },
                {
                  name:'KV数据库',
                  path:'./kv'
                },
                {
                  name:'Worker计算',
                  path:'./worker'
                },
                {
                  name:'Workflow工作流',
                  path:'./workflow'
                },
                {
                  name:'Storage云存储',
                  path:'./objects'
                }
              ]
            },
            {
              name:'数据中心',
              path:'./datahub',
              routes:[
                {
                  name:'应用',
                  path:'./product',
                  routes:[
                    {
                      name:'用户画像',
                      path:'./user-description'
                    },
                    {
                      name:'推荐系统',
                      path:'./recommendation'
                    }
                  ]
                },
                {
                  name:'计算中心',
                  path:'./compute'
                },
                {
                  name:'日志服务',
                  path:'./elk'
                }
              ]
            },
            {
              name:'机器学习',
              path:'./datascience',
              routes:[
                {
                  name:'训练平台',
                  path:'./train'
                },
                {
                  name:'研究平台',
                  path:'./research'
                },
                {
                  name:'交付商店',
                  path:'./shop'
                },
                {
                  name:'运维平台',
                  path:'./api'
                }
              ]
            },
            {
              name:'测试开发平台',
              path:'./devops',
              routes:[
                {
                  name:'代码仓库',
                  path:'./git'
                },
                {
                  name:'CI/CD',
                  path:'./jenkins'
                },
                {
                  name:'部署交付',
                  path:'./deployments'
                },
                {
                  name:'应用商店',
                  path:'./shop'
                },
                {
                  name:'混沌工程',
                  path:'./chaos'
                },
                {
                  name:'镜像仓库',
                  path:'./mirrors'
                },
                {
                  name:'公共镜像',
                  path:'./public-mirrors'
                },
                {
                  name:'文档管理',
                  path:'./documents'
                },
                {
                  name:'页面托管',
                  path:'./hosting'
                }
              ]
            },
            {
              name:'存储',
              path:'./storage',
              routes:[
                {
                  name:'对象存储',
                  path:'./objects'
                },
                {
                  name:'块存储',
                  path:'./block'
                },
                {
                  name:'文件系统',
                  path:'./networkfs'
                }
              ]
            },
            {
              name:'网络',
              path:'./network',
              routes:[
                {
                  name:'软件定义网络',
                  path:'./sdn'
                },
                {
                  name:'VPN',
                  path:'./vpn'
                }
              ]
            },
            {
              name:'金融服务',
              path:'./finance',
              routes:[
                {
                  name:'区块链',
                  path:'./blockchain'
                },
                {
                  name:'金融科技',
                  path:'./fintech'
                },
                {
                  name:'低频交易',
                  path:'./low-frequency'
                },
                {
                  name:'高频交易',
                  path:'./hft'
                },
                {
                  name:"舆情分析",
                  path:'./social'
                }
              ]
            },
            {
              name:'学习',
              path:'./course',
              routes:[
                {
                  name:'直播',
                  path:'./broadcast'
                },
                {
                  name:'实验室',
                  path:'./lab'
                },
                {
                  name:'课程',
                  path:'./lecture'
                }
              ]
            },
            {
              name:'安全',
              path:'./security',
              routes:[
                {
                  name:'安全监测',
                  path:'./monitor'
                },
                {
                  name:'高防',
                  path:'./defence'
                },
                {
                  name:'应用安全',
                  path:'./app'
                }
              ]
            },
            {
              name:'应用商店',
              path:'./software',
            },
            {
              name:'设备管理',
              path:'./devices',
              routes:[
                {
                  name:'智能机房',
                  path:'./smartlab'
                },
                {
                  name:'边缘计算',
                  path:'./edge'
                },
                {
                  name:'电力监控',
                  path:'./electronic'
                },
                {
                  name:'IoT',
                  path:'./iot'
                },
                {
                  name:'机器人',
                  path:'./robot'
                }
              ]
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      _: string,
      localName: string
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  proxy: {
    '/api/notes/getnotes': {
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/server': '',
      },
    },
   
  },

  
} as IConfig;
