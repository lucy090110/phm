import { connect } from 'react-redux';
import Maintenance from '../index';
const mapStateToProps = (state:any) => {
    const { navMenuReducer } = state;
    const { currentKey, systemKey, machineEleArr } = navMenuReducer;
    return {
        currentKey,
        systemKey,
        machineEleArr
    };
};
export default connect(mapStateToProps, null)(Maintenance);
