import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { recordData } from '../info/configData';

class MarqueeComponent extends PureComponent<any> {
    getContent = () => {
        const { hasCycle } = this.props;
        let ele = (
            <Row>
                {recordData.map((item1, index1) => {
                    return (
                        <Col span={24} key={index1}>
                            <div className={'panel record'}>
                                <div className={'inner'}>
                                    <div className={'title'}>{item1.title}</div>
                                    <div className={'marquee-view'}>
                                        <div className={'marquee'}>
                                            {item1.data.map((item2, index2) => {
                                                return (
                                                    <div className={'item'} key={index2}>
                                                        {item2}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        );
        if (hasCycle) {
            ele = (
                <Row>
                    {recordData.map((item3, index3) => {
                        return (
                            <Col span={12} key={index3}>
                                <div className={'title'}>{item3.title}</div>
                                <div className={'marquee-view'}>
                                    <div className={'marquee'}>
                                        {item3.data.map((item4, index4) => {
                                            return (
                                                <div className={'item'} key={index4}>
                                                    {item4}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            );
        }
        return ele;
    };
    render() {
        const content = this.getContent();
        return <div className={'marquee-main'}>{content}</div>;
    }
}
export default MarqueeComponent;
