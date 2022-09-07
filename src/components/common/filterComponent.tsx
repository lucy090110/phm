import React from 'react';
import { Row, Col, Select, DatePicker, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { machineData } from '@/phm/components/fault/mockData';
const { Option } = Select;
const { RangePicker } = DatePicker;
const FilterComponent: React.FC<any> = (props) => {
    const { varArr, machineEleArr, systemArr, currentKey, systemKey, eleKey, varType } = props;
    const factoryArr = [
        {
            title: '一号纸机',
            key: 'k1',
            data: { type: 'factoryKey' },
            value: 'k1'
        },
        {
            title: '二号纸机',
            key: 'k2',
            data: { type: 'factoryKey' },
            value: 'k2'
        },
        {
            title: '三号纸机',
            key: 'k3',
            data: { type: 'factoryKey' },
            value: 'k3'
        },
        {
            title: '金隆浆',
            key: 'k4',
            data: { type: 'factoryKey' },
            value: 'k4'
        }
    ];
    const navigate = useNavigate();
    const configData = [
        {
            text: '系统名称',
            key: 'systemName',
            data: systemArr,
            selectValue: systemKey === '' ? systemArr[0].key : systemKey
        },
        {
            text: '设备名称',
            key: 'eleName',
            data: machineEleArr,
            selectValue: eleKey === systemKey || eleKey === '' ? machineEleArr[0].key : eleKey
        }
    ];
    // if (currentKey === 'monitor') {
    //     const preFields = [
    //         {
    //             text: '所属工厂',
    //             key: 'factory',
    //             data: factoryArr,
    //             selectValue: factoryArr[0].key
    //         },
    //         {
    //             text: '所属产线',
    //             key: 'factory',
    //             data: factoryArr,
    //             selectValue: factoryArr[0].key
    //         }
    //     ];
    //     const tailFields = [
    //         {
    //             text: '信号',
    //             key: 'varName',
    //             data: varArr,
    //             selectValue: varType === null ? varArr[0].key : varType
    //         }
    //         // {
    //         //     text: '起止时间',
    //         //     key: 'varName',
    //         //     data: varArr,
    //         //     selectValue: varType === null ? varArr[0].key : varType
    //         // }
    //     ];
    //     if (currentKey === 'monitor') configData = [...preFields, ...configData, ...tailFields];
    //     else configData = [...preFields, ...configData];
    // }
    const span = 24 / (configData.length + 1);
    const getOption = (optionArr:any) => {
        return optionArr.map((item:any) => {
            return (
                <Option value={item.key} key={item.key} data={item.data}>
                    {item.title}
                </Option>
            );
        });
    };
    const selectChange = (v:any, option:any) => {
        let sysK = systemKey;
        let eleK = eleKey;
        let varK = varType === null ? varArr[0].key : varType;
        const { type } = option.data;
        if (type.indexOf('systemKey') > -1) {
            sysK = v;
        } else if (type.indexOf('eleKey') > -1) {
            eleK = v;
        } else if (type.indexOf('varKey') > -1) {
            varK = v;
        } else if (type.indexOf('factoryKey') > -1) {
            // varK = v;
        }
        let path = `/app/monitor?systemKey=${sysK}&&eleKey=${eleK}&&varType=${varK}`;
        if (eleKey === systemKey) {
            path = `/app/monitor?systemKey=${sysK}&&varType=${varK}`;
        }
        navigate(path, { replace: true });
    };
    let h = '4rem';
    if (currentKey === 'fault') {
        h = '6.2rem';
    }
    // else if (currentKey === 'monitor') {
    //     h = '7.6rem';
    // }
    if (currentKey === 'forecast') return <div />;
    if (currentKey === 'monitor') return <div />;
    return (
        <div className={'panel filter'} style={{ height: h }}>
            <div className={'inner'}>
                <Row>
                    {/* {currentKey === 'forecast' && (
                        <Col>
                            <Row>
                                <Col flex={'80px'}>
                                    <span className={'label'}>{'时间'}</span>
                                </Col>
                                <Col flex={'200px'}>
                                    <div className={'control'}>
                                        <RangePicker
                                            locale={locale}
                                            ranges={{
                                                Today: [moment(), moment()],
                                                'This Month': [
                                                    moment().startOf('month'),
                                                    moment().endOf('month')
                                                ]
                                            }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    )} */}
                    {configData.map((item) => {
                        const { text, key, data, selectValue } = item;
                        return (
                            <Col key={key} span={6}>
                                <Row>
                                    <Col flex={'100px'}>
                                        <span className={'label'}>{text}</span>
                                    </Col>
                                    <Col flex={'auto'}>
                                        <div className={'control'}>
                                            <Select onChange={selectChange} value={selectValue}>
                                                {getOption(data)}
                                            </Select>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        );
                    })}
                    {/* {currentKey === 'monitor' && (
                        <>
                            <Col>
                                <Row>
                                    <Col flex={'100px'}>
                                        <span className={'label'}>{'起止时间'}</span>
                                    </Col>
                                    <Col flex={'360px'}>
                                        <div className={'control'}>
                                            <RangePicker showTime locale={locale} />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col flex={'200px'}>
                                <Button type="primary" style={{ marginRight: 12 }}>
                                    查询
                                </Button>
                                <Button>下载</Button>
                            </Col>
                        </>
                    )} */}
                </Row>
                {currentKey === 'fault' && (
                    <Row className={'fault-details'}>
                        {machineData?.map((item, index) => {
                            return (
                                <Col span={6} key={index}>
                                    <Row>
                                        <Col>{item.label}</Col>：<Col>{item.value}</Col>
                                    </Row>
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </div>
        </div>
    );
};
export default FilterComponent;
