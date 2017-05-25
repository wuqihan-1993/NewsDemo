import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

let localData = require('../LocalData.json')

class Home extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        })
        this.state = {
            dataSource: ds
        }
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
    renderRow(rowData) {
        return(
            <View>
                <Image style={styles.imgStyle} source={{uri:rowData.imgsrc,scale:2}}/>
                <View>
                    <Text>{rowData.title}</Text>
                    <Text>{rowData.digest}</Text>
                    <Text>{rowData.replyCount}回帖</Text>
                </View>
            </View>
        )
    }
    componentDidMount() {
        this.loadData();
    }

    loadData() {
        var jsonData = localData['T1348647853363'];
        var listDataArr = [],headerArr = [];
        for (var index in jsonData) {
            var item = jsonData[index];
            if (item.hasAD == 1) {
                headerArr = item.ads;
            }else {
                listDataArr.push(item);
            }
    }
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(listDataArr)
    });
  }
}

const styles = StyleSheet.create({

    cellViewStyle:{
        // 确定主轴的方向
        flexDirection:'row',
        // 设置侧轴的对齐方式
        // alignItems:'center',
        padding:10,
        // 设置下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },

    imgStyle:{
        width:90,
        height:90
    },

    rightViewStyle:{
        width: 260,
        marginLeft:8
    },

    titleStyle:{
        fontSize:16,
        marginBottom:5
    },

    subTitleStyle:{
        color:'gray'
    },

    flowTitleStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:0,

        // 边框
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:5,
        padding:3,

        color:'gray'
    }
});
module.exports = Home;
