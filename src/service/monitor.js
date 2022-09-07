import request from '../utils/request';
export const getMonitorData = (data) => {
    const { deviceCode, meterCode, from, to } = data;
    return request({
        url: `/devices/${deviceCode}/points/${0}/meters/${meterCode}`,
        method: 'get',
        params: {
            from: from,
            to: to,
            interval: 32000000
        }
        // params
    });
};

export const getPredictMonitorData = (data) => {
    const { deviceCode, meterCode, from, to } = data;
    return request({
        url: `/devices/${deviceCode}/points/${102}/meters/${meterCode}`,
        method: 'get',
        params: {
            from: from,
            to: to,
            interval: 32000000
        }
        // params
    });
};
