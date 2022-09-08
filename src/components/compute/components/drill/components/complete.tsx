import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Result({ handleStepChange, type }:any) {
    useEffect(() => {
        console.log('navigate');
    }, []);
    return (
        <div className="progress-container" style={{ fontSize: 16 }}>
            任务提交完成...
            <span>
                请前往<Link to={`/app/compute#taskManagement?systemKey=`}>任务管理</Link>查看
            </span>
        </div>
    );
}

export default Result;
