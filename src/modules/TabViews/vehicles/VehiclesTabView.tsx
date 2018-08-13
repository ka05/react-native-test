import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const VehiclesTabView: React.SFC<void> = () => (
  <View style={styles.container}>
    <Text style={styles.contentText}>Vehicles</Text>
  </View>
)

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height:'100%',
    justifyContent: 'space-around',
  },
  contentText:{
    textAlign: 'center',
  }
})

export default VehiclesTabView