/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { ViewData } from './src/viewData'
import './src/config/fixTime'

export default class App extends Component{
  render(){
    return(
      <View>
        <ViewData />
      </View>

    )
  }
}
