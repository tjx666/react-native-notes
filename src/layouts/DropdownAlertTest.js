import React, { Component } from 'react';
import { StyleSheet, ScrollView, Button, View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

export default class DropdownAlertTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Button
            title={'下拉'}
            onPress={__ => {
              this.dropdown.alertWithType('error', 'Error', '错误信息。。。。。');
            }}
          />
        </ScrollView>
        <DropdownAlert ref={ref => this.dropdown = ref} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
