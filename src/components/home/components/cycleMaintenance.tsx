import React from 'react';
import Maintenance from '../../maintenance/tableComponent';

const CycleMaintenance: React.FC = () => {
    return (
        <div className={'info-main common-table-view'}>
            <Maintenance cycle height={85} />
        </div>
    );
};
export default CycleMaintenance;
