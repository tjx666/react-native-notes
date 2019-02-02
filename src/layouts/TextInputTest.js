import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, ToastAndroid } from 'react-native'

export default class TextInputTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basicTestValue: '默认值',
    }
  }

  _handleBasicTestInputChangeText = newValue => {
    ToastAndroid.show(`The value of basicTestTextInput change from ${this.state.basicTestValue} to ${newValue}`, ToastAndroid.SHORT);
    this.setState({
      ...this.state,
      basicTestValue: newValue
    })
  }

  render() {
    return (
      <View style={styles.testInputText}>
        <Text style={styles.basicTestValue}>{`输入的是: ${this.state.basicTestValue}`}</Text>
        <TextInput
          style={styles.basicTest}
          onChangeText={this._handleBasicTestInputChangeText} 
          allowFontScaling={false}
          autoCapitalize={'sentences'}
          autoCorrect={true}
          autoFocus={true}
          blurOnSubmit={false}
          caretHidden={true}
        ></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  testInputText: {
    flex: 1,
    backgroundColor: 'lightskyblue',
  },
  basicTestValue: {
    borderWidth: 2,
    borderColor: 'darkgreen'
  },
  basicTest: {
    height: 50,
    // marginVertical: 10,
    borderWidth: 2,
    borderColor: 'blue',
  }
})
