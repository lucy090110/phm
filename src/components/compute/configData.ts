export const stepsData1:any = [
    { title: '数据初始化完成' },
    { title: '数据缺失值填充完成' },
    { title: '数据类型转换完成' },
    { title: '数据标准化/归一化完成' }
];
export const stepsData2:any = [
    { title: '时域特征抽取完成' },
    { title: '频域特征抽取完成' },
    { title: '时频域特征抽取完成' }
];
export const stepsData3:any = [{ title: '标签计算完成' }];
export const stepBoxArr:any = [
    { title: '数据预处理', data: stepsData1 },
    { title: '特征', data: stepsData2 },
    { title: '标签', data: stepsData3 }
];
export const progressData:any = [
    { title: '配置加载完成' },
    { title: 'PI系统读取完成' },
    { title: '数据库加载完成' }
];
export const columns1:any = [
    {
        title: '序号',
        dataIndex: 'sn',
        key: '1',
        align: 'center'
    },
    {
        title: '测点名称',
        dataIndex: 'name',
        key: '2',
        width: 260
    },
    {
        title: '测点描述',
        dataIndex: 'description',
        key: '5'
        // width: 260
    },
    {
        title: '缺失量',
        dataIndex: 'amount',
        key: '3'
    },
    {
        title: '数据类型',
        dataIndex: 'type',
        key: '4'
    }
];
export const dataSource1:any = [
    {
        sn: '0',
        name: 'CN-LJ-AP1-M11C13C51M401.Run',
        description: 'some descriptions',
        amount: '107',
        type: 'float64'
    },
    {
        sn: '1',
        name: 'CN-LJ-AP1-M11C13C51M401.Act1',
        description: 'some descriptions',
        amount: '113',
        type: 'float64'
    },
    {
        sn: '2',
        name: 'CN-LJ-AP1-M11C13C51M401.Curr',
        description: 'some descriptions',
        amount: '0',
        type: 'float64'
    },
    {
        sn: '3',
        name: 'CN-LJ-AP1-M11C13C51M401.Torq',
        description: 'some descriptions',
        amount: '206',
        type: 'float64'
    }
];

export const columns2:any = [
    {
        title: '时间',
        dataIndex: 'col10',
        key: '10'
    },
    {
        title: 'CN-LJ-AP1-M11C13XI712',
        dataIndex: 'col1',
        key: '1',
        align: 'center'
    },
    {
        title: 'CN-LJ-AP1-M11C13XI713',
        dataIndex: 'col2',
        key: '2',
        align: 'center'
    },
    {
        title: 'CN-LJ-AP1-M11C13XC658_18_ACT_CLS_FORCE',
        dataIndex: 'col3',
        width: 300,
        key: '3'
    },
    {
        title: 'CN-LJ-AP1-M11C13XC658_16_ACT_POS_GAP',
        dataIndex: 'col4',
        width: 300,
        key: '4'
    },
    {
        title: 'CN-LJ-AP1-M11C13XI732',
        dataIndex: 'col5',
        key: '5'
    },
    {
        title: 'CN-LJ-AP1-M11C13XI733',
        dataIndex: 'col6',
        key: '6'
    },
    {
        title: 'CN-LJ-AP1-M11C13XC659_27_ACT_CLS_FORCE',
        dataIndex: 'col7',
        width: 300,
        key: '7'
    },
    {
        title: 'CN-LJ-AP1-M11C13XC659_25_ACT_POS_GAP',
        dataIndex: 'col8',
        width: 300,
        key: '8'
    },
    {
        title: 'CN-LJ-AP1-M11C13JI812',
        dataIndex: 'col9',
        key: '9'
    }
];
export const dataSource2:any = [
    {
        col1: '0',
        col2: '0.03054943',
        col3: '0',
        col4: '18.34489',
        col5: '0',
        col6: '0.03028904',
        col7: '0.1829746',
        col8: '18.7849',
        col9: '0.09',
        col10: '2020/11/3 15:00'
    },
    {
        col1: '0',
        col2: '0.03308959',
        col3: '0',
        col4: '18.34',
        col5: '0',
        col6: '0.03162359',
        col7: '-0.01106457',
        col8: '18.7791',
        col9: '0.09',
        col10: '2020/11/3 16:00'
    },
    {
        col1: '0',
        col2: '0.03562974',
        col3: '0',
        col4: '18.34',
        col5: '0',
        col6: '0.03295813',
        col7: '-0.08371297',
        col8: '18.77785',
        col9: '0.09',
        col10: '2020/11/3 17:00'
    },
    {
        col1: '0',
        col2: '0.03816989',
        col3: '0',
        col4: '18.34',
        col5: '0',
        col6: '0.03429268',
        col7: '0.1',
        col8: '18.7766',
        col9: '0.09',
        col10: '2020/11/3 18:00'
    },
    {
        col1: '0',
        col2: '0.04071005',
        col3: '0',
        col4: '18.34',
        col5: '0',
        col6: '0.03562722',
        col7: '0.1',
        col8: '-18.77535',
        col9: '0.09',
        col10: '2020/11/3 19:00'
    },
    {
        col1: '0',
        col2: '0.0432502',
        col3: '0',
        col4: '18.34',
        col5: '0',
        col6: '0.03696177',
        col7: '0.003562825',
        col8: '18.7741',
        col9: '0.09',
        col10: '2020/11/3 20:00'
    },
    {
        col1: '0',
        col2: '0.04579036',
        col3: '0',
        col4: '18.34',
        col5: '0',
        col6: '0.03829632',
        col7: '0.1637132',
        col8: '18.77285',
        col9: '0.09',
        col10: '2020/11/3 21:00'
    },
    {
        col1: '0',
        col2: '0.04833051',
        col3: '0',
        col4: '18.34',
        col5: '0',
        col6: '0.03963086',
        col7: '-0.08971643',
        col8: '18.7716',
        col9: '0.09',
        col10: '2020/11/3 22:00'
    },
    {
        col1: '0',
        col2: '0.04956658',
        col3: '0',
        col4: '18.34',
        col5: '0',
        col6: '0.05',
        col7: '0',
        col8: '18.77035',
        col9: '0.09',
        col10: '2020/11/3 23:00'
    },
    {
        col1: '0',
        col2: '0.0483021',
        col3: '0',
        col4: '16.39',
        col5: '0',
        col6: '0.05',
        col7: '-0.1',
        col8: '17.59027',
        col9: '0.09',
        col10: '2020/11/4 0:00'
    }
];

