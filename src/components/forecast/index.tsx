/*
 * @Date: 2021-12-10 14:58:18
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-12-22 14:09:20
 * @FilePath: /work/machine-control/src/components/forecast/index.js
 */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import VariableChart from './components/variableChart';
import HealthyChart from './components/healthyChart';
import TemperatureChart from './components/temperatureChart';
import ElementsHealthy from './components/elementsHealthy';
import ForecastDescription from './components/forecastDescription';
import SuggestDescription from './components/suggestDescription';
import DegenerateChart from './components/degenerationChart';
import FaultChart from './components/faultChart';
import LifePrediction from './components/lifePrediction';
import ForecastFilter from './components/filter-component';
import HealthyChartTest from './components/healthyChartTest'
import './index.less';
import VariableChartTest from "@/phm/components/forecast/components/variableChartTest";
import FaultChartTest from "@/phm/components/forecast/components/faultChartTest"
function Prediction() {
    const [healthyChartData, setHealthyChartData] = useState([]);
    const [faultPredictionChartData, setFaultPredictionChartData] = useState([]);
    const [deviceName, setDeviceName] = useState('');

    const [meterStatData, setMeterStatData] = useState([]);
    const [nextFaultTime, setNextFaultTime] = useState({});
    const [relatedMeterData, setRelatedMeterData] = useState([]);

    const [params4RelatedMeter, setParams4RelatedMeter] = useState({});
    // <FilterComponent updateTableData={setTableData} updateChartData={setChartData} />
    const onUpdateDataByType = (type:any, data:any) => {
        if (type === 'healthy') {
            setHealthyChartData(data);
        } else if (type === 'falut') {
            setFaultPredictionChartData(data);
        } else if (type === 'nextFault') {
            setNextFaultTime(data);
        } else if (type === 'meterStat') {
            setMeterStatData(data);
        } else if (type === 'relatedMeters') {
            setRelatedMeterData(data);
        }
    };

    return (
        <>
            <ForecastFilter
                onDataUpdate={onUpdateDataByType}
                updateFaultPredictionData={setFaultPredictionChartData}
                updateHealthyChartData={setHealthyChartData}
                updateChartTitle={setDeviceName}
                updateRelatedParams={setParams4RelatedMeter}
            />
            <Row gutter={[24, 24]}>
                <Col span={16}>
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            {/*<HealthyChart*/}
                            {/*    data={healthyChartData}*/}
                            {/*    title={deviceName}*/}
                            {/*    onDataUpdate={onUpdateDataByType}*/}
                            {/*    relatedParams={params4RelatedMeter}*/}
                            {/*/>*/}
                            <HealthyChartTest/>
                        </Col>
                        <Col span={24}>
                            {/*<VariableChart data={relatedMeterData} />*/}
                            {/* <ElementsHealthy /> */}
                            <VariableChartTest/>

                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <div className="panel" style={{ height: 458 }}>
                                <div className="z-chart-container inner">
                                    <TemperatureChart
                                        height={430}
                                        data={faultPredictionChartData}
                                    />
                                </div>
                            </div>
                        </Col>

                        <Col span={24}>
                            <ForecastDescription data={nextFaultTime} />
                        </Col>
                        <Col span={24}>
                            <div className="panel" style={{ height: 318 }}>
                                <div className="z-chart-container inner">
                                    <FaultChart data={meterStatData} height={280} />
                                </div>
                            </div>
                        </Col>
                        {/* <Col span={12}>
                            <div className="panel" style={{ height: 248 }}>
                                <div className="z-chart-container inner">
                                    <DegenerateChart height={180} />
                                </div>
                            </div>
                        </Col> */}
                        {/* 
                    <Col span={12}>
                        <div className="panel" style={{ height: 248 }}>
                            <div className="z-chart-container inner">
                                <LifePrediction height={180} />
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <SuggestDescription />
                    </Col> */}
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Prediction;
