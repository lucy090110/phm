//
import moment from 'moment';
moment.locale('zh-CN');
function ForecastDescription({ data }:any) {
    return (
        <div className="panel z-description-container" style={{ height: 200 }}>
            <div className="inner">
                <p> </p>
                <p> </p>
                <p style={{ fontSize: 24 }}>
                    距离下次故障时间：
                    {data?.ts && (
                        <span style={{ color: 'yellow' }}>
                            {Math.floor(
                                ((data.ts - new Date().getTime()) / (1000 * 60 * 60)) * 100
                            ) / 100}{' '}
                            小时
                        </span>
                    )}
                </p>
                <p> </p>
                <p style={{ fontSize: 24 }}>
                    下次故障发生时间：
                    {data?.ts && (
                        <span style={{ color: 'yellow' }}>
                            {moment(data.ts).format('YYYY年MM月DD日 HH时mm分')}
                        </span>
                    )}
                </p>
                {/* <p>预测发生故障部件：气压阀</p>
                <p>建议维护时间：2021年12月12日</p>
                <p>预计可节约成本： 20万元</p> */}
            </div>
        </div>
    );
}

export default ForecastDescription;
