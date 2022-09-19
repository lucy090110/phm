import React, { useState } from 'react';
import { Row, Col, Table } from 'antd';
import { useRequest } from 'ahooks';
import './monitor.less';
import Card from './monitor-card';
import { column, data } from './mockData';
import MonitorChart from './monitorChart';
import { getMonitorData } from '@/phm/service/monitor';
import FilterComponent from '@/phm/components/common/filter-component';
import DegenerateChart from "@/phm/components/forecast/components/degenerationChart";
import FaultChartTest from "@/phm/components/forecast/components/faultChartTest";
const Monitor = (props: any) => {
    const [tableData, setTableData] = useState([]);
    const [chartData, setChartData] = useState([]);
    return (
        <div className="monitor-wrapper">
            <FilterComponent updateTableData={setTableData} updateChartData={setChartData} />
            <div className="monitor-content">
                {/*<Row className="card-list">*/}
                {/*    <Col span={24}>*/}
                {/*        <div className="panel" style={{ height: 200, width: 'calc(100vw - 50px)' }}>*/}
                {/*            <div className="z-chart-container inner">*/}
                {/*                <div*/}
                {/*                    className="main table-box table-box-large"*/}
                {/*                    style={{ width: '100%' }}*/}
                {/*                >*/}
                {/*                    <Table*/}
                {/*                        size={'small'}*/}
                {/*                        columns={column as any}*/}
                {/*                        dataSource={tableData}*/}
                {/*                        pagination={false}*/}
                {/*                        scroll={{ y: 120 }}*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    {chartData.length &&*/}
                {/*        chartData.map((chart:any, index:any) => (*/}
                {/*            <Col key={index} span={24}>*/}
                {/*                <div className="panel" style={{ height: 540 }}>*/}
                {/*                    <div className="z-chart-container inner">*/}
                {/*                        <MonitorChart*/}
                {/*                            realData={chart.realData}*/}
                {/*                            predictData={chart.predictData}*/}
                {/*                            title={chart.title}*/}
                {/*                            height={''}*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </Col>*/}
                {/*        ))}*/}
                {/*</Row>*/}
                        <div className="panel" style={{ height: 450, width: 'calc(100vw - 50px)' }}>
                            <div className="z-chart-container inner">
                                <FaultChartTest height={440}/>
                            </div>
                        </div>
            </div>
        </div>
    );
};

// Monitor.propTypes = {

// };

export default Monitor;
