import React from 'react';

const CycleEmergency: React.FC = () => {
    return (
        <div className={'emergency-main'}>
            <div className={'emergency-icon'}>
                <i className={`iconfont icon-warning`} />
            </div>
            <div className={`emergency-message`}>
                <span>牵引电机</span>出现s级故障
                <br />
                建议及时检测处理
                <br />
                已发送报警给William
                <br />
            </div>
        </div>
    );
};
export default CycleEmergency;
