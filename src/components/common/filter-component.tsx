/* eslint-disable complexity */
/* eslint-disable max-nested-callbacks */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Row, Col, Select, DatePicker, Input, Button, message } from 'antd';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import qs from 'query-string';

import { useRequest } from 'ahooks';
import { getEquipmentList, getMeters } from '@/phm/service/filter';
import { getMonitorData, getPredictMonitorData } from '@/phm/service/monitor';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { detailData2 } from '@/phm/components/info/configData';
const { Option } = Select;
const { RangePicker } = DatePicker;

interface filterProps {
    configData: object;
}
interface props {
    updateTableData: () => void;
    updateChartData: () => void;
}
const defaultVal = -100100;
const childrenKey = ['orgName', 'plName', 'groupName', 'subgroupName', 'deviceName', 'meterName'];

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
        key: 'meterName',
        baseName: 'meter',
        value: defaultVal,
        mode: 'multiple',
        name: '信号',
        type: 'select',
        options: detailData2[0].data.map((signal: any) => {
            signal.value = signal.title;
            return signal;
        })
    },
    {
        name: '起止时间',
        type: 'dateRange',
        key: 'date'
    }
];

const startDate = moment('2022-06-01').startOf('month');
const endDate = moment().endOf('month');
const defaultParams = {
    deviceCode: '',
    meterCode: '',
    from: startDate.valueOf(),
    to: endDate.unix() * 1000,
    interval: ''
};

