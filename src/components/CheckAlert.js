import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CheckAlert from "react-native-awesome-alert";

export default class CheckAlert extends Component {
    render() {
        return (
            <CheckAlert
                styles={styles}
                modalProps={{
                    transparent: true,
                    animationType: 'slide',
                }}
                checkBoxColor='black'
            />
        )
    }
}

const styles = StyleSheet.create({
    modalContainer : { 
        flex: 1,
        backgroundColor: 'rgba(100,100,100, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: { 
        backgroundColor: 'white',
        borderRadius: 10,
        width: 275,
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth
    },
    checkBox: {
        marginBottom: 10
    },
    checkBoxText: {
        marginLeft: 4,
        alignSelf: 'center',
        fontSize: 15,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 17,
        fontWeight: '600',
        padding: 15, 
        alignSelf: 'center'
    },
    buttonContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderColor: 'gray',
        borderTopWidth: StyleSheet.hairlineWidth
    },
    buttonText: {
        fontSize: 17
    },
    button: {
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 15,
        borderColor: 'gray'
    }
})
