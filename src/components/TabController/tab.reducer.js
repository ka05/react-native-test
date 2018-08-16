import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.tabController, action) {
	switch (action.type) {

		case types.UPDATE_ACTIVE_TAB:
			return {
				...state,
				activeTab: action.activeTab
			};

		default:
			return state;
	}
}
