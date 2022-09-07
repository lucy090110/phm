import React from 'react';
import { Row, Col, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import MarqueeComponent from '@/phm/components/common/marqueeComponent';
import MachineComponent from '@/phm/components/common/machineComponent';
import GaugeBox from '@/phm/components/common/gaugebox';
import { detailData, machineEleDetail2 } from '@/phm/components/info/configData';
import CommonChart from '@/phm/components/common/commonChart';
import { ganttData } from '@/phm/components/conf/chartsData/ganttData';
import '@/phm/components/info/css/index.less';
import { toThousands } from '@/phm/framework/utils';
const RangePicker: any = DatePicker.RangePicker;

const Info: React.FC<any> = (props) => {
    const navigate = useNavigate();
    const linkPage = (item:any) => {
        const { systemKey, eleKey } = props;
        let path = `/app/monitor?orgCode=${`JD01`}&plCode=${`PM301`}&groupCode=${102}&subgroupCode=${10101}&deviceCode=${1010101}`;
        if (eleKey === systemKey) {
            path = `/app/monitor?orgCode=${`JD01`}&plCode=${`PM301`}&groupCode=${101}&subgroupCode=${10101}&deviceCode=${1010101}`;
        }
        navigate(path, { replace: true });
    };
    const getDetailData2 = () => {
        const { varArr } = props;
        return varArr?.map((item:any, index:any) => {
            const labelEle = <div className="text">{item.title}:</div>;
            return (
                <Row
                    className={'link-group'}
                    key={index}
                    onClick={() => {
                        linkPage(item);
                    }}
                >
                    <Col flex={'155px'}>{labelEle}</Col>
                    <Col flex={'auto'}>
                        {item.value && (
                            <div className={'details'}>
                                <span>{Number(item.value).toFixed(2)}</span>
                                <i className={'iconfont icon-iconmore'} />
                            </div>
                        )}
                    </Col>
                </Row>
            );
        });
    };

    const dateChange = (date:any, dateArr:any) => {
        const a = date;
        const b = dateArr;
    };
    const getFilterChild = () => {
        return (
            <Row>
                <Col>
                    <span className={'label'}>日期选择：</span>
                </Col>
                <Col>
                    <div className={'controls'}>
                        <RangePicker onChange={dateChange} placeholder={['开始时间', '结束时间']} />
                    </div>
                </Col>
            </Row>
        );
    };
    return (
        <div className={'info-main'}>
            <Row>
                <Col flex={'auto'}>
                    <div className={'panel chart'}>
                        <div className={'inner'}>
                            <GaugeBox {...props} entrance={'info'} />
                        </div>
                    </div>

                    <MarqueeComponent hasCycle={false} />
                </Col>
                <Col flex={'1030px'}>
                    <div className={'panel machine'}>
                        <div className={'inner'}>
                            <MachineComponent
                                {...props}
                                viewStyle={{ height: '23rem' }}
                                imgStyle={{
                                    width: '765px',
                                    height: '328px',
                                    backgroundSize: '765px auto'
                                }}
                                entrance={'info'}
                            />
                        </div>
                    </div>
                    <div className={'panel gantt'}>
                        <div className={'inner'}>
                            <div className="title">健康状态演化图</div>
                            <CommonChart
                                option={ganttData.option}
                                filterBarChild={getFilterChild()}
                                height={'17.5rem'}
                            />
                        </div>
                    </div>
                </Col>
                <Col flex={'auto'}>
                    <div className={'panel operation'}>
                        <div className={'inner'}>
                            {/* <div className="title">运行情况</div> */}
                            <div className="title">设备信息</div>
                            {machineEleDetail2.map((item, index) => {
                                if (index > 3) return null;
                                return (
                                    <Row key={index}>
                                        <Col flex={'100px'}>
                                            <div className={'label'}>{item.label}</div>
                                        </Col>

                                        <Col flex={'auto'}>
                                            <div className={'value'}>
                                                {Math.floor(Math.random() * 1000)}
                                            </div>
                                        </Col>
                                    </Row>
                                );
                            })}
                        </div>
                    </div>

                    <div className={'panel cost'}>
                        <div className={'inner'}>
                            <div className={'title'}>累计节省成本</div>
                            <div className={'value'}>{toThousands(4848382)}</div>
                        </div>
                    </div>

                    <div className={'panel variate'}>
                        <div className={'inner'}>
                            <div className="title">监控信号</div>
                            <div>{getDetailData2()}</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Info;
