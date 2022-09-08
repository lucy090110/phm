import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Steps, Modal } from 'antd';
import {
    columns1,
    dataSource1,
    columns2,
    dataSource2,
    columns3,
    dataSource3,
    stepBoxArr
} from '@/phm/components/compute/configData';
import TableComponent from './tableComponent';

const { Step } = Steps;
const Pretreatment = () => {
    const [stepCurrent, setStepCurrent] = useState(0);
    const [stepCurrent1, setStepCurrent1] = useState(0);
    const [stepCurrent2, setStepCurrent2] = useState(0);
    const [stepCurrent3, setStepCurrent3] = useState(0);
    const [column, setColumn]:any = useState(null);
    const [data, setData]:any = useState(null);
    const [isModalVisible, setIsModalVisible]:any = useState(false);
    console.log(`初始化stepCurrent1 ${stepCurrent1}`);
    console.log(`初始化stepCurrent2 ${stepCurrent2}`);
    console.log(`初始化stepCurrent3 ${stepCurrent3}`);
    console.log(`初始化stepCurrent ${stepCurrent}`);
    const showModal = (type:any) => {
        if (type === 'data1') {
            setColumn(() => {
                return columns2;
            });
            setData(() => {
                return dataSource2;
            });
        } else if (type === 'data2') {
            setColumn(() => {
                return columns3;
            });
            setData(() => {
                return dataSource3;
            });
        }
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    useEffect(() => {
        const count1 = stepBoxArr[0]?.data.length - 1;
        const count2 = stepBoxArr[1]?.data.length - 1;
        let timer1:any = null;
        timer1 = setInterval(() => {
            const a = stepBoxArr.length - 1;
            if (stepCurrent === a) {
                clearInterval(timer1);
                return;
            }
            if (stepCurrent1 > count1) {
                if (stepCurrent2 === 0) {
                    setStepCurrent((prev) => {
                        return prev + 1;
                    });
                }
                if (stepCurrent2 <= count2) {
                    setStepCurrent2((prev) => {
                        return prev + 1;
                    });
                    console.log(`累加两次的stepCurrent2${stepCurrent2}`);
                } else if (stepCurrent2 > count2) {
                    setStepCurrent((prev) => {
                        return prev + 1;
                    });
                }
            }
            if (stepCurrent1 <= count1) {
                setStepCurrent1((prev) => {
                    return prev + 1;
                });
            }
        }, 1000);
        return () => {
            timer1 && clearInterval(timer1);
        };
    });
    const labelWidth = '98px';
    // @ts-ignore
    return (
        <>
            <div className={'pretreatment-box'}>
                <div className={'title'}>数据画像</div>
                <div className={'main'}>
                    <Row className={'control-group'}>
                        <Col flex={labelWidth}>
                            <span className={'label'}>数据点量：</span>
                        </Col>
                        <Col flex={'auto'}>
                            <div className={'control'}>15536</div>
                        </Col>
                    </Row>
                    <Row className={'control-group'}>
                        <Col flex={labelWidth}>
                            <span className={'label'}>特征维度：</span>
                        </Col>
                        <Col flex={'auto'}>
                            <div className={'control'}>32</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={'pretreatment-box'}>
                                <div className={'title'}>
                                    数据详情<a onClick={(e) => showModal('data1')}>(查看)</a>
                                </div>
                                <div className={'main table-box table-box-small'}>
                                    <TableComponent
                                        columns={columns2}
                                        dataSource={dataSource2}
                                        scroll={{ y: 84, x: 2400 }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className={'control-group'}>
                        <Col flex={labelWidth}>
                            <span className={'label'}>缺失情况：</span>
                        </Col>
                        <Col flex={'auto'}>
                            <div className={'main table-box table-box-small'}>
                                <Table
                                    columns={columns1}
                                    dataSource={dataSource1}
                                    pagination={false}
                                    scroll={{ y: 84, x: 800 }}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            {stepBoxArr.map((item:any, index:any) => {
                let num = stepCurrent1;
                if (index === 1) {
                    num = stepCurrent2;
                } else if (index === 2) {
                    num = stepCurrent3;
                }

                return (
                    <div key={index}>
                        {stepCurrent >= index && (
                            <div className={'pretreatment-box'}>
                                <div className={'title'}>{item.title}</div>
                                <div className={'main'}>
                                    <Steps
                                        progressDot
                                        current={num}
                                        direction="vertical"
                                        className={'steps-small'}
                                        size={'small'}
                                    >
                                        {item.data.map((item:any, index:any) => {
                                            return <Step title={item.title} key={index} />;
                                        })}
                                    </Steps>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
            {stepCurrent === stepBoxArr.length - 1 && (
                <div className={'pretreatment-box'}>
                    <div className={'title'}>
                        处理后数据
                        <a onClick={(e) => showModal('data2')}>(查看)</a>
                        <a>(下载)</a>
                    </div>
                    <div className={'main table-box table-box-small'}>
                        <TableComponent
                            columns={columns3}
                            dataSource={dataSource3}
                            pagination={false}
                            scroll={{ y: 84, x: 1800 }}
                        />
                    </div>
                </div>
            )}
            <Modal
                title="数据详情"
                width={800}
                footer={null}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className={'table-box table-box-small'}>
                    <TableComponent
                        columns={column}
                        dataSource={data}
                        scroll={{ y: 500, x: 1800 }}
                    />
                </div>
            </Modal>
        </>
    );
};

export default Pretreatment;
