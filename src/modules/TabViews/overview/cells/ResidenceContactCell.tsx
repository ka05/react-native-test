import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

interface ResidenceContactItem {
  name:string;
  role:string;
  phone:string;
}

interface Props {
  item:ResidenceContactItem;
}

const LinkedCell: React.SFC<Props> = (props) => (
  <View style={styles.container}>
    <View style={styles.verticalContainer}>
      <Text style={styles.nameText}>{props.item.name}</Text>
      <Text style={styles.roleText}>{props.item.role}</Text>
    </View>
    <View style={styles.phoneContainer}>
      <Text style={styles.phoneText}>{props.item.phone}</Text>
      <Image style={styles.rowIcon} source={require('./../../../../assets/RowDrilldownIndicator.png')}></Image>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor:'#3d3d3d'
  },
  verticalContainer:{

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
  },
  phoneContainer:{
    position: 'absolute',
    height:'100%',
    flex: 1,
    flexDirection:'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  phoneText:{
    paddingLeft: 15,
    paddingRight:5,
    fontSize: 18,
    color:'#0F77D0',
  },
  rowIcon:{
    margin:10
  }
})

export default LinkedCell
