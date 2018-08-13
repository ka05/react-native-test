import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

interface Props {
  label:string;
  url:string;
  icon:any;
  router:any;
}

const LinkedCell: React.SFC<Props> = (props) => {
  const { Link } = props.router
  return (
    <View style={styles.container}>
      <Link to={props.url} style={styles.tabLink}>
        <View style={styles.tabItem}>
          <Image style={styles.tabIcon} source={props.icon}></Image>
          <Text style={styles.tabText}>{props.label}</Text>
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
  }
})

export default LinkedCell
