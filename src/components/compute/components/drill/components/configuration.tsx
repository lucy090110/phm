import React, { useEffect, useState } from 'react';
import {
    Col,
    Row,
    Select,
    Input,
    DatePicker,
    Upload,
    message,
    Button,
    Progress,
    Divider,
    Typography,
    Space
} from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { progressData } from '@/phm/components/compute/configData';
import commonData from '@/phm/components/conf/configData';

const { Option } = Select;
let index = 0;
const RangePicker: any = DatePicker.RangePicker;
const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text'
    },
    onChange(info:any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
};
const Configuration = () => {
    const { optionArr } = commonData;
    const getOption = (arr:any) => {
        return arr.map((item:any) => {
            return (
                <Option value={item.key} key={item.key}>
                    {item.title}
                </Option>
            );
        });
    };
    const piplineItems = ['一号纸机', '二号纸机', '三号纸机', '金隆浆'];
    const [selectValue, setSelectValue] = React.useState(optionArr[0].key);
    const [selectSystem, setSelectSystem] = React.useState('高浓磨系统');
    const [process1, setProcess1] = useState(0);
    const [process2, setProcess2] = useState(0);
    const [process3, setProcess3] = useState(0);
    const [equipmentItems, setEquipmentItems] = useState(optionArr);
    const [systemItems, setSystemItems] = useState(['高浓磨系统', '真空泵系统']);
    const [selectPipline, setSelectPipline] = useState('一号纸机');
    const [equipmentName, setEquipmentName] = useState('');
    const [systemName, setSystemName] = useState('');

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

    const onSystemNameChange = (event:any) => {
        setSystemName(event.target.value);
    };

    const addSystemItem = (e:any) => {
        e.preventDefault();
        setSystemItems([...systemItems, systemName || `New item ${index++}`]);
        setSystemName('');
    };

    useEffect(() => {
        const timer2 = setInterval(() => {
            if (process1 === 100) {
                if (process2 === 100) {
                    if (process3 === 100) {
                        clearInterval(timer2);
                        return;
                    } else if (process3 < 100) {
                        setProcess3((prev) => {
                            return prev + 20;
                        });
                    }
                } else if (process2 < 100) {
                    setProcess2((prev) => {
                        return prev + 20;
                    });
                }
            } else if (process1 < 100) {
                setProcess1((prev) => {
                    return prev + 20;
                });
            }
        }, 1000);
        return () => {
            if (timer2 !== null) {
                clearInterval(timer2);
            }
        };
    });
    const optionData = getOption(equipmentItems);
    const selectChange = (v:any) => {
        setSelectValue(() => {
            return v;
        });
    };
    const dateChange = (date:any, dateArr:any) => {
        console.log(date);
        console.log(dateArr);
    };
    const labelWidth = '130px';
    const controlStyle = { width: '250px' };
    // const progressChange = (percent, successPercent) => {
    //     const a = percent;
    //     const b = successPercent;
    // };
    return (
        <>
            <Row className={'control-group'}>
                <Col flex={labelWidth}>
                    <span className={'label'}>所属产线：</span>
                </Col>
                <Col flex={'auto'}>
                    <div className={'control'}>
                        <Select
                            style={controlStyle}
                            onChange={(v) => {
                                setSelectPipline(() => {
                                    return v;
                                });
                            }}
                            value={selectPipline}
                        >
                            {piplineItems.map((piplineName, index) => (
                                <Option key={piplineName}>{piplineName}</Option>
                            ))}
                            <Option value={'other'}>其他</Option>
                        </Select>
                    </div>
                </Col>
            </Row>

            <Row className={'control-group'}>
                <Col flex={labelWidth}>
                    <span className={'label'}>系统名称：</span>
                </Col>
                <Col flex={'auto'}>
                    <div className={'control'}>
                        <Select
                            style={controlStyle}
                            dropdownRender={(menu) => (
                                <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space align="center" style={{ padding: '0 8px 4px' }}>
                                        <Input
                                            placeholder="请输入新系统名称"
                                            value={systemName}
                                            onChange={onSystemNameChange}
                                            style={{ color: '#000' }}
                                        />
                                        <Typography.Link
                                            onClick={addSystemItem}
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            <PlusOutlined />
                                            添加
                                        </Typography.Link>
                                    </Space>
                                </>
                            )}
                            onChange={(v) => {
                                setSelectSystem(() => {
                                    return v;
                                });
                            }}
                            value={selectSystem}
                        >
                            {systemItems.map((systemName, index) => (
                                <Option key={systemName}>{systemName}</Option>
                            ))}
                            {/* {items.map(item => )} */}
                            <Option value={'other'}>其他</Option>
                        </Select>
                    </div>
                </Col>
            </Row>
            <Row className={'control-group'}>
                <Col flex={labelWidth}>
                    <span className={'label'}>设备名称：</span>
                </Col>
                <Col flex={'auto'}>
                    <div className={'control'}>
                        <Select
                            style={controlStyle}
                            dropdownRender={(menu) => (
                                <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space align="center" style={{ padding: '0 8px 4px' }}>
                                        <Input
                                            placeholder="请输入新设备名称"
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
                            {/* {items.map(item => )} */}
                            <Option value={'other'}>其他</Option>
                        </Select>
                    </div>
                </Col>
            </Row>

            {/* {selectValue === 'other' && (
                <Row className={'control-group'}>
                    <Col flex={labelWidth}>
                        <span className={'label'}>自定义设备名称：</span>
                    </Col>
                    <Col flex={'auto'}>
                        <div className={'control'}>
                            <Input style={controlStyle} />
                        </div>
                    </Col>
                </Row>
            )} */}

            <Row className={'control-group'}>
                <Col flex={labelWidth}>
                    <span className={'label'}>时间区间：</span>
                </Col>
                <Col flex={'auto'}>
                    <div className={'control'}>
                        <RangePicker locale={locale} onChange={dateChange} style={controlStyle} />
                    </div>
                </Col>
            </Row>

            <Row className={'control-group'}>
                <Col flex={labelWidth}>
                    <span className={'label'}>配置信号信息：</span>
                </Col>
                <Col flex={'auto'}>
                    <div className={'control'}>
                        <Upload {...uploadProps}>
                            <Button icon={<UploadOutlined />} style={controlStyle}>
                                上传
                            </Button>
                        </Upload>
                    </div>
                </Col>
            </Row>
            {/* {progressData.map((item, index) => {
                let num = process1;
                if (index === 1) {
                    num = process2;
                } else if (index === 2) {
                    num = process3;
                }
                return (
                    <Row className={'process-box'} key={index}>
                        <Col flex={'auto'}>
                            <Progress
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068'
                                }}
                                percent={num}
                            />
                        </Col>
                        <Col flex={'120px'} style={{ fontSize: '0.5rem' }}>
                            {num === 100 && item.title}
                        </Col>
                    </Row>
                );
            })} */}
        </>
    );
};

export default Configuration;
