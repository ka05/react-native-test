import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

interface Props {
  label:string;
}

const LinkedCell: React.SFC<Props> = (props) => (
  <View style={styles.container}>
    <View style={styles.addIconContainer}>
      <Image style={styles.addIcon} source={require('./../../../../assets/AddIcon.png')}></Image>
    </View>
    <Text style={styles.contentText}>{props.label}</Text>
  </View>
)

const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor:'#3d3d3d',
    flexDirection:'row',
    flex:1,
  },
  contentText:{
    padding: 15,
    fontSize: 18,
    color:'orange'
  },
  addIconContainer:{
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addIcon:{
    marginTop: 15,
    marginBottom: 15,
    marginLeft:15,
  }
})

export default LinkedCell
