import React from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

interface ToolItem {
  label:string;
  iconPath:string;
  handler:()=>void;
}

interface Props {
  item:ToolItem;
}

const TBToolItem: React.SFC<Props> = (props) => {
  var iconContent = (null) 
  
  // if(props.item.iconPath && props.item.iconPath != ''){
  //   const image = require(props.item.iconPath)
  //   iconContent = (
  //     <View style={styles.iconContainer}>
  //       <Image style={styles.toolIcon} source={image}></Image>
  //     </View>
  //   )
  // }
  return (
    <View style={styles.container}>
      {/* {iconContent} */}
      <Button title={props.item.label} color="orange" onPress={props.item.handler}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    
  },
  btnText:{
    fontSize: 18,
    color:'orange',
    padding:5,
  },
  iconContainer:{
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolIcon:{
    marginTop: 15,
    marginBottom: 15,
    marginLeft:15,
  }
})

export default TBToolItem