const FilterComponent: React.FC<filterProps | props | any> = ({
    updateTableData,
    updateChartData
}) => {
    const { data, loading } = useRequest(getEquipmentList);
    const { data: meterData }:any = useRequest(getMeters);
    const [meters, setMeters] = useState([]);
    const [params, setParams] = useState(defaultParams);
    const [doUpdate, setDoUpdate] = useState(0);
    const [updateKey, setUpdateKey] = useState('');
    const wrapperRef:any= useRef(null);
    const [wrapperHeight, setWrapperHeight] = useState(40);
    const [config, setConfig] = useState<any>(filterConfig);
    const [ready, setReady] = useState(false);
    const location = useLocation();
    // const { deviceCode, plCode, groupCode, subgroupCode, orgCode } = qs.parse(location.search);
    // 自动计算容器高度
    useEffect(() => {
        if (wrapperRef.current) {
            const height = wrapperRef.current.offsetHeight + 40;
            setWrapperHeight(height);
        }
    }, [wrapperRef.current]);

    // 数据格式化
    useEffect(() => {
        if (!data || !meterData) return;
        const newConfig = filterConfig.map((item: any) => {
            const tempOptions:any[] = [];
            // eslint-disable-next-line array-callback-return
            item.options = (data as any).map((option: any) => {
                if (
                    tempOptions.filter((tOption: any) => tOption[item.key] === option[item.key])
                        .length === 0
                ) {
                    if (item.key === 'meterName') {
                        // const meterProperties = meterData.filter(meter => meter.meterCode === option['meterCode'])[0]
                        // const merterOptions = option['meterCodes'].map((meterItem) => {
                        //     const mTempData = meterData.filter((meter) => meter.meterCode === meterItem)[0];
                        //     return {
                        //         ...mTempData,
                        //         key: meterItem,
                        //         value: meterItem,
                        //         name: mTempData.meterName
                        //     };
                        // });

                        const merterOptions = (meterData as any).map((meterItem:any) => {
                            return {
                                ...meterItem,
                                key: meterItem.meterCode,
                                value: meterItem.meterCode,
                                name: meterItem.meterName
                            };
                        });
                        tempOptions.push(...arrayElementUnique(merterOptions));
                    } else {
                        tempOptions.push({
                            ...option,
                            key: option[item.baseName + 'Code'],
                            value: option[item.baseName + 'Code'],
                            name: option[item.baseName + 'Name']
                        });
                    }
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
        setConfig(newConfig);
        ready && setReady(true);
    }, [data, meterData]);

    useEffect(() => {
        if (!ready) return;
        const newConfig = config.map((cfg:any) => {
            // orgCode=JD01&plCode=PM301&groupCode=101&subgroupCode=10101&deviceCode=1010101
            if (cfg.key === 'orgName') {
                cfg.value = 'JD01';
            }
            if (cfg.key === 'plName') {
                cfg.value = 'PM301';
            }
            if (cfg.key === 'groupName') {
                cfg.value = 101;
            }
            if (cfg.key === 'subgroupName') {
                cfg.value = 10101;
            }
            if (cfg.key === 'deviceName') {
                cfg.value = `1010101`;
            }
            if (cfg.key === 'meterName') {
                cfg.value = [
                    'CN-GE-PM3-G15PC011_PT',
                    'CN-GE-PM3-G15PI024',
                    'CN-GE-PM3-G15PC011_PV'
                ];
            }
            return cfg;
        });
        console.log(228, '请求 /？');
        setConfig(newConfig);
        handleSearch(newConfig);
    }, [ready]);

    // 对象数组去重
    const arrayElementUnique = (arr: any[]) => {
        const res = [];
        const json:any = {};
        for (const i of arr) {
            if (!json[i['key']]) {
                res.push(i);
                json[i['key']] = 1;
            }
        }
        return res;
    };

    const handleSelectChange = (type: string, value: number | string | Array<number | string>) => {
        setDoUpdate(doUpdate + 1);
        setUpdateKey(type);
        // 选中工厂对应的产线列表：
        let selectedOrgPlCode:any[] = [];

        // 选中产线对应的系统列表：
        let selectedPlGroupCode:any[] = [];

        // 选中系统的子系统列表：
        let selectedGroupSubgCodes:any[] = [];

        // 选中子系统的设备列表；
        let selectedSubGroupDeviceCodes:any[] = [];

        // 选中设备的信号列表；
        let selectedDeviceMeterCodes:any[] = [];

        const updatedConfig = config.map((cfg: any) => {
            if (cfg.key === type) {
                cfg.value = value;
            }

            // 工厂变化
            if (cfg.key === type && type === 'orgName') {
                (data as any).forEach((device:any) => {
                    if (device.orgCode === value) {
                        selectedOrgPlCode.push(device.plCode);
                    }
                });
            }
            if (cfg.key === 'plName' && type === 'orgName') {
                if (selectedOrgPlCode.length) {
                    const defaultOption = [
                        {
                            key: defaultVal,
                            value: defaultVal,
                            name: '请选择'
                        }
                    ];
                    const selectPlList:any[] = [];
                    (data as any).forEach((device:any) => {
                        if (selectedOrgPlCode.includes(device.plCode)) {
                            selectPlList.push({
                                ...device,
                                key: device.plCode,
                                value: device.plCode,
                                name: device.plName
                            });
                        }
                    });
                    console.log(267, cfg.key, type, selectedOrgPlCode, selectPlList);
                    cfg.options = defaultOption.concat(arrayElementUnique(selectPlList));
                    selectedOrgPlCode = [];
                    return cfg;
                }
            }

            // 产线变化
            if (cfg.key === type && type === 'plName') {
                (data as any).forEach((device:any) => {
                    if (device.plCode === value) {
                        selectedPlGroupCode.push(device.groupCode);
                    }
                });
            }

            if (cfg.key === 'groupName' && type === 'plName') {
                if (selectedPlGroupCode.length) {
                    const defaultOption = [
                        {
                            key: defaultVal,
                            value: defaultVal,
                            name: '请选择'
                        }
                    ];
                    const selectGroupList:any[] = [];
                    (data as any).forEach((device:any) => {
                        if (selectedPlGroupCode.includes(device.groupCode)) {
                            selectGroupList.push({
                                ...device,
                                key: device.groupCode,
                                value: device.groupCode,
                                name: device.groupName
                            });
                        }
                    });
                    cfg.options = [];
                    cfg.options = defaultOption.concat(arrayElementUnique(selectGroupList));
                    selectedPlGroupCode = [];
                    return cfg;
                }
            }

            // 系统变化
            if (cfg.key === type && type === 'groupName') {
                (data as any).forEach((group:any) => {
                    if (group.groupCode === value) {
                        selectedGroupSubgCodes.push(group.subgroupCode);
                    }
                });
            }

            if (cfg.key === 'subgroupName' && type === 'groupName') {
                if (selectedGroupSubgCodes.length) {
                    const defaultOption = [
                        {
                            key: defaultVal,
                            value: defaultVal,
                            name: '请选择'
                        }
                    ];
                    const selectSubgList:any[] = [];
                    (data as any).forEach((device:any) => {
                        if (selectedGroupSubgCodes.includes(device.subgroupCode)) {
                            selectSubgList.push({
                                ...device,
                                key: device.subgroupCode,
                                value: device.subgroupCode,
                                name: device.subgroupName
                            });
                        }
                    });
                    cfg.options = [];
                    cfg.options = defaultOption.concat(arrayElementUnique(selectSubgList));
                    selectedGroupSubgCodes = [];
                    return cfg;
                }
            }

            // 子系统变化
            if (cfg.key === type && type === 'subgroupName') {
                (data as any).forEach((subgroup:any) => {
                    if (subgroup.subgroupCode === value) {
                        selectedSubGroupDeviceCodes.push(subgroup.deviceCode);
                    }
                });
            }

            if (cfg.key === 'deviceName' && type === 'subgroupName') {
                if (selectedSubGroupDeviceCodes.length) {
                    cfg.options = [
                        {
                            key: defaultVal,
                            value: defaultVal,
                            name: '请选择'
                        }
                    ];
                    const selectDeviceList:any[] = [];
                    (data as any).forEach((deviceItem:any) => {
                        if (selectedSubGroupDeviceCodes.includes(deviceItem.deviceCode)) {
                            selectDeviceList.push({
                                ...deviceItem,
                                key: deviceItem.deviceCode,
                                value: deviceItem.deviceCode,
                                name: deviceItem.deviceName
                            });
                        }
                    });
                    cfg.options.push(...selectDeviceList);
                    selectedSubGroupDeviceCodes = [];
                    return cfg;
                }
            }

            // 设备变化
            if (cfg.key === type && type === 'deviceName') {
                selectedDeviceMeterCodes.push(
                    ...(data as any).filter((device:any) => device.deviceCode === value)[0].meterCodes
                );
            }
            if (cfg.key === 'meterName' && type !== 'meterName') {
                if (selectedDeviceMeterCodes.length) {
                    cfg.options = [
                        {
                            key: defaultVal,
                            value: defaultVal,
                            name: '请选择'
                        }
                    ];
                    const selectMeterInfoList:any[] = [];
                    (meterData as any).forEach((meterItem:any) => {
                        if (selectedDeviceMeterCodes.includes(meterItem.meterCode)) {
                            selectMeterInfoList.push({
                                ...meterItem,
                                key: meterItem.meterCode,
                                value: meterItem.meterCode,
                                name: meterItem.meterName
                            });
                        }
                    });
                    cfg.options.push(...selectMeterInfoList);
                    selectedDeviceMeterCodes = [];
                    return cfg;
                }
            }
            if (cfg.key === type && type === 'meterName') {
                const tempValue = value === defaultVal ? [defaultVal] : [...(value as any[])];
                if (tempValue.indexOf(defaultVal) >= 0 && tempValue.length > 1) {
                    const index = tempValue.indexOf(defaultVal);
                    tempValue.splice(index, 1);
                    cfg.value = tempValue;
                }
                if (tempValue.length === 0) {
                    cfg.value = [defaultVal];
                }
            }
            return cfg;
        });
        setConfig(updatedConfig);
    };
    const handleDateChange = useCallback(
        (value:any) => {
            console.log(value);
            if (!value) return;
            const [startTime, endTime] = value;
            const start = startTime.unix() * 1000;
            const end = endTime.valueOf();
            setParams({
                ...params,
                from: start,
                to: end
            });
        },
        [doUpdate, updateKey, params]
    );
    const handleSearch = async (configParams:any) => {
        const obj:any = {};
        configParams.forEach((cfg:any) => {
            obj[cfg['baseName'] + 'Code'] = cfg['value'];
        });
        if (!obj['deviceCode'] || obj['deviceCode'] === defaultVal) {
            message.error('请选择设备');
            return;
        }
        if (!obj['meterCode'] || obj['meterCode'] === defaultVal) {
            message.error('请选择信号');
            return;
        }
        setParams({
            ...params,
            deviceCode: obj['deviceCode'],
            meterCode: obj['meterCode']
        });
        const requestList:any[] = [];
        const predictRequestList:any[] = [];
        if (obj['meterCode'].length) {
            obj['meterCode'].forEach((meter:any) => {
                requestList.push(
                    getMonitorData({
                        ...obj,
                        ...params,
                        deviceCode: obj['deviceCode'],
                        meterCode: meter
                    })
                );
                predictRequestList.push(
                    getPredictMonitorData({
                        ...obj,
                        ...params,
                        deviceCode: obj['deviceCode'],
                        meterCode: meter
                    })
                );
            });
        } else {
            return;
        }
        const dataList = await Promise.all(requestList);
        const preDictDataList = await Promise.all(predictRequestList);
        const targetDataList:any[] = [];
        const meterList =
            obj['meterCode'].length &&
            obj['meterCode'].map((meter:any) => {
                let tempMeterData:any;
                for (const t in meterData) {
                    if (meterData[t].meterCode === meter) {
                        tempMeterData = meterData[t];
                    }
                }
                return tempMeterData;
            });
        updateTableData(meterList);
        if (dataList?.length) {
            dataList.forEach((item, index) => {
                if (item.length) {
                    targetDataList.push({
                        title: meterList[index].meterName,
                        realData: item,
                        predictData: preDictDataList[index]
                    });
                }
            });
        }
        console.log(295, targetDataList);
        updateChartData(targetDataList);
    };
    const handleReset = useCallback(() => {
        const resetConfig = config.map((cfg:any) => {
            cfg.value = defaultVal;
            return cfg;
        });
        setConfig(resetConfig);
    }, [config, doUpdate]);
    const autoUpdateConfig = useCallback(() => {
        if (doUpdate > 0 && updateKey) {
            const newConfig = filterConfig.map((item: any) => {
                if (item.key === updateKey) {
                    return item;
                }
                const currentIndex = childrenKey.indexOf(updateKey);
                const needResetKeys = childrenKey.slice(currentIndex + 1);
                if (needResetKeys.indexOf(item.key) > -1) {
                    item.value = defaultVal;
                }
                return item;
            });
            setConfig(newConfig);
        }
    }, [doUpdate, updateKey]);
    useEffect(() => {
        doUpdate > 0 && autoUpdateConfig();
    }, [doUpdate, updateKey]);
    return (
        <div className={'panel filter'} style={{ height: wrapperHeight + 'px' }}>
            <div className={'inner'} style={{ height: 'auto' }}>
                <div ref={wrapperRef} className="common-filter-container">
                    <Row gutter={32}>
                        {config.map((filter: any) => {
                            switch (filter.type) {
                                case 'select':
                                    return (
                                        <Col key={filter.key}>
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
                                                    mode={filter.mode}
                                                    maxTagCount={'responsive'}
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
                                        <Col key={filter.key}>
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
                                                    defaultValue={[
                                                        moment(params.from),
                                                        moment(params.to)
                                                    ]}
                                                    onChange={handleDateChange}
                                                    style={{ width: 280 }}
                                                    locale={locale}
                                                    ranges={{
                                                        今天: [moment(), moment()],
                                                        本月: [
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
                                        <Col key={filter.key}>
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
                            <Button
                                onClick={() => {
                                    handleSearch(config);
                                }}
                            >
                                查询
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={handleReset}>重置</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};
export default FilterComponent;
