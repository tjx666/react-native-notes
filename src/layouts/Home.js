import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class Home extends Component {
    static contentList = [
        { content: 'Simple Test', page: 'SimpleTest' },
        { content: 'View', page: 'ViewTest' },
        { content: 'Text', page: 'TextTest' },
        { content: 'TextInput', page: 'TextInputTest' },
        { content: 'ScrollView', page: 'ScrollViewTest' },
        { content: 'FlatList', page: 'FlatListTest' },
        { content: 'SectionList', page: 'SectionListTest' },
        { content: 'ElementsButton', page: 'ElementsButtonTest'},
        { content: 'AwesomeAlert', page: 'AwesomeAlertTest'},
        { content: 'DropdownAlert', page: 'DropdownAlertTest'},
    ]

    constructor(props) {
        super(props);
    }

    _renderContentList = __ => Home.contentList.map((item, index) => {
        return <Text
            style={styles.itemContent}
            key={index}
            onPress={__ => this.props.navigation.navigate(item.page)}
        >{`${index + 1}: ${item.content}`}</Text>
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
        backgroundColor: 'white'
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

