import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';




export default () => {
    const tabListNoTitle = [
        {
            key: 'microprogram',
            tab: '小程序云',
        },
    ];
    const contentMicroprogram = (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="智能机房" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
    const contentListNoTitle = {
        microprogram: contentMicroprogram,
    };
    const [noTitleKey, setNoTitleKey] = useState('microprogram');

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
