/* eslint-disable max-nested-callbacks */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRequest } from 'ahooks';
import 'moment/locale/zh-cn';
import moment from 'moment';
import * as EChart from 'echarts';
import { option } from './config';
import { getMeters } from '@/phm/service/filter';
import { getRelatedMeterData } from '@/phm/service/forecast';
function HealthyChart({ data, title, onDataUpdate, relatedParams }:any) {
    const echartContainerRef:any = useRef(null);
    const [toTime, setToTime] = useState<unknown>();
    const { data: meterData } = useRequest(getMeters, {
        cacheKey: 'getAllMeterData'
    });

    const handleGetRelatedDataByTotime = useCallback(
        (ts:any) => {
            if (!relatedParams.from) return;
            getRelatedMeterData({
                ...relatedParams,
                ts
            }).then((res: any) => {
                const resList = Object.entries(res);
                if (!resList.length) return;
                const targetRes = resList.map((relatedKeyVal) => {
                    let item = {};
                    (meterData as any).forEach((meter:any) => {
                        if (meter.meterCode === relatedKeyVal[0]) {
                            item = {
                                [meter.meterName]: relatedKeyVal[1]
                            };
                        }
                    });
                    return item;
                });
                onDataUpdate('relatedMeters', targetRes);
            });
        },
        [toTime, relatedParams]
    );

    useEffect(() => {
        if (!data.length) return;
        const curCharts = EChart.init(echartContainerRef.current);
        curCharts.setOption({
            ...option,
            legend: {
                ...option.legend,
                data: [title + '健康度']
            },
            xAxis: {
                ...option.xAxis,
                data: data.map((item:any) => moment(item.ts).format('YYYY-MM-DD HH:mm'))
            },
            series: {
                ...option.series,
                name: title + '健康度',
                data: data.map((item:any) => item.val)
            }
        });
        curCharts.on('click', 'series.line', function (params) {
            const ts = new Date(params.name).getTime();
            console.log(29, relatedParams, ts);
            if (ts === toTime) return;
            setToTime(ts);
            handleGetRelatedDataByTotime(ts);
        });
    }, [data, title, relatedParams]);

    return (
        <div className="panel" style={{ height: 458 }}>
            <div className="z-chart-container inner">
                <h2 className="z-chart-title"> {title}健康度 </h2>
                {data?.length ? (
                    <div style={{ height: 420 }} ref={echartContainerRef} />
                ) : (
                    <div style={{ height: 420 }} className="flex-horizontal">
                        暂无数据
                    </div>
                )}
            </div>
        </div>
    );
}

export default HealthyChart;
