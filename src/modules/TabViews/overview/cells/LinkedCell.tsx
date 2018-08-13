import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

interface Props {
  label:string;
}

const LinkedCell: React.SFC<Props> = (props) => (
  <View style={styles.container}>
    <Text style={styles.contentText}>{props.label}</Text>
    <View style={styles.rowIconContainer}>
      <Image style={styles.rowIcon} source={require('./../../../../assets/RowDrilldownIndicator.png')}></Image>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor:'#3d3d3d',
  },
  contentText:{
    padding: 15,
    fontSize: 18,
    color:'#fff'
  },
  rowIconContainer:{
    position: 'absolute',
    height:'100%',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  rowIcon:{
    margin:10
  }
})

export default LinkedCell
