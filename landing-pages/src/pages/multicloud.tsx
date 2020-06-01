import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';




export default () => {
    const tabListNoTitle = [
        {
            key: 'compute',
            tab: '云资源市场行情',
        },
    ];

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
    const contentListNoTitle = {
        compute: contentCompute,
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
