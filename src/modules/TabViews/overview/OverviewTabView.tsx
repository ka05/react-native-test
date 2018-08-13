import React from 'react';
import { StyleSheet, SectionList, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { getOverviewContentList } from './selectors'
import {cellType} from './cells/constants'

// cells
import ResidentCell from './cells/ResidentCell'
import ResidenceContactCell from './cells/ResidenceContactCell'
import AddCell from './cells/AddCell'
import LinkedCell from './cells/LinkedCell'

interface Props {
  sectionList: Array<any>;
}

interface State {

}

const OverviewTabViewContainer = connect(state => ({
  sectionList:getOverviewContentList(state)
}), {
})(
  class OverviewTabView extends React.Component<Props, State> {
    componentDidMount() {

    }

    renderCellItem = ({item}) => {
      switch(item.cellType){
        case cellType.ResidentCell: {
          return <ResidentCell item={item}></ResidentCell>
        }
        case cellType.ResidenceContactCell: {
          return <ResidenceContactCell item={item}></ResidenceContactCell>
        }
        case cellType.AddCell: {
          return <AddCell label={item.label}></AddCell>
        }
        case cellType.LinkedItemCell: {
          return <LinkedCell label={item.label}></LinkedCell>
        }
      }
    }

    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: "#595b59",
          }}
        />
      );
    };

    render(){
      const sectionList = this.props.sectionList
      return (
        <View style={styles.container}>
          <SectionList
                sections={sectionList}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={this.renderCellItem}
                renderSectionHeader={({section}) => (
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => index}
              />
        </View>
      )
    }
  }
)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#2c2c2d',
  },
  listItem: {
    padding: 15,
    fontSize: 18,
    height: 44,
  },
  sectionHeader:{
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 6,
    fontSize: 14,
    fontWeight: 'bold',
    color:"#ffffff",
    backgroundColor: '#2c2c2d',
  }
})

export default OverviewTabViewContainer