import React from 'react';
import RouterPackage from './router'

import { Provider } from 'react-redux';

import TabController from './components/TabController/TabController'
import {TabLocation} from './components/TabController/TabControllerConstants'

import VisitorsTabView from './modules/TabViews/visitors/VisitorsTabView'
import OverviewTabView from './modules/TabViews/overview/OverviewTabView'
import EventsTabView from './modules/TabViews/events/EventsTabView'
import VehiclesTabView from './modules/TabViews/vehicles/VehiclesTabView'
import ProfileTabView from './modules/TabViews/profile/ProfileTabView'


import configureStore from './store/configureStore';
const store = configureStore();

// NOTE: to open debug menu on IOS ( shake or press Ctrl+Cmd+Z )

const App: React.SFC<void> = () => {
  const tabs = [
    {
      url:'/',
      label:'Overview',
      component:OverviewTabView,
      icon:require('./assets/TabOverview.png'),
    },
    {
      url:'/visitors',
      label:'Visitors',
      component:VisitorsTabView,
      icon:require('./assets/TabVisitors.png'),
    },
    {
      url:'/events',
      label:'Events',
      component:EventsTabView,
      icon:require('./assets/TabEvents.png'),
    },
    {
      url:'/vehicles',
      label:'Vehicles',
      component:VehiclesTabView,
      icon:require('./assets/TabVehicles.png'),
    },
    {
      url:'/profile',
      label:'Profile',
      component:ProfileTabView,
      icon:require('./assets/TabProfile.png'),
    }
  ]

  const tabOptions = {
    location:TabLocation.BOTTOM
  }

  return (
    <Provider store={store}>
      <TabController
        options={tabOptions}
        router={RouterPackage}
        tabs={tabs}>
      </TabController>
    </Provider>
  )
}
export default App;