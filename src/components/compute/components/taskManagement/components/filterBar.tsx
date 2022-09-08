import React, { useState } from 'react';
import { Row, Col, Select, Divider, Space, Input, Typography, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
const RangePicker: any = DatePicker.RangePicker;
let index = 0;
function FilterBar() {
    const taskTypeArr = [
        {
            key: 'healthDegree',
            title: '健康度评估'
        },
        {
            key: 'statusTrend',
            title: '状态趋势预测'
        },
        {
            key: 'faultWarning',
            title: '故障预警'
        }
    ];
    const [status, setStatus] = useState('all');
    const [equipmentName, setEquipmentName] = useState('');
    const [equipmentItems, setEquipmentItems] = useState(taskTypeArr);
    const [selectValue, setSelectValue] = React.useState(taskTypeArr[0].key);
    const statusArr = [
        {
            key: 'all',
            title: '全部状态'
        },
        {
            key: 'drilling',
            title: '训练中'
        },
        {
            key: 'finish',
            title: '已完成'
        },
        {
            key: 'stop',
            title: '异常停止'
        }
    ];
    const onEquipmentNameChange = (event:any) => {
        setEquipmentName(event.target.value);
    };
    const addEquipItem = (e:any) => {
        e.preventDefault();
        setEquipmentItems([
            ...equipmentItems,
            { key: `New item ${index++}`, title: equipmentName || `New item ${index++}` }
        ]);
        setEquipmentName('');
    };
    const selectChange = (v:any) => {
        setSelectValue(() => {
            return v;
        });
    };

    const dateChange = (date:any, dateArr:any) => {
        const a = date;
        const b = dateArr;
    };
    const getOption = (arr:any) => {
        return arr.map((item:any) => {
            return (
                <Option value={item.key} key={item.key}>
                    {item.title}
                </Option>
            );
        });
    };
    const optionData = getOption(equipmentItems);
    return (
        <>
            <Row justify={'end'} className={'filter-bar'}>
                <Col>
                    <Row>
                        <Col>
                            <span className={'label'}>任务类型：</span>
                        </Col>
                        <Col>
                            <div className={'controls'}>
                                <Select
                                    style={{ width: '230px' }}
                                    dropdownRender={(menu) => (
                                        <>
                                            {menu}
                                            <Divider style={{ margin: '8px 0' }} />
                                            <Space align="center" style={{ padding: '0 8px 4px' }}>
                                                <Input
                                                    placeholder="请输入新任务类型名称"
                                                    value={equipmentName}
                                                    onChange={onEquipmentNameChange}
                                                    style={{ color: '#000' }}
                                                />
                                                <Typography.Link
                                                    onClick={addEquipItem}
                                                    style={{ whiteSpace: 'nowrap' }}
                                                >
                                                    <PlusOutlined />
                                                    添加
                                                </Typography.Link>
                                            </Space>
                                        </>
                                    )}
                                    onChange={selectChange}
                                    value={selectValue}
                                >
                                    {optionData}
                                </Select>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <span className={'label'}>日期：</span>
                        </Col>
                        <Col>
                            <div className={'controls'}>
                                <RangePicker
                                    onChange={dateChange}
                                    placeholder={['开始时间', '结束时间']}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <span className={'label'}>模型状态：</span>
                        </Col>
                        <Col>
                            <div className={'controls'}>
                                <Select style={{ width: '100px' }} value={status}>
                                    {statusArr.map((item, index) => {
                                        return (
                                            <Option value={item.key} key={item.key}>
                                                {item.title}
                                            </Option>
                                        );
                                    })}
                                </Select>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default FilterBar;
