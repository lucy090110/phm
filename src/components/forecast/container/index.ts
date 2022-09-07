import { connect } from 'react-redux';
import Prediction from '../index';
const mapStateToProps = (state:any) => {
    const { navMenuReducer } = state;
    const { eleName } = navMenuReducer;
    return {
        eleName
    };
};
export default connect(mapStateToProps, null)(Prediction);
