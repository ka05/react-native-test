import * as types from '../../../constants/actionTypes';
import initialState from '../../../reducers/initialState';

export default function (state = initialState.visitorsContent, action) {
	switch (action.type) {

    case types.RETRIEVE_VISITORS_CONTENT_SUCCESS:
      return {
        ...state,
        list: action.list
      };

		default:
			return state;
	}
}
