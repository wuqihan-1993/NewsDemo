import React,{Component} from 'react'
import {
    View,
    ListView,
    Text,
    Image,
    StyleSheet
} from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged:(r1,r2)=>{r1 !== r2}
            })
        }
    }
    render() {
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow} />
        )
    }

    renderRow(rowData) {
        return(
            <View style={styles.cellViewStyle}>
                <Image style={styles.imageStyle} source={{uri:rowData.imgsrc,scale:2}}/>
                <View style={styles.rightViewStyle}>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                    <Text style={styles.subTitleStyle}>{rowData.digest}</Text>
                    <Text style={styles.flowTitleStyle}>{rowData.replyCount}跟帖</Text>
                </View>
            </View>
        )
    }

    componentDidMount() {
        this.loadData()
    }
    loadData() {
        const localData = require('../LocalData.json')['T1348647853363']
        var listData = [],headerData = []
        for(let index in localData) {
            let item = localData[index]
            if (item.hasAD == 1) {
                headerData = item.ads
            }else {
                listData.push(item)
            }
        }
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(listData)
        })

    }
}

const styles = StyleSheet.create({
    cellViewStyle:{
        flexDirection:'row',
        padding:8
    },
    imageStyle:{
        width:90,
        height:90
    },
    rightViewStyle:{
        width:260,
        marginRight:8
    },
    titleStyle:{
        fontSize:16,
        marginBottom:5
    },
    subTitleStyle:{
        color:'gray'
    },
    flowTitleStyle:{
        position:'absolute',
        right:10,
        bottom:0,

        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:5,
        padding:3,

        color:'gray'
    }
})

module.exports = Home