import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Message extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <View style={{backgroundColor:'red', flex:1}}>
        <Text>消息</Text>
      </View>
    )
  }
}

module.exports = Message;
