import * as types from '../../../constants/actionTypes';
import initialState from '../../../reducers/initialState';

export default function (state = initialState.overviewContent, action) {
	switch (action.type) {

		case types.RETRIEVE_OVERVIEW_CONTENT_SUCCESS:
			return {
				...state,
				list: action.list
			};

		default:
			return state;
	}
}
