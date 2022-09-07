import { createAction } from 'redux-actions';
import actionTypes from './actionType';
const actionCreator = {
    getUrl: createAction(actionTypes.GET_URL)
};
export default actionCreator;
