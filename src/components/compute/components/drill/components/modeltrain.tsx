import React, { useState, useEffect } from 'react';
import { Col, Row, Input, InputNumber, Select, Divider } from 'antd';

const { Option } = Select;
const labelWidth = '160px';
const controlStyle = { width: '292px' };
const healthDetect = 'healthDetect';

function ModelTrain({ type }:any) {
    const [taskType, setTaskType] = useState('');
    const [healthData, setHealthData] = useState({
        trainVal: 50,
        verifyVal: 30,
        testVal: 20
    });
    return (
        <div>
            <Row className={'control-group'}>
                <Col flex={labelWidth}>
                    <span className={'label'}>任务类型：</span>
                </Col>
                <Col flex={'auto'}>
                    <div className={'control'}>
                        <Select
                            style={controlStyle}
                            placeholder="请选择任务类型"
                            onChange={(val) => {
                                setTaskType(val);
                            }}
                            value={taskType}
                        >
                            <Option value={''}>请选择任务类型</Option>
                            <Option value={'healthDetect'}>健康度评估</Option>
                            <Option value={'errorPredict'}>故障预测</Option>
                            <Option value={'lifePredict'}>剩余寿命预测</Option>
                            <Option value={'other'}>其他</Option>
                        </Select>
                    </div>
                </Col>
            </Row>
            {taskType === healthDetect && (
                <div>
                    <Divider dashed />
                    <div>
                        <Row className={'control-group'}>
                            <Col flex={labelWidth}>
                                <span className={'label'}>健康基准模型：</span>
                            </Col>
                            <Col flex={'auto'}>
                                <div className={'control'}>
                                    <Select
                                        style={controlStyle}
                                        onChange={() => {}}
                                        value={'origin'}
                                    >
                                        <Option value={'origin'}>高斯混合模型</Option>
                                        <Option value={'lstm'}>LSTM网络模型</Option>
                                        <Option value={'other'}>其他</Option>
                                    </Select>
                                </div>
                            </Col>
                        </Row>
                        {type !== 'drill' && (
                            <>
                                <Row className={'control-group'}>
                                    <Col flex={labelWidth}>
                                        <span className={'label'}>数据挑选：</span>
                                    </Col>
                                    <Col flex={'auto'}>
                                        <div className={'control'}>
                                            <Input.Group compact>
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        width: 100,
                                                        color: '#fff'
                                                    }}
                                                    value={'训练集'}
                                                    disabled
                                                />
                                                <InputNumber
                                                    min={0}
                                                    max={
                                                        100 -
                                                        healthData.testVal -
                                                        healthData.verifyVal
                                                    }
                                                    onChange={(value) => {
                                                        setHealthData({
                                                            ...healthData,
                                                            trainVal: value
                                                        });
                                                    }}
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 154
                                                    }}
                                                    value={healthData.trainVal}
                                                />
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 40
                                                    }}
                                                    defaultValue="%"
                                                    disabled
                                                />
                                            </Input.Group>
                                            <br />
                                            <Input.Group compact>
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        width: 100,
                                                        color: '#fff'
                                                    }}
                                                    defaultValue="验证集"
                                                    disabled
                                                />
                                                <InputNumber
                                                    min={0}
                                                    max={
                                                        100 -
                                                        healthData.trainVal -
                                                        healthData.testVal
                                                    }
                                                    onChange={(value) => {
                                                        setHealthData({
                                                            ...healthData,
                                                            verifyVal: value
                                                        });
                                                    }}
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 154
                                                    }}
                                                    value={healthData.verifyVal}
                                                />
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 40
                                                    }}
                                                    defaultValue="%"
                                                    disabled
                                                />
                                            </Input.Group>
                                            <br />
                                            <Input.Group compact>
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        width: 100,
                                                        color: '#fff'
                                                    }}
                                                    defaultValue="测试集"
                                                    disabled
                                                />
                                                <InputNumber
                                                    min={0}
                                                    max={
                                                        100 -
                                                        healthData.trainVal -
                                                        healthData.verifyVal
                                                    }
                                                    onChange={(value) => {
                                                        setHealthData({
                                                            ...healthData,
                                                            testVal: value
                                                        });
                                                    }}
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 154
                                                    }}
                                                    value={healthData.testVal}
                                                />
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 40
                                                    }}
                                                    defaultValue="%"
                                                    disabled
                                                />
                                            </Input.Group>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className={'control-group'}>
                                    <Col flex={labelWidth}>
                                        <span className={'label'}>健康度报警阀值：</span>
                                    </Col>
                                    <Col flex={'auto'}>
                                        <div className={'control'}>
                                            <Input.Group compact>
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        width: 100,
                                                        color: '#fff'
                                                    }}
                                                    value={'亚健康分数'}
                                                    disabled
                                                />
                                                <InputNumber
                                                    min={70}
                                                    max={100}
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 192
                                                    }}
                                                    defaultValue={80}
                                                />
                                            </Input.Group>
                                            <br />

                                            <Input.Group compact>
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        width: 100,
                                                        color: '#fff'
                                                    }}
                                                    value={'低置信度'}
                                                    disabled
                                                />
                                                <InputNumber
                                                    min={0}
                                                    max={0.7}
                                                    step={0.01}
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 192
                                                    }}
                                                    defaultValue={0.6}
                                                />
                                            </Input.Group>
                                            <br />

                                            <Input.Group compact>
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        width: 100,
                                                        color: '#fff'
                                                    }}
                                                    value={'异常分数'}
                                                    disabled
                                                />
                                                <InputNumber
                                                    min={0}
                                                    max={70}
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 192
                                                    }}
                                                    defaultValue={60}
                                                />
                                            </Input.Group>
                                            <br />

                                            <Input.Group compact>
                                                <Input
                                                    style={{
                                                        background: 'transparent',
                                                        width: 100,
                                                        color: '#fff'
                                                    }}
                                                    value={'高置信度'}
                                                    disabled
                                                />
                                                <InputNumber
                                                    min={0.7}
                                                    max={0.99}
                                                    step={0.01}
                                                    style={{
                                                        background: 'transparent',
                                                        color: '#fff',
                                                        width: 192
                                                    }}
                                                    defaultValue={0.9}
                                                />
                                            </Input.Group>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className={'control-group'}>
                                    <Col flex={labelWidth}>
                                        <span className={'label'}>高斯混合成分个数：</span>
                                    </Col>
                                    <Col flex={'auto'}>
                                        <div className={'control'}>
                                            <InputNumber
                                                max={10}
                                                min={1}
                                                style={{
                                                    background: 'transparent',
                                                    color: '#fff',
                                                    width: 292
                                                }}
                                                defaultValue={3}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModelTrain;
