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
      <View>
        <Text>消息</Text>
      </View>
    )
  }
}

module.exports = Message;
