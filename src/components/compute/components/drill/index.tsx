import React, { useState, useEffect } from 'react';
import { Row, Col, Steps, Button } from 'antd';
import Configuration from '@/phm/components/compute/components/drill/components/configuration';
import Pretreatment from '@/phm/components/compute/components/drill/components/pretreatment';
import ModelTrain from '@/phm/components/compute/components/drill/components/modeltrain';
import Result from '@/phm/components/compute/components/drill/components/complete';

import '@/phm/components/compute/css/index.less';

const { Step } = Steps;

const Drill = (props:any) => {
    const { currentNum, currentKey, classString } = props;
    const [current, setCurrent] = React.useState(currentNum ? currentNum : 0);
    const [hasResult, setHasResult] = useState(false);
    useEffect(() => {
        setCurrent(currentNum ? currentNum : 0);
    }, [currentKey]);
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const stepsChange = (current:any) => {
        setCurrent(() => {
            return current;
        });
    };

    const steps = [
        {
            title: '数据源配置',
            content: <Configuration />
        },
        {
            title: '任务选择',
            content: <Pretreatment />
        },
        {
            title: props.current !== 'drill' ? '模型配置' : '模型配置',
            content: <ModelTrain type={props.current} />
        },
        {
            title: '任务提交',
            content: <Result handleStepChange={undefined} type={undefined} />
        }
    ];
    const classS = classString ? classString : '';
    return (
        <>
            <div className={`panel compute-drill ${classS}`}>
                <div className={'inner'}>
                    <Row className={'compute-row'}>
                        <Col flex={'250px'} className={'steps-box'}>
                            <Steps current={current} onChange={stepsChange} direction="vertical">
                                {steps.map((item) => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                        </Col>
                        <Col flex={'600px'} className={'details-box'}>
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current > 0 && current < steps.length - 1 && (
                                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                        上一步
                                    </Button>
                                )}
                                {current < steps.length - 2 && (
                                    <Button type="primary" onClick={() => next()}>
                                        下一步
                                    </Button>
                                )}
                                {current === steps.length - 2 && (
                                    <Button type="primary" onClick={() => next()}>
                                        任务提交
                                    </Button>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Drill;
