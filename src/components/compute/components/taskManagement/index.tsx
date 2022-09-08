import React from 'react';
import '@/phm/components/compute/css/index.less';
import FilterBar from '@/phm/components/compute/components/taskManagement/components/filterBar';
import TableComponent from '@/phm/components/compute/components/taskManagement/components/tableComponent';

const TaskManagement = () => {
    return (
        <>
            <div className={'panel compute-task'}>
                <div className={'inner'}>
                    <FilterBar />
                    <TableComponent />
                </div>
            </div>
        </>
    );
};

export default TaskManagement;
