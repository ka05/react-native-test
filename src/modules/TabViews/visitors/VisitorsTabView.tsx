import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const VisitorsTabView: React.SFC<void> = () => (
  <View style={styles.container}>
    <Text style={styles.contentText}>Visitors</Text>
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

export default VisitorsTabView