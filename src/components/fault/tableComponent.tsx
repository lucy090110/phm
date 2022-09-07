import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: '故障等级',
        dataIndex: 'grade',
        width: 90
    },
    {
        title: '故障名称',
        dataIndex: 'name'
    },
    {
        title: '管理单号',
        dataIndex: 'managementNumber'
    },
    {
        title: '故障单号',
        dataIndex: 'faultNumber'
    },
    {
        title: '故障代码',
        dataIndex: 'code'
    },
    {
        title: '故障序列号',
        dataIndex: 'serial'
    },
    {
        title: '故障开始时间',
        dataIndex: 'startTime'
    },
    {
        title: '故障结束时间',
        dataIndex: 'endTime'
    },
    {
        title: '故障诊断结果',
        dataIndex: 'result'
    },
    {
        title: '维护建议',
        dataIndex: 'advise',
        ellipsis: true
    },
    {
        title: '预计节约成本',
        dataIndex: 'cost',
        width: 150
    }
];

// const data = [];
// const gradeArr=['A','B','C','D'];
// for (let i = 0; i < 100; i++) {
//     let grade=gradeArr[Math.round(Math.random()*(gradeArr.length-1))];
//     let startTime=i+1;
//     let endTime=i+2;
//     if(i>10){
//         startTime=`1${Math.floor(i/10)}`;
//         endTime=Number(startTime)+1;
//     }
//     data.push({
//         key: i,
//         grade,
//         name: `故障 ${i}`,
//         managementNumber:`MN${Math.round(Math.random()*1000)}` ,
//         faultNumber:`FN${Math.round(Math.random()*1000)}` ,
//         code:`000-${Math.round(Math.random()*100)}`,
//         serial:`${Math.round(Math.random()*100)}`,
//         startTime:`2022-01-${startTime}`,
//         endTime:`2021-01-${endTime}`,
//         result:'部件存在故障',
//         advise:'按时检修',
//         cost:`${Math.round(Math.random()*10000)}元`,
//     });
// }
const TableComponent: React.FC<any> = (props: any) => {
    const { dataSource } = props;
    return (
        <div className={'table-box'}>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 50 }}
                scroll={{ y: 320 }}
            />
        </div>
    );
};
export default TableComponent;
