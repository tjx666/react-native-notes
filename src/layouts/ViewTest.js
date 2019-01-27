import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ViewTest extends Component {
  render() {
    return (
      <View style={styles.testViewContainer}>
        <View style={styles.testViewProps}>
        {/* 文本必须包裹在 Text 组件中，放 View 中会报错 */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  testViewContainer: {
    // view 宽度默认为父容器宽度, 高度为子容器高度。
    // flex: 1 使得高度尽量充满父容器
    flex: 1, // 填充剩下父容器部分高度，在这里就是为了全屏

    backgroundColor: 'lightsteelblue'
  },
  testViewProps: {

  }
})
