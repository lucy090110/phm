import config from './index';

const {
    url: {
        app: { info, monitor, fault, forecast, maintenance, compute }
    }
} = config;
const highVoltageMotorChildren = [];
const positionTArr1 = [5, 13.5, 22, 31, 40, 46.5, 55, 63, 70.5, 78.5, 87];
const positionTArr2 = [3, 12, 21, 30, 39, 46, 55, 63, 71, 79, 88];
for (let i = 0; i < 11; i++) {
    highVoltageMotorChildren.push(
        {
            key: `highVoltageMotor${i + 1}`,
            title: `高压马达${i + 1}`,
            position: {
                home: ['82%', `${positionTArr1[i]}%`],
                info: ['78%', `${positionTArr2[i]}%`]
            }
        },
        {
            key: `gearbox${i + 1}`,
            title: `齿轮箱${i + 1}`,
            position: {
                home: ['76%', `${positionTArr1[i]}%`],
                info: ['72%', `${positionTArr2[i]}%`]
            }
        }
        //         {
        //             key: `vacuumPump${i + 1}`,
        //             title: `真空泵${i + 1}`,
        //             position: {
        //                 home: ['80%', `${4 + i * 8.8}%`],
        //                 info: ['80%', `${4 + i * 8.7}%`]
        //             }
        //         }
    );
}
const menuArr = [
    {
        title: info.title,
        path: info.path,
        key: 'info',
        childNav: [
            {
                key: 'highConsistencyRefinerSystem',
                title: '高浓磨系统',
                machineEleArr: [
                    {
                        key: 'highConsistencyRefiner',
                        title: '高浓磨',
                        position: {
                            home: ['45%', '20.5%'],
                            info: ['45%', '18.5%']
                        }
                    },
                    {
                        key: 'gearbox',
                        title: '齿轮箱',
                        position: {
                            home: ['50%', '51.5%'],
                            info: ['50%', '51%']
                        }
                    },
                    {
                        key: 'highVoltageMotor',
                        title: '高压马达',
                        position: {
                            home: ['45%', '76.5%'],
                            info: ['45%', '76%']
                        }
                    }
                ]
            },
            {
                key: 'vacuumPumpSystem',
                title: '真空泵系统',
                machineEleArr: highVoltageMotorChildren
            }
        ]
    },
    {
        title: monitor.title,
        path: monitor.path,
        key: 'monitor'
    },
    //     {
    //         title: fault.title,
    //         path: fault.path,
    //         key: 'fault'
    //     },
    {
        title: forecast.title,
        path: forecast.path,
        key: 'forecast'
    },
    //     {
    //         title: maintenance.title,
    //         path: maintenance.path,
    //         key: 'maintenance'
    //     },
    {
        title: compute.title,
        path: compute.path,
        key: 'compute',
        childNav: [
            { key: 'drill', title: '模型训练' },
            { key: 'taskManagement', title: '任务管理' }
        ]
    }
];
// const rootArr=[
//     {
//         title:home.title,
//         path: home.path,
//         component: lazyLoad(import('../home')),
//     }
// ]
const routeArr = [...menuArr];
export default {
    routeArr,
    menuArr
};
