import request from '@/phm/utils/request';

export const getEquipmentList = (params) => {
    return request({
        url: '/devices',
        method: 'get',
        params
    });
};

export const getMeters = (params) => {
    return request({
        url: '/meters',
        method: 'get',
        params
    });
};

export const getSystemList = (params) => {
    return request({
        url: '/system/list',
        method: 'get',
        params
    });
};

export const getChildSystemList = (params) => {
    return request({
        url: '/system/childList',
        method: 'get',
        params
    });
};

export const getSignalListByDevice = (deviceCode) => {
    return request({
        url: `/devices/${deviceCode}/list`,
        method: 'get'
    });
};
