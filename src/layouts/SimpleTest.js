import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class SimpleTest extends Component {
    render() {
        return (
            <View style={styles.flexRight}>
                <View style={styles.flexRightTop}></View>
                <View style={styles.flexRightMiddle}></View>
                <View style={styles.flexRightBottom}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flexRight: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white'
    },
    flexRightTop: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    flexRightMiddle: {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },
    flexRightBottom: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    }
})
