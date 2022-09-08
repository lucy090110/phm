import { connect } from 'react-redux';
import Home from '../index';
const mapStateToProps = (state:any) => {
    const { navMenuReducer } = state;
    const { currentKey, systemKey, eleKey, varType, varArr, machineEleArr, systemArr } =
        navMenuReducer;
    return {
        currentKey,
        systemKey,
        eleKey,
        varType,
        varArr,
        machineEleArr,
        systemArr
    };
};
function mapDispatchToProps(dispatch:any) {
    return {
        getCurrent: () => dispatch({ type: 'GET_URL' })
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
