import { handleActions } from 'redux-actions';
import actionTypes from '../action/actionType';
import commonData from '@/phm/components/conf/configData';
import routemap from '@/phm/components/conf/routemap';
import { detailData2 } from '@/phm/components/info/configData';

const initialState = {
    current: ''
};

const getCurrent:any = () => {
    const { optionArr } = commonData;
    const { location } = window;
    const { pathname, search, hash } = location;
    const { menuArr } = routemap;
    const pageKey = pathname.split('/app/')[1];
    let currentKey = pageKey;
    let eleKey = '';
    let systemKey = '';
    let systemName = '';
    let eleName = '';
    let infoData:any;
    let machineEleArr = null;
    let varType = null;
    let varArr = null;
    const systemArr:any[] = [];
    if (search === '' && hash === '')
        return {
            currentKey,
            eleName,
            systemKey,
            systemName,
            systemArr,
            machineEleArr,
            eleKey,
            varType
        };
    varArr = detailData2
        .filter((item) => {
            return item.name === 'default';
        })[0]
        .data?.map((item) => {
            return { ...item, data: { type: 'varKey' } };
        });
        if(menuArr[0].childNav){
            for (const item of menuArr[0].childNav) {
                const { key, title } = item;
                systemArr.push({ key, title, data: { type: 'systemKey' } });
            }
        }
    let schField = search;
    if (search === '' && hash !== '') {
        schField = hash;
    }
    if (schField.indexOf('#') > -1) {
        currentKey = schField.split('#')[1].split('?')[0];
    }
    if (schField.indexOf('?') < 0)
        return {
            currentKey,
            eleName,
            systemKey,
            systemName,
            systemArr,
            machineEleArr,
            eleKey,
            varType
        };
    const searchString = schField.split('?')[1];
    if (schField.indexOf('&&') > -1) {
        const searchArr = schField.split('?')[1].split('&&');
        for (const item of searchArr) {
            if (item.indexOf('systemKey') > -1) {
                systemKey = item.split('=')[1];
            } else if (item.indexOf('eleKey') > -1) {
                eleKey = item.split('=')[1];
            } else if (item.indexOf('varType') > -1) {
                varType = item.split('=')[1];
            }
        }
        eleName = optionArr.filter((item) => {
            return eleKey === item.key;
        })[0]?.title;
    } else {
        systemKey = searchString.split('=')[1];
    }

    infoData = menuArr[0]?.childNav?.filter((item) => {
        return systemKey === item.key;
    });
    systemName = infoData?infoData[0]?.title:'';
    if (infoData?.length > 0) {
        machineEleArr = infoData[0]?.machineEleArr.map((item:any) => {
            return { ...item, data: { type: 'eleKey' } };
        });
    }
    if (pageKey === 'info') {
        currentKey = systemKey;
    }

    return {
        currentKey,
        eleName,
        systemKey,
        systemName,
        systemArr,
        machineEleArr,
        eleKey,
        varType,
        varArr
    };
};
export default handleActions({
    [actionTypes.GET_URL](state, action) {
        return getCurrent();
    }},initialState
);
