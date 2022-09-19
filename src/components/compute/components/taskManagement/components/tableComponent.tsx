import React, { useState } from 'react';

import '@/phm/components/compute/css/index.less';
import { Table, Modal } from 'antd';
import { dataSource4 } from '@/phm/components/compute/configData';
import DetailsBox from '@/phm/components/compute/components/taskManagement/components/detailsBox';

const ActionItem = (props:any) => {
    const { className, text, content, onOk, dataIndex } = props;
    const confirm = () => {
        const dataObj: any = {
            title: text,
            content,
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                onOk(dataIndex, className);
            }
        };
        Modal.confirm(dataObj);
    };
    return (
        <>
            <a onClick={confirm} className={className}>
                {text}
            </a>
        </>
    );
};
const TableComponent = () => {
    const [dataSource, setDataSource] = useState(dataSource4);

    const commonEvent = (dataIndex:any, type:any) => {
        let data: any = [];
        if (type === 'delete') {
            data = filterData({ type, dataIndex, dataObj: { key: 'col0' } });
        } else if (type === 'publish') {
            data = filterData({ type, dataIndex, dataObj: { key: 'status', value: '已发布' } });
        } else if (type === 'cancelPublish') {
            data = filterData({ type, dataIndex, dataObj: { key: 'status', value: '未发布' } });
        } else if (type === 'stop') {
            data = filterData({ type, dataIndex, dataObj: { key: 'col5', value: '异常停止' } });
        } else if (type === 'continue') {
            data = filterData({ type, dataIndex, dataObj: { key: 'col5', value: '训练中' } });
        }
        setDataSource([...data]);
    };
    const filterData = (filed: any) => {
        const { type, dataIndex, dataObj } = filed;
        const { key, value } = dataObj;
        const dataArr: any[] = [];
        if (type === 'delete') {
            dataSource.splice(dataIndex, 1);
        }
        dataSource.forEach((item:any, index:any) => {
            const { status } = item;
            let obj = item;
            if (type === 'publish') {
                obj = {
                    ...item,
                    status: status === '已发布' ? '未发布' : status
                };
            }
            if (type === 'delete') {
                obj[key] = index + 1;
            } else {
                if (dataIndex === index) {
                    obj[key] = value;
                }
            }
            dataArr.push(obj);
        });
        return dataArr;
    };
    const columns4: any = [
        {
            title: '序号',
            width: 60,
            dataIndex: 'col0',
            key: '0',
            align: 'center'
        },
        {
            title: '任务编号',
            dataIndex: 'col1',
            key: '1',
            align: 'center'
        },
        {
            title: '模型名称',
            dataIndex: 'col2',
            key: '2',
            align: 'center'
        },
        {
            title: '开始时间',
            width: 180,
            dataIndex: 'col3',
            key: '3',
            align: 'center'
        },
        {
            title: '结束时间',
            width: 180,
            dataIndex: 'col4',
            key: '4',
            align: 'center'
        },
        {
            title: '模型状态',
            dataIndex: 'col5',
            key: '5',
            align: 'center'
        },
        {
            title: '指标',
            dataIndex: 'col6',
            key: '6',
            align: 'center'
        },
        {
            title: '操作',
            dataIndex: 'col7',
            key: '7',
            align: 'center',
            render: (text:any, record:any, index:any) => {
                const { col2, col5, status } = record;
                let actionArr = [
                    {
                        text: '部署上线',
                        key: 'publish',
                        content: `已有版本【${col2}】发布，执行该操作将取消该版本的发布，同时将当前版本的模型进行发布，是否继续执行？`,
                        onOk: commonEvent
                    },
                    {
                        text: '取消部署',
                        key: 'cancelPublish',
                        content: `执行该操作将取消当前版本模型的发布，是否继续执行？`,
                        onOk: commonEvent
                    },
                    {
                        text: '停止',
                        key: 'stop',
                        content: `执行该操作将停止当前模型的运行，是否继续执行？`,
                        onOk: commonEvent
                    },
                    {
                        text: '继续',
                        key: 'continue',
                        content: `执行该操作将继续当前模型的运行，是否继续执行？`,
                        onOk: commonEvent
                    }
                ];
                actionArr = actionArr.filter((item) => {
                    if (col5 === '已完成') {
                        if (status === '已发布') {
                            return (
                                item.key !== 'stop' &&
                                item.key !== 'publish' &&
                                item.key !== 'continue'
                            );
                        } else if (status === '未发布') {
                            return (
                                item.key !== 'stop' &&
                                item.key !== 'cancelPublish' &&
                                item.key !== 'continue'
                            );
                        }
                    } else if (col5 === '异常停止') {
                        return item.key === 'continue';
                    } else {
                        return item.key === 'stop';
                    }
                    return item;
                });
                const deleteObj = {
                    text: '删除',
                    key: 'delete',
                    className: 'delete',
                    content: `执行该操作将删除当前模型，是否继续执行？`,
                    onOk: commonEvent
                };
                return (
                    <div className={'action-box'}>
                        {actionArr.map((item) => {
                            const { key } = item;
                            const objItem = {
                                ...item,
                                className: key
                            };
                            return <ActionItem value={key} {...objItem} dataIndex={index} />;
                        })}
                        <DetailsBox />
                        <ActionItem value={deleteObj.key} {...deleteObj} dataIndex={index} />
                    </div>
                );
            }
        }
    ];
    return (
        <>
            <div className={'table-box'}>
                <Table columns={columns4} dataSource={dataSource} />
            </div>
        </>
    );
};

export default TableComponent;
