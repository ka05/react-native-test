import React from 'react'
import reactDom from 'react-dom'
import { connect } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';

import TBToolItem from './TBToolItem/TBToolItem';

interface Props {
  options: object;
  router:any;
  navigationTitle:string;
}

interface State {}

const NavControllerContainer = connect(state => ({
  navigationTitle:state.navigationReducer.title,
  navigationLeftTBOptions:state.navigationReducer.leftTBOptions,
  navigationRightTBOptions:state.navigationReducer.rightTBOptions,
}), {
})(
  class NavController extends React.Component<Props, State> {
    componentDidMount() {}
    render() {
      const options = handleDefaultOptions(this.props.options)
      const { Router } = this.props.router

      const buildToolItem = (item) => {
        return (
          <TBToolItem
            key={item.id}
            item={item}>
          </TBToolItem>
        )
      }

      return (
        <Router>
          <View style={styles.container}>
            <View style={styles.leftPanel}>
              {
                options.leftTBOptions.map(buildToolItem)
              }
            </View>
            <Text style={styles.titleText}>{this.props.navigationTitle}</Text>
            <View style={styles.rightPanel}>
              {
                options.rightTBOptions.map(buildToolItem)
              }
            </View>
          </View>
        </Router>
      )
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    display:'flex',
    width: '100%',
    backgroundColor:'#3D3D3D',
    padding:10,
    paddingTop:50,
  },
  leftPanel:{
    flex:1,
    flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  rightPanel:{
    flex:1,
    flexDirection:'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  titleText:{
    flex:1,
    color:'#fff',
    textAlign:'center',
    fontSize: 18,
    padding:5,
  }
});

function handleDefaultOptions(options){
  if(options == null) options = {}
  if(options.leftTBOptions == null) options.leftTBOptions = {}
  if(options.rightTBOptions == null) options.rightTBOptions = {}

  return options
}

export default NavControllerContainer