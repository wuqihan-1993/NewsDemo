import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Image
} from 'react-native';

class Main extends Component {
  render() {
    return(
      <TabBarIOS tintColor='red'>
        <TabBarIOS.Item icon={{uri:'tabbar_home',scale:2}} title='首页'>

        </TabBarIOS.Item>
        <TabBarIOS.Item icon={{uri:'tabbar_message_center',scale:2}} title='消息'>

        </TabBarIOS.Item>
        <TabBarIOS.Item icon={{uri:'tabbar_discover',scale:2}} title='发现'>

        </TabBarIOS.Item>
        <TabBarIOS.Item icon={{uri:'tabbar_profile',scale:2}} title='我的'>

        </TabBarIOS.Item>
      </TabBarIOS>    
    )
  }
}

module.exports = Main;
