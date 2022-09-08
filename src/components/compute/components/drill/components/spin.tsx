import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined, CheckCircleOutlined } from '@ant-design/icons';

function MySpin({ isFinish }:any) {
    return (
        <div style={{ marginLeft: 6 }}>
            {isFinish ? (
                <CheckCircleOutlined
                    twoToneColor="#52c41a"
                    style={{ fontSize: 18, color: '#52c41a' }}
                />
            ) : (
                <Spin indicator={<LoadingOutlined style={{ fontSize: 18 }} spin />} />
            )}
        </div>
    );
}

export default MySpin;
