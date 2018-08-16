import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.navigation, action) {
	switch (action.type) {

		case types.UPDATE_NAV_TITLE:
			return {
				...state,
				title: action.title
			};

		default:
			return state;
	}
}
