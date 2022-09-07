import React from 'react';
import { Row, Col, Layout, Carousel } from 'antd';
import '@/phm/css/index.less';
import './css/index.less';
import CommonChart from '@/phm/components/common/commonChart';
import { dotsData } from '@/phm/components/conf/chartsData/dotsData';
import { modelData } from '@/phm/components/conf/chartsData/modelData';
import CycleDetails from './cycleDetails';
import MachineComponent from '../common/machineComponent';
import { cycleData } from './configData';

const { Header, Content } = Layout;

class Home extends React.Component {
    state = {
        cycleType: null
    };
    cycleMouseOver = (cycleType:any) => {
        this.setState({
            cycleType
        });
    };
    cycleMouseOut = () => {
        this.setState({
            cycleType: null
        });
    };

    render() {
        const { cycleType } = this.state;
        return (
            <div className={'home-main'}>
                <Layout>
                    <Header>
                        <div className={'system-name'}>浆纸业设备健康管理平台</div>
                    </Header>
                    <Content>
                        <div className="site-layout-background">
                            <Row>
                                <Col flex={'auto'}>
                                    <div className={'panel cycle'}>
                                        <div className={'inner'}>
                                            <div className={'title'}>生命周期图</div>
                                            <div className={'img-box'}>
                                                {cycleData.map((item) => {
                                                    const { type } = item;
                                                    let classStr = 'disabled';
                                                    if (
                                                        type === 'info' ||
                                                        type === 'forecast' ||
                                                        type === 'emergency'
                                                    )
                                                        classStr = '';
                                                    return (
                                                        <div
                                                            onMouseOver={() => {
                                                                this.cycleMouseOver(item.type);
                                                            }}
                                                            onMouseOut={() => {
                                                                this.cycleMouseOut();
                                                            }}
                                                            key={item.type}
                                                            className={`ele ${item.type} ${classStr}`}
                                                        >
                                                            <span>{item.title}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col flex={'1030px'}>
                                    <div className={'panel train-box'}>
                                        <div className={'inner'}>
                                            <MachineComponent
                                                viewStyle={{ height: '28rem' }}
                                                imgStyle={{
                                                    backgroundSize: '940px auto',
                                                    height: '23rem',
                                                    width: '100%'
                                                }}
                                                entrance={'home'}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col flex={'auto'}>
                                    <div className={'panel math'}>
                                        <div className={'inner'}>
                                            <div className={'title'}>算法模型图</div>
                                            <Carousel autoplay>
                                                <CommonChart
                                                    option={dotsData.option}
                                                    key={0}
                                                    height={'22rem'}
                                                />
                                                <CommonChart
                                                    option={modelData.option}
                                                    key={1}
                                                    height={'22rem'}
                                                />
                                            </Carousel>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <CycleDetails cycleType={cycleType} />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Home;
