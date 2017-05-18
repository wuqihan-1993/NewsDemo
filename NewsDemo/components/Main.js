import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Image,
  NavigatorIOS
} from 'react-native';

var Home = require('./Home');
var Message = require('./Message');
var Discover = require('./Discover');
var Profile = require('./Profile');

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex:0
    };
  }
  render() {
    return(
      <TabBarIOS tintColor='orange'>

        <TabBarIOS.Item
          icon = {{uri:'tabbar_home',scale:2}}
          title = '首页'
          selected = {this.state.selectedIndex == 0}
          onPress = {
            ()=>{
              this.setState({selectedIndex:0});
            }
          }>
          <NavigatorIOS
            barTintColor = 'orange'
            titleTextColor = 'white'
            initialRoute={{
              component:Home,
              title:'首页'
          }} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={{uri:'tabbar_message_center',scale:2}}
          title='消息'
          onPress = {
            ()=>{
              this.setState({selectedIndex:1});
            }
          }
          selected = {this.state.selectedIndex == 1}
          >
            <NavigatorIOS
              initialRoute={{
                component:Message,
                title:'消息'
            }} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={{uri:'tabbar_discover',scale:2}}
          title='发现'
          onPress = {
            ()=>{
              this.setState({selectedIndex:2});
            }
          }
          selected = {this.state.selectedIndex == 2}
          >
            <NavigatorIOS
              initialRoute={{
                component:Discover,
                title:'发现'
            }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri:'tabbar_profile',scale:2}}
          title='我的'
          onPress = {
            ()=> {
              this.setState({
                selectedIndex:3
              })
            }
          }
          selected = {this.state.selectedIndex == 3}
          >
            <NavigatorIOS
              initialRoute={{
                component:Profile,
                title:'我的'
            }} />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = Main;
