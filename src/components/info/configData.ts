import { getFullDate } from '@/phm/framework/utils';

export const detailData = [
    {
        value: '20h',
        label: '运行时长'
    },
    {
        value: '2021/12/09 15:47',
        label: '最近报警时间'
    },
    {
        value: '2021/12/09 17:07',
        label: '最近停机时间'
    },
    {
        value: '2021/12/09 19:27',
        label: '复位时间'
    }
];
export const detailData2 = [
    {
        name: 'default',
        data: [
            {
                title: 'HCR_NDE振动加速度',
                value: '0.389699928',
                key: 'key1'
            },
            {
                title: 'HCR_NDE振动加速度',
                value: '0.186184404',
                key: 'key2'
            },
            {
                title: 'HCR_NDE实际进料压力',
                value: '0.656205687',
                key: 'key3'
            },
            {
                title: 'HCR_NDE板间隙',
                value: '0.138226111',
                key: 'key4'
            },
            {
                title: 'HCR_DE振动加速度',
                value: '0.498506062',
                key: 'key5'
            },
            {
                title: 'HCR_DE振动速度',
                value: '0.134265485',
                key: 'key6'
            },
            {
                title: 'HCR_DE实际进料压力',
                value: '0.680521323',
                key: 'key7'
            },
            {
                title: 'HCR_DE板间隙',
                value: '0.162902926',
                key: 'key8'
            }
        ]
    },
    {
        name: 'highConsistencyRefiner',
        data: [
            {
                value: '20',
                title: '温度'
            },
            {
                value: '40',
                title: '加速度1'
            },
            {
                value: '54',
                title: '速度1'
            },
            {
                value: '40',
                title: '加速度2'
            },
            {
                value: '54',
                title: '速度2'
            },
            {
                title: '更多'
            }
        ]
    },
    {
        name: 'gearbox',
        data: [
            {
                value: '20',
                title: '温度1'
            },
            {
                value: '40',
                title: '温度2'
            },
            {
                value: '54',
                title: '速度1'
            },
            {
                value: '40',
                title: '速度2'
            },
            {
                title: '更多'
            }
        ]
    },
    {
        name: 'highVoltageMotor',
        data: [
            {
                value: '20',
                title: '温度1'
            },
            {
                value: '40',
                title: '温度2'
            },
            {
                value: '54',
                title: '加速度1'
            },
            {
                value: '40',
                title: '加速度2'
            },
            {
                value: '54',
                title: '速度1'
            },
            {
                value: '40',
                title: '速度2'
            },
            {
                title: '更多'
            }
        ]
    },
    {
        name: 'vacuumPump',
        data: [
            {
                value: '20',
                title: '温度1'
            },
            {
                value: '40',
                title: '温度2'
            },
            {
                value: '50',
                title: '电流1'
            },
            {
                value: '430',
                title: '电流2'
            },
            {
                value: '54',
                title: '加速度1'
            },
            {
                value: '40',
                title: '加速度2'
            },
            {
                value: '54',
                title: '速度1'
            },
            {
                value: '40',
                title: '速度2'
            },
            {
                title: '更多'
            }
        ]
    }
];
export const recordData = [
    {
        title: '报警记录',
        data: [
            '什么时候xx温度超限',
            '什么时候xx转速过快',
            '什么时候停机',
            '什么时候xx温度超限',
            '什么时候xx转速过快',
            '什么时候停机',
            '什么时候xx温度超限',
            '什么时候xx转速过快',
            '什么时候停机',
            '什么时候xx温度超限',
            '什么时候xx转速过快',
            '什么时候停机',
            '什么时候xx温度超限',
            '什么时候xx转速过快',
            '什么时候停机',
            '什么时候xx温度超限',
            '什么时候xx转速过快',
            '什么时候停机',
            '什么时候xx温度超限',
            '什么时候xx转速过快',
            '什么时候停机',
            '什么时候xx温度超限',
            '什么时候xx转速过快',
            '什么时候停机'
        ]
    }
    //     {
    //         title: '诊断结果',
    //         data: [
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……',
    //             '编码xx停机为xx故障，建议……'
    //         ]
    //     }
];
export const machineEleArr = [
    {
        position: [40, 70],
        name: '牵引电机'
    },
    {
        position: [112, 97],
        name: '小齿轮'
    },
    {
        position: [84, 90],
        name: '驱动轴'
    },
    {
        position: [113, 67],
        name: '大齿轮'
    },
    {
        position: [97, 100],
        name: '挠性连轴器'
    },
    {
        position: [122, 19],
        name: '减速齿轮箱'
    },
    {
        position: [22, 15],
        name: '制动盘'
    },
    {
        position: [220, 130],
        name: '齿轮箱吊挂装置'
    }
];

export const machineEleDetail1 = [
    {
        label: '设备名称',
        type: 'name'
    },
    {
        label: '设备ID',
        type: 'id'
    },
    {
        label: '使用历史',
        type: 'count'
    },
    {
        label: '报警历史',
        type: 'count'
    },
    {
        label: '停机历史',
        type: 'count'
    },
    {
        label: '故障历史',
        type: 'count'
    },
    {
        label: '维修历史',
        type: 'count'
    }
];

export const machineEleDetail2 = [
    {
        label: '系统名称',
        type: 'name'
    },
    {
        label: '系统ID',
        type: 'id'
    },
    {
        label: '所属产线',
        type: 'line'
    },
    {
        label: '使用历史',
        type: 'count'
    },
    {
        label: '报警历史',
        type: 'count'
    },
    {
        label: '停机历史',
        type: 'count'
    },
    {
        label: '故障历史',
        type: 'count'
    },
    {
        label: '维修历史',
        type: 'count'
    }
];
export const gaugeText = [
    {
        label: '健康状态',
        value: '健康',
        key: 'health',
        type: 'status'
    },
    {
        label: '预测故障',
        value: '24h后',
        key: 'time'
    },
    //     {
    //         label: '剩余寿命',
    //         value: '2年',
    //         key: 'life'
    //     },

    {
        label: '相关变量',
        value: 'HCR_NDE振动加速度...',
        key: 'variate'
    },
    {
        label: '当前时间',
        value: getFullDate(),
        key: 'date'
    }
];
