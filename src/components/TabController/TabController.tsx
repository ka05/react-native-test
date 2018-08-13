import React from 'react'
import reactDom from 'react-dom'
import { StyleSheet, Text, View } from 'react-native';

import {TabLocation} from './TabControllerConstants'

import TabItem from './TabItem/TabItem'

interface TabItem{
  url:string;
  label:string;
  icon:string;
  component:any;
}

interface Props {
  options: object;
  router:any;
  tabs:Array<TabItem>;
}

interface State {

}

class TabController extends React.Component<Props, State> {
  componentDidMount() {}
  render() {
    const options = handleDefaultOptions(this.props.options)
    console.log(options);

    const tabs = this.props.tabs
    const { Router, Route } = this.props.router

    const tabbar = (
      <View style={styles.navigationbar}>
        {
          tabs.map(tab => {
            return (
              <TabItem 
                key={tab.label}
                router={this.props.router}
                {...tab}>
              </TabItem>
            )
          })
        }
      </View>
    )

    const tabViews = (
      <View style={styles.viewContainer}>
        {
          tabs.map(tab => {
            return (
            <Route 
              exact 
              path={tab.url} 
              key={tab.label}
              component={tab.component}/>
            )
          })
        }
      </View>
    )

    const tabControllerContentItem1 = (options.location == TabLocation.TOP) ? tabbar : tabViews
    const tabControllerContentItem2 = (options.location == TabLocation.TOP) ? tabViews : tabbar

    return (
      <Router>
        <View style={styles.container}>
          {tabControllerContentItem1}
          {tabControllerContentItem2}
        </View>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50,
    paddingBottom:50,
  },
  navigationbar: {
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewContainer: {
    width: '100%',
    flex: 1,
  }
});

function handleDefaultOptions(options){
  if(options == null) options = {}
  if(options.location == null) options.location = TabLocation.TOP

  return options
}

export default TabController
