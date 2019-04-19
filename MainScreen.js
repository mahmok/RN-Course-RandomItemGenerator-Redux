
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import { connect } from 'react-redux';
import * as actions from './app/actions/ItemsActions';
import ListItem from './app/components/ListItem';


class MainScreen extends Component {

    renderItem = (row) => {
        
        return (
          <ListItem index={row.index} itemName={row.item}  />
        );
        this.props.ay7aga = "asd";
    }



    render() {
        return (
            <View style={styles.container}>
                <FlatList style={{flex: 0.5}} data={this.props.items.array} keyExtractor={(item, index) => item} renderItem={this.renderItem}/>
            
                <View style={{flex: 0.5, flexDirection: 'column'}}>
            
                <View style={{flex: 0.5, flexDirection: 'row'}}>
                    <TextInput style={{flex: 0.7, borderColor: 'black', borderWidth: 1}} onChangeText={(text) => {this.props.writeItem(text)}} />
                    <TouchableOpacity style={{flex: 0.3, borderColor: 'blue', borderWidth: 1}} onPress={() => {this.props.addItem(this.props.input)}}>
                    <Text>Add Item</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{flex: 0.3, borderColor: 'blue', borderWidth: 1}} onPress={() => {this.props.selectItem(this.props.items.length)}}>
                    <Text>Generate Random Item</Text>
                </TouchableOpacity>
                </View>
        </View>
        );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

const mapStatesToProps = (state, ownProps) => {
    return state;
}

export default connect(mapStatesToProps, actions)(MainScreen);
