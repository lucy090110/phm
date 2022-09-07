import request from '../utils/request';
// 测点数据类别 0: 原始数据
const HEALTH_PREDICTION = 101;
const FAULT_PREDICTION = 103;
export const getHealthData2 = (data) => {
    const { deviceCode, meterCode, from, to } = data;
    return request({
        url: `/devices/${deviceCode}/points/${HEALTH_PREDICTION}/latest`,
        method: 'post',
        body: {
            from: from,
            to: to
        }
        // params
    });
};
export const getHealthData = (data) => {
    const { deviceCode, from, to } = data;
    return request({
        url: `/devices/${deviceCode}/points/${HEALTH_PREDICTION}/meters/default`,
        method: 'get',
        params: {
            from: from,
            to: to,
            interval: 30 * 60 * 1000 // 30min * 60s
        }
        // params
    });
};

export const getFaultPredictionData = (data) => {
    const { deviceCode, from, to } = data;
    return request({
        url: `/devices/${deviceCode}/points/${FAULT_PREDICTION}/meters/default`,
        method: 'get',
        params: {
            from: from,
            to: to,
            interval: 30 * 60 * 1000 // 30min * 60s
        }
        // params
    });
};

export const getFaultPredictionLatestData = (data) => {
    const { deviceCode } = data;
    return request({
        url: `/devices/${deviceCode}/points/${FAULT_PREDICTION}/latest`,
        method: 'post'
    });
};

export const getStatMeterData = (data) => {
    const { deviceCode, from, to } = data;
    return request({
        url: `/devices/${deviceCode}/corr_meters/stat`,
        method: 'get',
        params: {
            from: from,
            to: to
        }
    });
};

export const getRelatedMeterData = (data) => {
    const { deviceCode, from, to, ts } = data;
    return request({
        url: `/devices/${deviceCode}/corr_meters/time_series`,
        method: 'get',
        params: {
            from,
            to,
            ts
        }
    });
};
