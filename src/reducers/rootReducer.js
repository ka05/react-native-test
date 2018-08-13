import { combineReducers } from 'redux';
import overviewReducer from '../modules/TabViews/overview/overview.reducer';
import visitorsReducer from '../modules/TabViews/visitors/visitors.reducer';
import eventsReducer from '../modules/TabViews/events/events.reducer';

const rootReducer = combineReducers({
  overviewReducer,
  visitorsReducer,
  eventsReducer,
});

export default rootReducer;
