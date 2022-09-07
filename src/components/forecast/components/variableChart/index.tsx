import RelatedChildChart from './childChart';
function VariableChart({ data }:any) {
    return (
        <div className="panel" style={{ height: 548 }}>
            <div className="z-chart-container inner">
                <h2 className="z-chart-title">相关信号</h2>

                {data.length ? (
                    data.map((item:any) => (
                        <RelatedChildChart
                            key={Object.keys(item)[0]}
                            title={Object.keys(item)[0]}
                            data={Object.values(item)[0]}
                        />
                    ))
                ) : (
                    <div style={{ height: 548 }} className="flex-horizontal">
                        暂无数据
                    </div>
                )}
            </div>
        </div>
    );
}

export default VariableChart;
