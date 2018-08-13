import * as types from '../../../constants/actionTypes';
import initialState from '../../../reducers/initialState';

export default function (state = initialState.eventsContent, action) {
	switch (action.type) {

    case types.RETRIEVE_EVENTS_CONTENT_SUCCESS:
      return {
        ...state,
        list: action.list
      };

		default:
			return state;
	}
}
