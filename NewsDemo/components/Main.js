import React,{Component} from 'react'
import {
    View,
    TabBarIOS
} from 'react-native'

const Home = require('./Home')

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex:0
        }
    }
    render() {
        return (
            <TabBarIOS tintColor={'orange'}>
                <TabBarIOS.Item
                    title='首页'
                    icon={{uri:'tabbar_home',scale:2}}
                    selectedIcon={{uri:'tabbar_home_highlighted',scale:2}}
                    selected={this.state.selectedIndex == 0}
                    onPress={()=>{this.setState({selectedIndex:0})}}>
                    <Home/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title='消息'
                    icon={{uri:'tabbar_message_center',scale:2}}
                    selectedIcon={{uri:'tabbar_message_center_highlighted',scale:2}}
                    selected={this.state.selectedIndex == 1}
                    onPress={()=>{this.setState({selectedIndex:1})}}>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title='发现'
                    icon={{uri:'tabbar_discover',scale:2}}
                    selectedIcon={{uri:'tabbar_discover_highlighted',scale:2}}
                    selected={this.state.selectedIndex == 2}
                    onPress={()=>{this.setState({selectedIndex:2})}}>
                    <View></View>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title='我的'
                    icon={{uri:'tabbar_profile',scale:2}}
                    selectedIcon={{uri:'tabbar_profile_highlighted',scale:2}}
                    selected={this.state.selectedIndex == 3}
                    onPress={()=>{this.setState({selectedIndex:3})}}>
                    <View></View>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}

module.exports = Main