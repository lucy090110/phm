import React from 'react';
import { Carousel } from 'antd';
import FaultChart from '../../forecast/components/faultChart';
import TemperatureChart from '../../forecast/components/temperatureChart';
import DegenerateChart from '../../forecast/components/degenerationChart';
import LifePrediction from '../../forecast/components/lifePrediction';

const CycleForcecast: React.FC = () => {
    return (
        <div>
            <Carousel autoplay>
                {/*<FaultChart key={0} height={220} />*/}
                {/*<TemperatureChart key={1} height={220} />*/}
                <DegenerateChart key={2} height={190} />
                <LifePrediction key={3} height={190} />
            </Carousel>
        </div>
    );
};
export default CycleForcecast;
