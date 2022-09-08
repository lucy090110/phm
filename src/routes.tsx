import {lazy} from "react";
import {Navigate} from "react-router-dom";
const Home=lazy(()=>import('@/phm/components/home/index'));
const AppContainer=lazy(()=>import('@/phm/components/app/container/index'));
const InfoContainer=lazy(()=>import('@/phm/components/info/container/index'));
const MonitorContainer=lazy(()=>import('@/phm/components/monitor/container/index'));
const FaultContainer=lazy(()=>import('@/phm/components/fault/container/index'));
const ForecastContainer=lazy(()=>import('@/phm/components/forecast/container/index'));
const MaintenanceContainer=lazy(()=>import('@/phm/components/maintenance/container/index'));
const ComputeContainer=lazy(()=>import('@/phm/components/compute/container/index'));
const detailsArr = [
    { key: 'home', title: '主页',element:<Home></Home> },
    { key: 'info', title: '信息页',element: <InfoContainer></InfoContainer> },
    { key: 'monitor', title: '监控',element: <MonitorContainer></MonitorContainer> },
    { key: 'fault', title: '故障维护',element: <FaultContainer></FaultContainer> },
    { key: 'forecast', title: '预测维护',element: <ForecastContainer></ForecastContainer> },
    { key: 'maintenance', title: '日常维护管理',element: <MaintenanceContainer></MaintenanceContainer> },
    { key: 'compute', title: 'AI定制',element: <ComputeContainer></ComputeContainer> }
];
const children = detailsArr.map((item) => {
    const { key, title,element } = item;
    if (key === 'home') {
        return {
            path: `${key}`,
            element: <Navigate to="/home"/>
        };
    }
    const childELe=element?element:<Home></Home>
    return {
        path: `${key}`,
        element:childELe,
        meta: {
            title
        }
    };
});
const routes: any[] = [
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '/home',
        meta: {
            title: '主页'
        },
        element: <Home></Home>
    },
    {
        path: '/app',
        // 路径支持相对地址和别名地址
        // 相对地址
        element: <AppContainer></AppContainer>,
        meta: {
            title: '详情'
        },
        children: children
    }
];

export default routes;
