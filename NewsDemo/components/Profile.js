import React,{Component} from 'react'
import {
    View,
    TabBarIOS
} from 'react-native'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }
    render() {
        return(
            <TabBarIOS tintColor='orange'>
                <TabBarIOS.Item
                    icon={{uri:'tabbar_home',scale:2}}
                    selectedIcon={{uri:'tabbar_home_highlighted',scale:2}}
                    title="首页">
                    <View></View>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={{uri:'tabbar_message_center',scale:2}}
                    selectedIcon={{uri:'tabbar_message_center_highlighted',scale:2}}
                    title="消息">
                    <View></View>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={{uri:'tabbar_discover',scale:2}}
                    selectedIcon={{uri:'tabbar_discover_highlighted',scale:2}}
                    title="发现">
                    <View></View>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={{uri:'tabbar_profile',scale:2}}
                    selectedIcon={{uri:'tabbar_profile_highlighted',scale:2}}
                    title="我的">
                    <View></View>
                </TabBarIOS.Item>

            </TabBarIOS>

        )
    }
}

module.exports = Main