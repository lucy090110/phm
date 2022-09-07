import React from 'react';
import { Col, Row, Select, DatePicker } from 'antd';
import './css/index.less';
import PieComponent from './pieComponent';
import TableComponent from './tableComponent';
import { tableData } from './mockData';
import BarComponent from './barComponent';
import CommonChart from '@/phm/components/common/commonChart';
import { ganttData } from '@/phm/components/conf/chartsData/ganttData';
const { Option } = Select;
const RangePicker: any = DatePicker.RangePicker;

const gradeArr = ['A', 'B', 'C', 'D'];
class Falut extends React.Component<any> {
    state = {
        grade: 'all',
        startTime: null,
        endTime: null,
        dataSource: tableData,
        seriesType: ''
    };
    selectChange = (value:any) => {
        const { startTime, endTime } = this.state;
        let newDataSource = tableData;
        if (value === 'all') {
            if (startTime && endTime) {
                newDataSource = tableData.filter((item) => {
                    if (startTime && endTime) {
                        return (
                            new Date(startTime) <= new Date(item.startTime) &&
                            new Date(item.endTime) <= new Date(endTime)
                        );
                    }
                    return null;
                });
            }
        } else {
            newDataSource = tableData.filter((item) => {
                if (startTime && endTime) {
                    return (
                        item.grade === value &&
                        new Date(startTime) <= new Date(item.startTime) &&
                        new Date(item.endTime) <= new Date(endTime)
                    );
                }
                return item.grade === value;
            });
        }
        this.setState({
            grade: value,
            dataSource: newDataSource
        });
    };
    barClick = (seriesType:any) => {
        this.setState({
            seriesType
        });
    };
    dateChange = (date:any, dateArr:any) => {
        const { grade } = this.state;
        const newDataSource = tableData.filter((item) => {
            if (grade !== 'all') {
                return (
                    item.grade === grade &&
                    new Date(dateArr[0]) <= new Date(item.startTime) &&
                    new Date(item.endTime) <= new Date(dateArr[1])
                );
            }
            return (
                new Date(dateArr[0]) <= new Date(item.startTime) &&
                new Date(item.endTime) <= new Date(dateArr[1])
            );
        });
        this.setState({
            startTime: dateArr[0],
            endTime: dateArr[1],
            dataSource: newDataSource,
            eleNum: window.location.search.split('?')
        });
    };
    getCharts = () => {
        const { seriesType } = this.state;
        if (seriesType === 'bar') {
            return <PieComponent barClick={this.barClick} selectChange={this.selectChange} />;
        }
        return <BarComponent barClick={this.barClick} />;
    };
    render() {
        const { grade } = this.state;
        // @ts-ignore
        return (
            <div className={'fault-main'}>
                <Row className={'fault-view'}>
                    <Col span={14}>
                        <div className={'panel chart'}>
                            <div className={'inner'}>
                                <CommonChart option={ganttData.option} height={'16.2rem'} />
                            </div>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div className={'panel chart'}>
                            <div className={'inner'}>{this.getCharts()}</div>
                        </div>
                    </Col>
                </Row>
                <div className={'panel common-table-view'}>
                    <div className={'inner'}>
                        <Row className={'header'}>
                            <Col flex={'300px'}>
                                <Row>
                                    <Col flex={'100px'}>
                                        <span className={'label'}>故障等级：</span>
                                    </Col>
                                    <Col flex={'auto'}>
                                        <div className={'control'}>
                                            <Select
                                                value={grade}
                                                style={{ width: 120 }}
                                                onChange={this.selectChange}
                                            >
                                                <Option value={'all'} key={0}>
                                                    all
                                                </Option>
                                                {gradeArr.map((item, index) => {
                                                    return (
                                                        <Option value={item} key={index + 1}>
                                                            {item}
                                                        </Option>
                                                    );
                                                })}
                                            </Select>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col flex={'auto'}>
                                <Row>
                                    <Col flex={'100px'}>
                                        <span className={'label'}>时间区间：</span>
                                    </Col>
                                    <Col flex={'auto'}>
                                        <div className={'control'}>
                                            <RangePicker onChange={this.dateChange} />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <TableComponent {...this.state} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Falut;
