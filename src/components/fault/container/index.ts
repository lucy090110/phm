import { connect } from 'react-redux';
import Falut from '../index';
const mapStateToProps = (state:any) => {
    const { navMenuReducer } = state;
    const { eleName } = navMenuReducer;
    return {
        eleName
    };
};
export default connect(mapStateToProps, null)(Falut);
