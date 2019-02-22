import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native';
import CheckAlert from "react-native-awesome-alert"

const style = {
    color: 'blue'
}

const NeverAskView = (
    <View>
        <Text style={styles}>流动比率未输入</Text>
    </View>
)

export default class AwesomeAlertTest extends Component {
    _handlePressButton = __ => {
        this.awesomeAlert.neverAskAlert(
            "有未输入的项!",
            NeverAskView,
            [
                { text: "返回", onPress: () => console.log("OK touch"), id: "checkAlert" },
                { text: "继续", onPress: () => console.log("Cancel touch") }
            ],
            "不要再询问我"
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <CheckAlert
                    styles={styles}
                    ref={ref => (this.awesomeAlert = ref)}
                    modalProps={{
                        transparent: true,
                        animationType: "slide",
                    }}
                    checkBoxColor="red"
                />

                <Button 
                    title={'Alert'}
                    onPress={this._handlePressButton}/
                >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sampleView: {

    },
    sampleViewText: {
        
    },
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
