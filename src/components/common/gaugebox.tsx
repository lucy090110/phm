import React from 'react';
import { Row, Col } from 'antd';
import { cycleInfoData } from '@/phm/components/home/configData';
import CommonChart from '@/phm/components/common/commonChart';
import { gaugeData } from '@/phm/components/conf/chartsData/gaugeData';
import { gaugeText } from '@/phm/components/info/configData';

const GaugeBox: React.FC<any> = (props) => {
    const { entrance, systemKey, eleKey } = props;
    // let path = `/app/forecast?systemKey=${systemKey}&&eleKey=${eleKey}`;
    let path = `/app/forecast?orgCode=${`JD01`}&plCode=${`PM301`}&groupCode=${101}&subgroupCode=${10101}&deviceCode=${1010101}`;

    if (eleKey === systemKey) {
        // path = `/app/forecast?systemKey=${systemKey}`;
        path = `/app/forecast?orgCode=${`JD01`}&plCode=${`PM301`}&groupCode=${101}&subgroupCode=${10101}&deviceCode=${1010101}`;
    }
    const getChartDetails = ({ classStr, h }:any) => {
        return (
            <>
                <CommonChart option={gaugeData.option} height={h} />
                <div className={`gauge-description ${classStr}`}>
                    {gaugeText.map((item) => {
                        let classString = '';
                        if (item.type && item.type === 'status') {
                            classString = item.key;
                        }
                        return (
                            <div key={item.key}>
                                {item.label}：<span className={classString}>{item.value}</span>
                            </div>
                        );
                    })}
                    {entrance === 'info' && <a href={path}>详情</a>}
                </div>
            </>
        );
    };
    let classStr = '';
    let h = '19rem';
    let details: any = getChartDetails({ classStr, h });
    if (entrance === 'home') {
        classStr = 'home-gauge-description';
        h = '13rem';
        details = (
            <Row>
                <Col flex="auto">{getChartDetails({ classStr, h })}</Col>
                <Col flex="85px">
                    <Row>
                        {cycleInfoData.map((item, index) => {
                            return (
                                <Col span={24} key={index}>
                                    <div className={'value'}>{item.value}</div>
                                    <div className={'label'}>{item.label}</div>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        );
    }
    return <>{details}</>;
};
export default GaugeBox;
