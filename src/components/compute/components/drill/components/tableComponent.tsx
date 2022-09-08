import React from 'react';
import { Table } from 'antd';

const TableComponent = (props:any) => {
    const { columns, dataSource, scroll } = props;
    return (
        <>
            <Table columns={columns} dataSource={dataSource} pagination={false} scroll={scroll} />
        </>
    );
};

export default TableComponent;
