import React from 'react';
import './css/index.less';
import TableComponent from './tableComponent';
const Maintenance: React.FC = () => {
    return (
        <div className={'maintenance-main'}>
            <div className={'panel common-table-view'}>
                <div className={'inner'}>
                    <TableComponent />
                </div>
            </div>
        </div>
    );
};
export default Maintenance;
