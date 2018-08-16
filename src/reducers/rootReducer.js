import { combineReducers } from 'redux';
import overviewReducer from '../modules/TabViews/overview/overview.reducer';
import visitorsReducer from '../modules/TabViews/visitors/visitors.reducer';
import eventsReducer from '../modules/TabViews/events/events.reducer';
import navigationReducer from '../components/NavController/navigation.reducer';
import tabControllerReducer from '../components/TabController/tab.reducer';

const rootReducer = combineReducers({
  overviewReducer,
  visitorsReducer,
  eventsReducer,
  navigationReducer,
  tabControllerReducer,
});

export default rootReducer;
