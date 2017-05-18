import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Image
} from 'react-native';

var Main = React.createClass({
  render() {
    return (
      // <View><Text>sdfsdfsdfsdfsdfsdfsdfsdf</Text></View>
      <TabBarIOS
        tintColor = "orange"
      >
          {/*首页*/}
          <TabBarIOS.Item
             icon= {require('image!tabbar_home')}
             title="首页"
             selected={this.state.selectedItem == 'home'}
             onPress={()=>{this.setState({selectedItem: 'home'})}}
          >
             <NavigatorIOS
                 tintColor = "orange"
                 style={{flex:1}}
                 initialRoute = {
                    {
                      component: Home, // 具体的版块
                      title:'网易',
                      leftButtonIcon:require('image!navigationbar_friendattention'),
                      rightButtonIcon:require('image!navigationbar_pop')
                    }
                 }
             />
          </TabBarIOS.Item>
          {/*消息*/}
          <TabBarIOS.Item
              icon= {require('image!tabbar_discover')}
              title="发现"
              selected={this.state.selectedItem == 'find'}
              onPress={()=>{this.setState({selectedItem: 'find'})}}
          >
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute = {
                    {
                      component: Find, // 具体的版块
                      title:'发现'
                    }
                 }
              />
          </TabBarIOS.Item>
          {/*发现*/}
          <TabBarIOS.Item
              icon= {require('image!tabbar_message_center')}
              title="消息"
              selected={this.state.selectedItem == 'discover'}
              onPress={()=>{this.setState({selectedItem: 'discover'})}}
          >
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute = {
                    {
                      component: Message, // 具体的版块
                      title:'消息'
                    }
                 }
              />
          </TabBarIOS.Item>
          {/*我的*/}
          <TabBarIOS.Item
              icon= {require('image!tabbar_profile')}
              title="我的"
              selected={this.state.selectedItem == 'mine'}
              onPress={()=>{this.setState({selectedItem: 'mine'})}}
          >
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute = {
                    {
                      component: Mine, // 具体的版块
                      title:'我的'
                    }
                 }
              />
          </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
});


module.exports = Main;
