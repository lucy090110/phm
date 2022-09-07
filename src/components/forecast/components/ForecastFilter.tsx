import React, { useEffect, useState } from 'react';
import { Row, Col, Select, DatePicker, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { getEquipmentList } from '@/phm/service/filter';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { detailData2 } from '@/phm/components/info/configData';
const { Option } = Select;
const { RangePicker } = DatePicker;

interface filterProps {
    configData: object;
}
const defaultVal = -100100;
const filterConfig = [
    {
        key: 'orgName',
        baseName: 'org',
        name: '所属工厂',
        value: defaultVal,
        type: 'select',
        options: [
            { key: -100100, value: '请选择' }
            // { key: 'jingui', value: '金桂' },
            // { key: 'jd', value: '金东厂' }
        ]
    },
    {
        key: 'plName',
        baseName: 'pl',
        name: '所属产线',
        value: defaultVal,
        type: 'select',
        options: [
            { key: -100100, value: '请选择' }
            // { key: '1', value: '一号纸机' },
            // { key: '2', value: '二号纸机' },
            // { key: '3', value: '三号纸机' },
            // { key: '4', value: '金隆浆' }
        ]
    },
    {
        key: 'groupName',
        baseName: 'group',
        name: '系统名称',
        value: defaultVal,
        type: 'select',
        options: [
            { key: -100100, value: '请选择' }
            // { key: 'highConsistencyRefinerSystem', value: '高浓磨系统' },
            // { key: 'vacuumPumpSystem', value: '真空泵系统' }
        ]
    },
    {
        key: 'subgroupName',
        baseName: 'subgroup',
        name: '子系统名称',
        value: defaultVal,
        type: 'select',
        options: [
            { key: -100100, value: '请选择' }
            // { key: 'highConsistencyRefinerSystem', value: '高浓磨系统' },
            // { key: 'vacuumPumpSystem', value: '真空泵系统' }
        ]
    },
    {
        key: 'deviceName',
        baseName: 'device',
        name: '设备名称',
        value: defaultVal,
        type: 'select',
        options: [
            { key: -100100, value: '请选择' }
            // { key: 'highConsistencyRefiner', value: '高浓磨' },
            // { key: 'gearbox', value: '齿轮箱' },
            // { key: 'highVoltageMotor', value: '高压马达' }
        ]
    },
    {
        key: 'deviceName',
        name: '信号',
        type: 'select',
        options: detailData2[0].data.map((signal: any) => {
            signal.value = signal.title;
            return signal;
        })
    },
    {
        name: '起止时间',
        type: 'dateRange'
    }
];
const ForecastFilter: React.FC<filterProps | any> = (props) => {
    const { data, loading } = useRequest(getEquipmentList);
    console.log(67, data);
    // 一位数组转多维数组
    const [config, setConfig] = useState<any>(filterConfig);

    useEffect(() => {
        if (!data) return;
        const newConfig = filterConfig.map((item: any) => {
            const tempOptions:any[] = [];
            item.options = (data as any).forEach((option: any) => {
                if (
                    // eslint-disable-next-line max-nested-callbacks
                    tempOptions.filter((tOption: any) => tOption[item.key] === option[item.key])
                        .length === 0
                ) {
                    tempOptions.push({
                        ...option,
                        key: option[item.baseName + 'Code'],
                        value: option[item.baseName + 'Code'],
                        name: option[item.baseName + 'Name']
                    });
                }
            });
            tempOptions.unshift({
                key: defaultVal,
                value: defaultVal,
                name: '请选择'
            });
            item.options = tempOptions;
            return item;
        });
        console.log(114, newConfig);
        setConfig(newConfig);
    }, [data]);
    const handleSelectChange = (type: string, value: number | string) => {
        console.log(129, type, value);
        const updatedConfig = config.map((cfg: any) => {
            if (cfg.key === type) {
                cfg.value = value;
            }
            return cfg;
        });
        setConfig(updatedConfig);
    };
    return (
        <div className={'panel filter'}>
            <div className={'inner'} style={{ height: 180 }}>
                <Row gutter={32}>
                    {config.map((filter: any) => {
                        switch (filter.type) {
                            case 'select':
                                return (
                                    <Col>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '0 40'
                                            }}
                                        >
                                            <div
                                                className={'label'}
                                                style={{ width: 80, padding: '0 50' }}
                                            >
                                                {filter.name}
                                            </div>
                                            <Select
                                                style={{ width: 200, padding: '0 40' }}
                                                value={filter.value}
                                                onChange={(value) =>
                                                    handleSelectChange(filter.key, value)
                                                }
                                            >
                                                {filter.options.map((option:any) => (
                                                    <Select.Option
                                                        key={option.key}
                                                        value={option.key}
                                                    >
                                                        {option.name}
                                                    </Select.Option>
                                                ))}
                                            </Select>
                                        </div>
                                    </Col>
                                );
                            case 'dateRange':
                                return (
                                    <Col>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '0 40'
                                            }}
                                        >
                                            <div
                                                className={'label'}
                                                style={{ width: 80, padding: '0 50' }}
                                            >
                                                {filter.name}
                                            </div>
                                            <RangePicker
                                                style={{ width: 200 }}
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
                                );
                            default:
                                return (
                                    <Col>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '0 40'
                                            }}
                                        >
                                            <div className={'label'}>{filter.name}</div>
                                            <Input />
                                        </div>
                                    </Col>
                                );
                        }
                    })}
                    <Col>
                        <Button>查询</Button>
                    </Col>
                    <Col>
                        <Button>下载</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default ForecastFilter;
