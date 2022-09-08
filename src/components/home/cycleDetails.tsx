import React from 'react';
import { Row, Col } from 'antd';
import { cycleDetailsModule } from './configData';
import CycleInfo from './components/cycleInfo';
import MarqueeComponent from '../common/marqueeComponent';
import CycleForcecast from './components/cycleForcecast';
import CycleEmergency from './components/cycleEmergency';
import CycleMaintenance from './components/cycleMaintenance';

class CycleDetails extends React.Component<any> {
    getEle = (type:any) => {
        let component = null;
        switch (type) {
            case 'info':
                component = <CycleInfo />;
                break;
            case 'alarmLogging':
                component = <MarqueeComponent hasCycle={true} />;
                break;
            case 'forecast':
                component = <CycleForcecast />;
                break;
            case 'maintenance':
                component = <CycleMaintenance />;
                break;
            case 'emergency':
                component = <CycleEmergency />;
                break;
            default:
                break;
        }
        return component;
    };

    render() {
        const { cycleType } = this.props;
        let status = '';
        return (
            <div className={'cycle-details'}>
                <Row>
                    {cycleDetailsModule.map((item) => {
                        const ele = this.getEle(item.type);
                        const classString1 = item.type === 'info' ? 'overview' : '';
                        const classString2 = item.type === cycleType ? 'hover' : '';
                        let percent = '30%';
                        if (item.type === 'emergency') {
                            percent = '10%';
                            status = 'status-warning';
                        }
                        return (
                            <Col flex={percent} key={item.type}>
                                <div
                                    className={`panel ${classString1} ${classString2} ${status} ${item.type}`}
                                >
                                    <div className={'inner'}>
                                        {item.type !== 'fault' && (
                                            <div className="title">{item.title}</div>
                                        )}
                                        {ele}
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        );
    }
}
export default CycleDetails;
