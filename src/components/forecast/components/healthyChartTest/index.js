import React, { useEffect, useRef, useState } from "react"
// import { DatePicker } from "antd"
import 'moment/locale/zh-cn';
// import locale from 'antd/es/date-picker/locale/zh_CN';

import * as EChart from 'echarts'
import { option } from './config'
function HealthyChartTest() {

    // const [dates, setDates] = useState([]);
    // const [hackValue, setHackValue] = useState();
    // const [value, setValue] = useState();

    const echartContainerRef = useRef(null)
    useEffect(() => {
        const curCharts= EChart.init(echartContainerRef.current)
        curCharts.setOption(option);
    }, [])

    // const disabledDate = current => {
    //     if (!dates || dates.length === 0) {
    //       return false;
    //     }
    //     const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    //     const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    //     return tooEarly || tooLate;
    //   };

    //   const onOpenChange = open => {
    //     if (open) {
    //       setHackValue([]);
    //       setDates([]);
    //     } else {
    //       setHackValue(undefined);
    //     }
    //   };
    return <div className="panel" style={{height: 458}}>
    <div className="z-chart-container inner">
        <h2 className="z-chart-title">
            健康度
            {/* <DatePicker.RangePicker
                locale={locale}
                showTime={{ format: 'HH' }}
                format="YYYY-MM-DD HH:00"
                value={hackValue || value}
                disabledDate={disabledDate}
                onCalendarChange={val => setDates(val)}
                onOpenChange={onOpenChange}
                onChange={(dates, dateStrings)=>{
                    console.log(51, dates, dateStrings);
                    setValue(dates)
                }}
            /> */}
        </h2>
        <div style={{height: 420 }} ref={echartContainerRef}>
        </div>
    </div>
</div>
}

export default HealthyChartTest