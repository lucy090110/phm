import { connect } from 'react-redux';
import Compute from '@/phm/components/compute/index';
const mapStateToProps = (state:any) => {
    const { navMenuReducer } = state;
    const { currentKey } = navMenuReducer;
    return {
        currentKey
    };
};
export default connect(mapStateToProps, null)(Compute);
