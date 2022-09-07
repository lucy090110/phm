import {lazy} from "react";
const Home=lazy(()=>import('@/phm/components/home/index'));
const detailsArr = [
    { key: 'home', title: '主页' },
    { key: 'info', title: '信息页' },
    { key: 'monitor', title: '监控' },
    { key: 'fault', title: '故障维护' },
    { key: 'forecast', title: '预测维护' },
    { key: 'maintenance', title: '日常维护管理' },
    { key: 'compute', title: 'AI定制' }
];
const children = detailsArr.map((item) => {
    const { key, title } = item;
    if (key === 'home') {
        return {
            path: `${key}`,
            redirect: '/home'
        };
    }
    return {
        path: `${key}`,
        element: lazy(()=>import(`@/phm/components/${key}/container`)),
        meta: {
            title
        }
    };
});
const routes: any[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        meta: {
            title: '主页'
        },
        element: <Home></Home>
    }
//     {
//         path: '/app',
//         // 路径支持相对地址和别名地址
//         // 相对地址
//         element: lazy(()=>import('@/phm/components/app/container')),
//         meta: {
//             title: '详情'
//         },
//         children: children
//     }
];

export default routes;
