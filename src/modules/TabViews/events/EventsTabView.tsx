import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

const EventsTabView: React.SFC<void> = () => (
  <View style={styles.container}>
    <Text style={styles.contentText}>Events</Text>
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

export default EventsTabView