export const columns3:any = [
    {
        title: '时间',
        width: 200,
        dataIndex: 'col0',
        key: '0',
        align: 'center'
    },
    {
        title: '高浓度磨浆机非驱动端振动加速度',
        dataIndex: 'col1',
        key: '1',
        align: 'center'
    },
    {
        title: '高浓度磨浆机非驱动端振动速度',
        dataIndex: 'col2',
        key: '2',
        align: 'center'
    },
    {
        title: '高浓度磨浆机非驱动端进料压力',
        dataIndex: 'col3',
        key: '3'
    },
    {
        title: '高浓度磨浆机非驱动端转子位置/板间隙',
        width: 200,
        dataIndex: 'col4',
        key: '4'
    },
    {
        title: '高浓度磨浆机驱动端振动加速度',
        dataIndex: 'col5',
        key: '5'
    },
    {
        title: '高浓度磨浆机驱动端振动速度',
        dataIndex: 'col6',
        key: '6'
    },
    {
        title: '高浓度磨浆机驱动端进料压力',
        dataIndex: 'col7',
        key: '7'
    },
    {
        title: '高浓度磨浆机驱动端转子位置/板间隙',
        width: 200,
        dataIndex: 'col8',
        key: '8'
    },
    {
        title: '高浓度磨浆机负载',
        dataIndex: 'col9',
        key: '9'
    },
    {
        title: 'f1data_vibration_acceleration_NDE_HCR',
        width: 200,
        dataIndex: 'col10',
        key: '10'
    }
];

