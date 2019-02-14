import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class Copyright extends Component{
    render() {
        return <View style={styles.copyRight}>
            <Text style={styles.words}>（该软件版权归南昌高新区管委会金融办所有）</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    copyRight: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    words: {
        fontSize: 16,
    }
});