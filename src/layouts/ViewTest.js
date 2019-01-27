import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ViewTest extends Component {
  render() {
    return (
      <View style={styles.testViewContainer}>
        <View style={styles.outBox}>
        {/* 文本必须包裹在 Text 组件中，放 View 中会报错 */}
        {/* React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。 */}
          <View style={styles.innerBox}></View>
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
  outBox: {
    width: '50%', // 可以用百分比
    height: 200,
    margin: 10,
    padding: 10,
    flexDirection: 'row', // 和 html 不一样，默认是 column
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcoral'
  },
  innerBox: {
    width: '50%', // 相对的是最近的父容器
    height: '50%',
    backgroundColor: 'lightcyan'
  }
})
