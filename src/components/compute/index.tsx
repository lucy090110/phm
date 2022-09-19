import React, { useEffect } from 'react';
import Drill from '@/phm/components/compute/components/drill';
import TaskManagement from '@/phm/components/compute/components/taskManagement';

import './css/index.less';

const Compute = (props:any) => {
    const { currentKey } = props;
    useEffect(() => {}, [currentKey]);
    const getContent = () => {
        let content;
        switch (currentKey) {
            case 'drill':
                content = <Drill {...props} />;
                break;
            case 'taskManagement':
                content = <TaskManagement {...props} />;
                break;
            default:
                break;
        }
        return content;
    };
    return <>{getContent()}</>;
};

export default Compute;
