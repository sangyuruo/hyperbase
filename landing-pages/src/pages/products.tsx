import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';




export default () => {
    const tabListNoTitle = [
        {
            key: 'compute',
            tab: '容器云',
        },
        {
            key: 'serverless',
            tab: 'Serverless',
        },
        {
            key: 'datacenter',
            tab: '数据中心',
        },
        {
            key: 'ml',
            tab: '机器学习平台',
        },
        {
            key: 'devcloud',
            tab: '研发云',
        },
        {
            key: 'storage',
            tab: '存储云',
        },
        {
            key: 'network',
            tab: '网络',
        },
        {
            key: 'finance',
            tab: '金融',
        },
        {
            key: 'education',
            tab: '教育',
        },
        {
            key: 'security',
            tab: '安全与合规',
        },
        {
            key: 'iot',
            tab: '物联网',
        },
    ];
    const contentServerless = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="后端CDN" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="前端CDN" bordered={false}>
                    Card content
        </Card>
            </Col>
            <Col span={8}>
                <Card title="API网关" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="KV数据库" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Worker计算" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Workflow工作流" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Storage云存储" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )

    const contentCompute = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="容器云" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="轻量虚拟机" bordered={false}>
                    Card content
        </Card>
            </Col>
            <Col span={8}>
                <Card title="虚拟公有容器云" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Serverless容器" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="微服务" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentDatacenter = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="用户画像" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="推荐系统" bordered={false}>
                    Card content
            </Card>
            </Col>
            <Col span={8}>
                <Card title="计算中心" bordered={false}>
                    Card content
            </Card>
            </Col>
            <Col span={8}>
                <Card title="日志服务" bordered={false}>
                    Card content
            </Card>
            </Col>
        </Row>
    )
    const contentML = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="训练平台" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="研究平台" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="交付平台" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="交付商店" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="运维平台" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentDevCloud = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="代码仓库" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="CI/CD" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="部署交付" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="应用商店" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="混沌工程" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="镜像仓库" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="公共镜像" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="文档管理" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="静态页面托管" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentStorage = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="对象存储" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="块存储" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="文件系统" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentNetwork = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="SDN" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="VPN" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentFinance = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="区块链" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="金融科技" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="舆情分析" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="低频交易" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="高频交易" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentEducation = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="直播" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="实验室" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="课程" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentSecurity = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="安全监测" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="高防" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="应用安全" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentIoT = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="智能机房" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="边缘计算" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="电力监控" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="IoT" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="机器人" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentListNoTitle = {
        compute: contentCompute,
        serverless: contentServerless,
        datacenter: contentDatacenter,
        ml: contentML,
        devcloud:contentDevCloud,
        storage:contentStorage,
        network:contentNetwork,
        finance:contentFinance,
        education:contentEducation,
        security:contentSecurity,
        iot:contentIoT
    };
    const [noTitleKey, setNoTitleKey] = useState('compute');

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
