import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


interface ResidentItem {
  name:string;
  role:string;
}

interface Props {
  item:ResidentItem;
}

const LinkedCell: React.SFC<Props> = (props) => (
  <View style={styles.container}>
    <Text style={styles.nameText}>{props.item.name}</Text>
    <Text style={styles.roleText}>{props.item.role}</Text>
  </View>
)

const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor:'#3d3d3d',
  },
  nameText:{
    paddingLeft: 15,
    paddingTop:15,
    paddingRight:15,
    fontSize: 18,
    height: 44,
    color:'#fff'
  },
  roleText:{
    paddingLeft: 15,
    paddingRight:15,
    paddingBottom:15,
    fontSize: 12,
    color:'#fff'
  }
})

export default LinkedCell
