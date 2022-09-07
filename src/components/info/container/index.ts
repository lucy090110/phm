import { connect } from 'react-redux';
import Info from '../index';
const mapStateToProps = (state:any) => {
    const { navMenuReducer } = state;
    const { currentKey, systemKey, systemName, machineEleArr, eleName, eleKey, varArr } =
        navMenuReducer;
    return {
        currentKey,
        systemKey,
        systemName,
        machineEleArr,
        eleName,
        eleKey,
        varArr
    };
};
export default connect(mapStateToProps, null)(Info);
