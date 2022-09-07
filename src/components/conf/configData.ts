import routemap from '../conf/routemap';

const optionArr:any[] = [];
const filterData = (dataNav:any) => {
    dataNav.forEach((item:any, index:any) => {
        if (item.machineEleArr?.length > 0) {
            filterData(item.machineEleArr);
        } else {
            optionArr.push(item);
        }
    });
};

const getOptionData = () => {
    const { menuArr } = routemap;
    const dataNav = menuArr.filter((item) => {
        return item.key === 'info';
    })[0]?.childNav;
    filterData(dataNav);
};
getOptionData();

export default {
    optionArr
};