export const dataSource3:any = [
    {
        col0: '2022-03-21 12:32:23',
        col1: 0,
        col2: '0.006808334',
        col3: '0.220223782',
        col4: '1',
        col5: '0',
        col6: '0.005897539',
        col7: '0.226655309',
        col8: '1',
        col9: '0.002243397',
        col10: '0'
    },
    {
        col0: '2022-03-21 12:32:23',
        col1: '0',
        col2: '0.006471577',
        col3: '0.220223782',
        col4: '1',
        col5: '0',
        col6: '0.005897539',
        col7: '0.223919374',
        col8: '1',
        col9: '0.002243397',
        col10: '0'
    },
    {
        col0: '2022-03-21 12:32:23',
        col1: '0',
        col2: '0.006134822',
        col3: '0.220223782',
        col4: '1',
        col5: '0',
        col6: '0.005897539',
        col7: '0.225743331',
        col8: '1',
        col9: '0.002243397',
        col10: '0'
    },
    {
        col0: '2022-03-21 12:32:23',
        col1: '0',
        col2: '0.005798067',
        col3: '0.220223782',
        col4: '1',
        col5: '0',
        col6: '0.005897539',
        col7: '0.224409085',
        col8: '1',
        col9: '0.002243397',
        col10: '0'
    },
    {
        col0: '2022-03-21 12:32:23',
        col1: '0',
        col2: '0.005461312',
        col3: '0.220223782',
        col4: '1',
        col5: '0',
        col6: '0.005897539',
        col7: '0.226653177',
        col8: '1',
        col9: '0.002243397',
        col10: '0'
    },
    {
        col0: '2022-03-21 12:32:23',
        col1: '0',
        col2: '0.006069712',
        col3: '0.220223782',
        col4: '1',
        col5: '0',
        col6: '0.012263994',
        col7: '0.224831352',
        col8: '1',
        col9: '0.002243397',
        col10: '0'
    },
    {
        col0: '2022-03-21 12:32:23',
        col1: '0',
        col2: '0.007908745',
        col3: '0.220223782',
        col4: '1',
        col5: '0',
        col6: '0.020685439',
        col7: '0.225383675',
        col8: '1',
        col9: '0.002243397',
        col10: '0'
    },
    {
        col0: '2022-03-21 12:32:23',
        col1: '0',
        col2: '0.009747779',
        col3: '0.220223782',
        col4: '1',
        col5: '0',
        col6: '0.029106889',
        col7: '0.224341255',
        col8: '1',
        col9: '0.002243397',
        col10: '0'
    },
    {
        col0: '2022-03-21 12:32:23',
        col1: '0',
        col2: '0.011586812',
        col3: '0.220223782',
        col4: '1',
        col5: '0',
        col6: '0.037528338',
        col7: '0.004357251',
        col8: '1',
        col9: '0.002243397',
        col10: '0'
    },
    {
        col0: '2022-03-21 12:32:23',
        col1: '0',
        col2: '0.460017601',
        col3: '0.220223782',
        col4: '0.912418744',
        col5: '0',
        col6: '0.349395542',
        col7: '0.228479267',
        col8: '0.912704533',
        col9: '0.019524324',
        col10: '0'
    }
];
export const resultTableColumns:any = [
    {
        title: '时间',
        width: 200,
        dataIndex: 'time',
        align: 'center'
    },
    {
        title: '训练编号',
        dataIndex: 'trainNo',
        align: 'center'
    },
    {
        title: '状态',
        dataIndex: 'status',
        align: 'center'
    },
    {
        title: '部署上线',
        dataIndex: 'published',
        align: 'center'
    },
    {
        title: '部署上线',
        dataIndex: 'published',
        align: 'center'
    },
    {
        title: '评估指标',
        dataIndex: 'factor',
        align: 'center'
    }
];
export const resultTableData:any = [
    {
        time: '2022-05-05 12:17:32',
        trainNo:
            new Date().getTime().toString().substring(0, 8) + (Math.random() * 1000).toFixed(0),
        status: '成功',
        publishTime: '2022-05-05 12:17:32',
        published: '已上线',
        factor: '健康度'
    },
    {
        time: '2022-05-05 12:17:32',
        trainNo:
            new Date().getTime().toString().substring(0, 8) + (Math.random() * 1000).toFixed(0),

        status: '失败   ',
        publishTime: '2022-05-05 12:17:32',
        published: '未上线',
        factor: '健康度'
    },
    {
        time: '2022-05-05 12:17:32',
        trainNo:
            new Date().getTime().toString().substring(0, 8) + (Math.random() * 1000).toFixed(0),

        status: '成功',
        publishTime: '2022-05-05 12:17:32',
        published: '已上线',
        factor: '健康度'
    },
    {
        time: '2022-05-05 12:17:32',
        trainNo:
            new Date().getTime().toString().substring(0, 8) + (Math.random() * 1000).toFixed(0),

        status: '成功',
        publishTime: '2022-05-05 12:17:32',
        published: '已上线',
        factor: '健康度'
    },
    {
        time: '2022-05-05 12:17:32',
        trainNo:
            new Date().getTime().toString().substring(0, 8) + (Math.random() * 1000).toFixed(0),

        status: '成功',
        publishTime: '2022-05-05 12:17:32',
        published: '已上线',
        factor: '健康度'
    }
];

export const dataSource4:any = [
    {
        col0: '1',
        col1: '986567649',
        col2: '-',
        col3: '2021-05-11 09:30:02',
        col4: '2021-05-12 09:30:02',
        col5: '异常停止',
        col6: 'r^2_adj、RMSE、MAPE',
        status: '-'
    },
    {
        col0: '2',
        col1: '986567600',
        col2: '-',
        col3: '2021-05-11 09:30:02',
        col4: '2021-05-12 09:30:02',
        col5: '训练中',
        col6: 'r^2_adj、RMSE、MAPE',
        status: '-'
    },
    {
        col0: '3',
        col1: '986567649',
        col2: '模型v1.0',
        col3: '2021-05-11 09:30:02',
        col4: '2021-05-12 09:30:02',
        col5: '已完成',
        col6: 'r^2_adj、RMSE、MAPE',
        status: '已发布'
    },
    {
        col0: '4',
        col1: '986567600',
        col2: '模型v2.0',
        col3: '2021-05-11 09:30:02',
        col4: '2021-05-12 09:30:02',
        col5: '已完成',
        col6: 'r^2_adj、RMSE、MAPE',
        status: '未发布'
    }
];
