/* eslint complexity: ["error", 32] */

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress, Button, Modal } from 'antd';
import MySpin from './spin';
import TableComponent from './tableComponent';
import { resultTableColumns, resultTableData } from '@/phm/components/compute/configData';
// let percent = 0;
const Result:React.FC=({ handleStepChange, type }:any) =>{
    const [percent, setPercent] = useState(0);
    const [capturePercent, setCapturePercent] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    const timer:any = useRef(null);
    useEffect(() => {
        myProgress(percent);
    }, []);
    const num = Number((500 * Math.random()).toFixed(0));
    function myProgress(val:any) {
        if (val >= 100) setPercent(100);
        else {
            timer.current = setTimeout(() => {
                myProgress(val + 2);
                setPercent(val + 2);
            }, num);
        }
    }
    return (
        <div className="progress-container">
            <Progress
                type="circle"
                strokeColor={
                    capturePercent
                        ? 'red'
                        : {
                              '0%': '#108ee9',
                              '100%': '#87d068'
                          }
                }
                style={{ color: '#fff' }}
                percent={capturePercent ? capturePercent : percent}
                status={capturePercent ? 'exception' : 'normal'}
            />
            <p className="white-text" style={{ margin: '12px 0' }}>
                {percent === 100
                    ? type === 'drill'
                        ? '训练完成'
                        : '检测完成'
                    : percent > 0
                    ? type === 'drill'
                        ? '训练中...'
                        : '检测中...'
                    : ''}
            </p>
            {percent < 100 && percent > 0 && (
                <div className="result-btns">
                    <Button
                        type="primary"
                        style={{ margin: 6 }}
                        onClick={() => {
                            clearTimeout(timer.current);
                            setCapturePercent(percent);
                            setPercent(0);
                        }}
                    >
                        取消
                    </Button>
                </div>
            )}
            <div className="result-msg">
                {type !== 'drill' && percent > 0 ? (
                    <>
                        <p>
                            数据集分割，训练集、验证集、测试集构建{' '}
                            <MySpin isFinish={percent >= 10} />
                        </p>
                        {percent > 10 && (
                            <p>
                                训练集异常数据点剔除 <MySpin isFinish={percent >= 25} />
                            </p>
                        )}
                        {percent > 25 && (
                            <p>
                                健康基准模型构建 <MySpin isFinish={percent >= 35} />
                            </p>
                        )}
                        {percent >= 35 && (
                            <p>
                                验证集数据点与健康分布模型距离计算{' '}
                                <MySpin isFinish={percent >= 45} />
                            </p>
                        )}
                        {percent >= 45 && (
                            <p>
                                健康度因子相关参数计算 <MySpin isFinish={percent >= 55} />
                            </p>
                        )}
                        {percent >= 55 && (
                            <p>
                                健康度评估模型构建完成 <MySpin isFinish={percent >= 70} />
                            </p>
                        )}
                        {percent >= 70 && (
                            <p>
                                测试集测试 <MySpin isFinish={percent >= 90} />
                            </p>
                        )}
                        {percent >= 90 && (
                            <p>
                                训练完成 <MySpin isFinish={percent >= 100} />
                            </p>
                        )}
                    </>
                ) : (
                    <>
                        {/* {percent > 0 && (
                            <p>
                                主成分分析 <MySpin isFinish={percent >= 30} />
                            </p>
                        )}
                        {percent > 30 && (
                            <p>
                                健康度计算 <MySpin isFinish={percent >= 85} />
                            </p>
                        )}
                        {percent >= 85 && (
                            <p>
                                检测完成，结果查看 <MySpin isFinish={percent >= 100} />
                            </p>
                        )} */}
                    </>
                )}
                {/* <p>结果查看！</p> */}
                <div className="result-btns" style={{ display: 'flex', justifyContent: 'center' }}>
                    {(percent === 100 || capturePercent > 0) && (
                        <Button
                            type="primary"
                            style={{ margin: 6 }}
                            onClick={() => {
                                handleStepChange(0);
                            }}
                        >
                            重新检测
                        </Button>
                    )}
                    {percent === 100 && (
                        <Button
                            type="primary"
                            disabled={percent !== 100}
                            style={{
                                margin: 6,
                                background: percent !== 100 ? 'transparent' : 'inherit',
                                color: '#fff'
                            }}
                            onClick={() => {
                                setIsModalVisible(true);
                                //  navigate('/app/maintenance')
                            }}
                        >
                            详情
                        </Button>
                    )}
                </div>
            </div>

            <Modal
                title="数据详情"
                width={800}
                footer={null}
                open={isModalVisible}
                onOk={() => {
                    setIsModalVisible(false);
                }}
                onCancel={() => {
                    setIsModalVisible(false);
                }}
            >
                <div className={'table-box table-box-small'}>
                    <TableComponent
                        columns={resultTableColumns}
                        dataSource={resultTableData}
                        scroll={{ y: 500, x: 1200 }}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default Result;
