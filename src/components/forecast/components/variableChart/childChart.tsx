import { useEffect, useRef } from 'react';
import * as EChart from 'echarts';
import { option } from './config2';
import moment from 'moment';
function RelatedChildChart({ data, title }:any) {
    const containerRef1:any = useRef(null);
    useEffect(() => {
        // if (!data?.length) return;
        const curCharts1 = EChart.init(containerRef1.current, 'walden');
        curCharts1.setOption({
            ...option,
            title: {
                ...option.title,
                text: title
            },
            xAxis: {
                ...option.xAxis,
                data: data[0].map((target:any) => moment(target.ts).format('YYYY年MM月DD日 HH时mm分'))
            },
            series: data.map((item:any, key:any) => ({
                ...option.series[key],
                data: item.map((target:any) => target?.val?.toFixed(2))
            }))
        });
    }, [data]);

    return <div style={{ height: 160 }} ref={containerRef1} />;
}

export default RelatedChildChart;
