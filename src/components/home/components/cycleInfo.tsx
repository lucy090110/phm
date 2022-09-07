import React from 'react';
import { Row, Col, Carousel } from 'antd';
import { cycleDetailsData } from '../configData';
// import GaugeBox from '@/phm/components/common/gaugebox';

const CycleInfo: React.FC = () => {
    return (
        <div className={'info-main'}>
            <Carousel autoplay>
                <div key={0}>
                    {/*<GaugeBox entrance={'home'} />*/}
                </div>
                <div className={'circle-list'} key={1}>
                    <Row>
                        {cycleDetailsData.map((item, index) => {
                            return (
                                <Col span={12} key={index}>
                                    <div className={'circle-item'}>
                                        <span className={'num'}>{item.value}</span>
                                        <span className={'text'}>{item.label}</span>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </Carousel>
        </div>
    );
};
export default CycleInfo;
