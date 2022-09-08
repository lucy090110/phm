import React from 'react';
import { Row, Col, Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';
import { machineEleDetail1, machineEleDetail2, detailData } from '../info/configData';

import routemap from '../conf/routemap';

const MachineImg = (props:any) => {
    const { imgStyle, systemKey, systemName, dataArr, entrance, eleKey, title } = props;
    const { width } = imgStyle;
    const linkStyle: any = { width, cursor: 'pointer' };
    return (
        <div>
            <div
                className={'system-title'}
                style={linkStyle}
                onClick={() => {
                    props.machineEleChange({
                        eleKey: systemKey,
                        eleName: systemName,
                        systemKey
                    });
                }}
            >
                {title}
            </div>
            <div className={`img-box ${systemKey}`} style={imgStyle}>
                <div className={'mark-box'}>
                    {dataArr.map((item:any, index:any) => {
                        let markClass = '';
                        if ((entrance === 'info' && eleKey === systemKey) || eleKey === '') {
                            markClass = 'active';
                        }
                        const style = {
                            top: item.position[entrance][0],
                            left: item.position[entrance][1]
                        };
                        if (eleKey && eleKey === item.key) {
                            markClass = 'active';
                        }
                        return (
                            <div
                                className={`machine-mark ${markClass}`}
                                style={style}
                                key={index}
                                onClick={() => {
                                    props.machineEleChange({
                                        eleKey: item.key,
                                        eleName: item.title,
                                        systemKey
                                    });
                                }}
                            >
                                <div className="dot" />
                                <div className="pulse" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const MachineComponent: React.FC<any> = (props: any) => {
    const navigate = useNavigate();
    const {
        viewStyle,
        imgStyle,
        entrance,
        systemKey,
        systemName,
        eleName,
        machineEleArr,
        eleKey
    } = props;
    const machineEleChange = (eleObj:any) => {
        const { eleKey, systemKey } = eleObj;

        let path1 = `/app/info?systemKey=${systemKey}&&eleKey=${eleKey}`;
        if (eleKey === systemKey) {
            path1 = `/app/info?systemKey=${systemKey}`;
        }
        let data: any = { state: { systemKey, eleKey } };
        if (entrance === 'info') {
            data = { ...data, replace: true };
        }

        navigate(path1, data);
    };
    const getContent = () => {
        let dotsArr = machineEleDetail1;
        let nameValue = eleName;
        if (systemKey === eleKey || eleKey === '') {
            dotsArr = machineEleDetail2;
            nameValue = systemName;
        }
        const { menuArr } = routemap;
        let content = null;
        switch (entrance) {
            case 'info':
                content = (
                    <div className={'machine-view'} style={viewStyle}>
                        <MachineImg
                            imgStyle={imgStyle}
                            systemKey={systemKey}
                            systemName={systemName}
                            title={systemName}
                            dataArr={machineEleArr}
                            eleName={eleName}
                            entrance={entrance}
                            machineEleChange={machineEleChange}
                            eleKey={eleKey}
                        />
                        <div
                            className={'detail-box'}
                            style={{ width: 300, position: 'absolute', right: 0 }}
                        >
                            <div className="title">运行情况</div>

                            {detailData.map((item, index) => {
                                // let value: any = Math.floor(Math.random() * 1000);
                                // if (item.type === 'name') {
                                //     value = nameValue;
                                // }
                                // if (item.type === 'line') {
                                //     value = '金隆浆';
                                // }
                                return (
                                    <Row key={index}>
                                        <Col flex={'120px'}>
                                            <div className={'label'}>{item.label}：</div>
                                        </Col>
                                        <Col>
                                            <div className={'value'}>{item.value}</div>
                                        </Col>
                                    </Row>
                                );
                            })}
                        </div>
                    </div>
                );
                break;
            case 'home':
                content = (
                    <div className={'machine-view'} style={viewStyle}>
                        <Carousel autoplay>
                            {menuArr[0].childNav?.map((item: any) => {
                                return (
                                    <MachineImg
                                        key={item.key}
                                        imgStyle={imgStyle}
                                        systemKey={item.key}
                                        systemName={item.title}
                                        dataArr={item.machineEleArr}
                                        title={item.title}
                                        eleName={eleName}
                                        entrance={entrance}
                                        machineEleChange={machineEleChange}
                                    />
                                );
                            })}
                        </Carousel>
                    </div>
                );
                break;
            default:
                break;
        }
        return content;
    };
    return <>{getContent()}</>;
};

export default MachineComponent;
