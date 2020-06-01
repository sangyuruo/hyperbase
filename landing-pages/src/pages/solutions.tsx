import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
export default () => {
    const tabListNoTitle = [
        {
            key: 'lifestreet',
            tab: '生活街',
        },
        {
            key: 'shopstreet',
            tab: '商业街',
        },
        {
            key: 'workcity',
            tab: '办公城市云',
        },
        {
            key: 'financecity',
            tab: '金融城市云',
        },
        {
            key: 'industrycity',
            tab: '工业城市云',
        },
        {
            key: 'agricity',
            tab: '农业城市云',
        },
        {
            key: 'officecity',
            tab: '政务城市云',
        },
        {
            key: 'lawcity',
            tab: '司法城市云',
        },
        {
            key: 'healthcity',
            tab: '医疗城市云',
        },
        {
            key: 'transportcity',
            tab: '物流省际云',
        },
        {
            key: 'trafficcity',
            tab: '交通枢纽城市云',
        },
        {
            key: 'educity',
            tab: '教育城市云',
        },
        {
            key: 'virtualcity',
            tab: '虚拟经济城市云',
        },
    ];
    const contentlifestreet = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="社区治理" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="全民体育馆" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="智能菜场" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="生活配套商铺" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="垃圾分类" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="社区医生" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="数字社区" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contentshopstreet = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="门店管理" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="智慧停车NEW" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="客户系统" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="生态系统" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="智能客服" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="数字化营销" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contentworkcity = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="办公" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="人脸识别门禁一体机" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="人脸门禁考勤" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="云投屏" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="通达OA办公系统" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="蓝凌EIS办公系统" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="畅捷通-好会计" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="畅捷通 T+Cloud" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="用友 U8 Cloud" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="互联网+监管HOT" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="展示" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="云.速成美站HOT" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="云.企业官网HOT" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contentfinancecity = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="数字银行" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="数字证券" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="保险上云" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="智能客服" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="中小型公司交易系统数据零丢失" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contentindustrycity = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="零售仓储" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="工业产品可信监造" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="家电行业" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="玩具行业" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="产供销协同系统" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="注塑云MES" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="家居行业" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="电子招投标平台" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="制造在线复产" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="制造业防疫复工" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="工业生产调度优化NEW" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="机床设备管理" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="工业视觉检测" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="智能锅炉燃烧优化" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="化工行业" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="光伏行业" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="钢铁行业" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="水泥行业" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="精准电力负荷预测" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="虚拟配网调度员" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="电力设备预测性维护" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="新能源发电运营" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="电动车桩运营" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="综合能源服务平台" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="企业数据资产在线运营" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="一体化电力大数据平台" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="EHPC工业仿真" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="EHPC药物筛选" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="机场视频监控" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="智能视频监控" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contentagricity = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="种植" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="养殖" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="协同" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="AI养羊" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="AI养牛" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="AI养猪" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contentofficecity = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="应急救灾云" bordered={false}>
                    Card content
                </Card>
            </Col>

            <Col span={8}>
                <Card title="防疫解决方案专题HOT" bordered={false}>
                    Card content
                </Card>
            </Col>

        <Col span={8}>
            <Card title="可信存证" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="区块链溯源整体HOT" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="数字资产流转" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="跨链数据连接服务" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="分布式身份服务" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="物联网设备可信上链" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="大宗商品区块链仓单" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="消控宝—数字消防监控NEW" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="执法宝—公共执法NEW" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="大气环境网格化智能监管" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="水环境网格化智能监管" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="智慧厕所NEW" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="智能垃圾桶" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="全域停车" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="非现场执法" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="停车场数字化" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="智慧消防" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="智能路灯" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="智能井盖" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="多功能杆" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="政企标准地址服务" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="政企数据中台建设NEW" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="社区微脑NEW" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="城市管理" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="交通管理行业云" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="重点车辆" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="一键护航" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="智慧建筑" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="防汛防台智慧应急" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="物资管理系统" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="AI党建云标准版" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="智慧景区" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="智慧图书馆" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="全域旅游" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="全域数据中台" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="城市事件感知与智能处理" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="社区与安全" bordered={false}>
                Card content
                </Card>
        </Col>

        <Col span={8}>
            <Card title="交通拥堵与信号控制" bordered={false}>
                Card content
                </Card>
        </Col>
        <Col span={8}>
            <Card title="公共出行与运营车辆调度" bordered={false}>
                Card content
                </Card>
        </Col>
    
    </Row >
    )
    const contentlawcity = (
        <Row gutter={16}>

        </Row>
    )
    const contenthealthcity = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="新型冠状病毒全基因组分析" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="基因组学公共数据集HOT" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="基因数据分析管理" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="三代测序组装NEW" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="新型冠状病毒肺炎CT辅助诊断NEW" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="影像云" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="远程医疗平台" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="云HIS" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="区域医疗数字" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="医院互联网安全" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="智慧医疗门诊联合方案NEW" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="BCS三代基因组装" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="BCS+Cromwell基因测序" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contenttransportcity = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="高速公路智慧运营" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="交通智能客服" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="交通数据中台" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="高速公路视频上云" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="高速自由流收费稽核NEW" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="高速云控HOT" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="进出口配置" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contenttrafficcity = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="数字化转型NEW" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="机场停机位调度优化" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="物流运输" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contenteducity = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="高校教育" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="在线教育企业" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="职业教育认证中心" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="智能客服" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contentvirtualcity = (
        <Row gutter={16}>

            <Col span={8}>
                <Card title="旅行" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="电商" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="媒体" bordered={false}>
                    Card content
            </Card>
            </Col>

            <Col span={8}>
                <Card title="娱乐" bordered={false}>
                    Card content
            </Card>
            </Col>

        </Row>
    )
    const contentListNoTitle = {
        lifestreet: contentlifestreet,
        shopstreet: contentshopstreet,
        workcity: contentworkcity,
        financecity: contentfinancecity,
        industrycity: contentindustrycity,
        agricity: contentagricity,
        officecity: contentofficecity,
        lawcity: contentlawcity,
        healthcity: contenthealthcity,
        transportcity: contenttransportcity,
        trafficcity: contenttrafficcity,
        educity: contenteducity,
        virtualcity: contentvirtualcity,
    };
    const [noTitleKey, setNoTitleKey] = useState('lifestreet');
    const onTabChange = (key, type) => {
        setNoTitleKey(key)
    };
    return (
        <div>
            <Card
                style={{ width: '100%' }}
                tabList={tabListNoTitle}
                activeTabKey={noTitleKey}
                tabBarExtraContent={<a href="#">More</a>}
                onTabChange={noTitleKey => {
                    onTabChange(noTitleKey, 'noTitleKey');
                }}
            >
                {contentListNoTitle[noTitleKey]}
            </Card>
        </div>
    );
}
