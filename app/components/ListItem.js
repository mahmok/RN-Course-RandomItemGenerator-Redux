
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import  * as actions from '../actions/ItemsActions';


class ListItem extends Component {
  render() {
        let extraStyle = {}
        if(this.props.selectedIndex == this.props.index)
        {
            extraStyle = {backgroundColor: 'lightgreen'};
        }
        return (
        <View style={[styles.container, extraStyle]}>
            <TouchableOpacity onPress={() => {this.props.removeItem(this.props.index)}}>
                <Text>{this.props.itemName}</Text>
            </TouchableOpacity>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});

const mapStatesToProps = (state, ownProps) => {
    return {selectedIndex: state.selectedItem }
}

export default connect(mapStatesToProps, actions)(ListItem);
