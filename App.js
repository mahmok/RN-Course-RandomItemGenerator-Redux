/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, Dispatch } from 'redux';
import  ListItem  from './app/components/ListItem';
import CombinedReducers from './app/reducers/CombinedReducers';
import { writeItem, addItem, selectItem } from './app/actions/ItemsActions';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';

export default class App extends Component 
{



  render() 
  {
    
    return (
      <Provider store={ createStore(CombinedReducers)} >
        <MainScreen />
      </Provider>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

