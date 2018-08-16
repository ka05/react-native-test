import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { withRouter } from 'react-router-native'

interface RouterLocation{
  hash:string;
  key:string;
  pathname:string;
  search:string;
  state:string;
}

interface Props {
  label:string;
  url:string;
  icon:any;
  router:any;
  active:boolean;

  // router
  match:object;
  location:RouterLocation;
  history:object;
}

const TabItemView: React.SFC<Props> = (props) => {
  const { Link } = props.router

  var tabIconStyle = styles.tabIcon
  var tabTextStyle = styles.tabText

  if(props.location.pathname == props.url){
    tabTextStyle = styles.tabTextActive
    tabIconStyle = styles.tabIconActive
  }

  return (
    <View style={styles.container}>
      <Link 
        to={props.url} 
        style={styles.tabLink} 
        onlyActiveOnIndex={true}
        activeStyle={styles.tabTextActive}>
        <View style={styles.tabItem}>
          <Image style={tabIconStyle} source={props.icon}></Image>
          <Text style={tabTextStyle}>{props.label}</Text>
        </View>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor:'#3d3d3d',
    flexDirection:'column',
    flex:1,
  },
  tabLink:{
    flexGrow:1,
  },
  tabItem:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabText:{
    color:'#8E8E93',
    padding:5,
    fontSize: 10,
    textAlign: 'center'
  },
  tabIcon:{
    marginTop: 10,
    height:25,
    width:25,
    resizeMode: 'contain'
  },
  tabIconActive:{
    tintColor: 'orange',
    marginTop: 10,
    height:25,
    width:25,
    resizeMode: 'contain'
  },
  tabTextActive:{ 
    color: 'orange',
    padding:5,
    fontSize: 10,
    textAlign: 'center'
  }
})

export default withRouter(TabItemView)
