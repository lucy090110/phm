import { connect } from 'react-redux';
import Monitor from '../index';
const mapStateToProps = (state:any) => {
    const { navMenuReducer } = state;
    const { currentKey, systemKey, machineEleArr } = navMenuReducer;
    return {
        currentKey,
        systemKey,
        machineEleArr
    };
};
export default connect(mapStateToProps, null)(Monitor);
