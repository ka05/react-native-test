import React from 'react';
import RouterPackage from './router'

import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import TabController from './components/TabController/TabController'
import {TabLocation} from './components/TabController/TabControllerConstants'

import VisitorsTabView from './modules/TabViews/visitors/VisitorsTabView'
import OverviewTabView from './modules/TabViews/overview/OverviewTabView'
import EventsTabView from './modules/TabViews/events/EventsTabView'
import VehiclesTabView from './modules/TabViews/vehicles/VehiclesTabView'
import ProfileTabView from './modules/TabViews/profile/ProfileTabView'


import configureStore from './store/configureStore';
import NavController from './components/NavController/NavController';
const store = configureStore();

// NOTE: to open debug menu on IOS ( shake or press Ctrl+Cmd+Z )

class App extends React.Component<void> {
  componentDidMount() {}
  
  render(){
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

    const navOptions = {
      leftTBOptions:[
        {
          id:0,
          label:'Test',
          handler:()=>{
            console.log('Test button tapped')
          }
        }
      ],
      rightTBOptions:[
        {
          id:1,
          label:'Save',
          handler:()=>{
            console.log('Save button tapped')
          }
        }
      ]
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavController
            router={RouterPackage}
            options={navOptions}>
          </NavController>
          <TabController
            options={tabOptions}
            router={RouterPackage}
            tabs={tabs}>
          </TabController>
        </View>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;