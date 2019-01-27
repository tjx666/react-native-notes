import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


export default class Home extends Component {
    static contentList = [
        {content: '测试 View 和 Text 组件', page: 'ViewAndTextTest' },
        {content: '测试'},
    ]

    constructor(props) {
        super(props);
    }

    _renderContentList = __ => Home.contentList.map((item, index) => {
        return <Text
            style={styles.itemContent}
            key={index}
            onPress={__ => this.props.navigation.navigate(item.page)}
        >{`${index + 1}: ${item.content}` }</Text>
    })

    render() {
        return (
            <ScrollView
            style={styles.home}
            contentContainerStyle={styles.contentContainer
            }>{this._renderContentList()}</ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#F9F7E8'
    },
    contentContainer: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 30,
    },
    itemContent: {
        marginVertical: 5,
        fontSize: 24
    }
});

