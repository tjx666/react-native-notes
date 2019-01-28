import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


/**
 * View 是一个支持 Flexbox 布局、样式、一些触摸处理、和一些无障碍功能的容器，并且它可以放到其它的视图里，也可以有任意多个任意类型的子视图。
 * 不论在什么平台上，View 都会直接对应一个平台的原生视图，无论它是 UIView、还是 android.view.View。
 */
export default class ViewTest extends Component {
  render() {
    return (
      <View style={styles.testViewContainer}>
        <View style={styles.testBasic}>
          {/* 文本必须包裹在 Text 组件中，放 View 中会报错 */}
          {/* React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。 */}
        </View>

        <View style={styles.testFlexContainer}>
          <View style={styles.flexLeft}>
            <Text
              style={styles.flexLeftTop}
              ellipsizeMode={'middle'}
              numberOfLines={2}
            >startlalalalalalalalalallalalalalalalalaaalalaend</Text>
            <View style={styles.flexLeftBottom}></View>
          </View>

          <View style={styles.flexRight}>
            <View style={styles.flexRightTop}><Text>右上</Text></View>
            <View style={styles.flexRightMiddle}><Text>右中</Text></View>
            <View style={styles.flexRightBottom}><Text>右下</Text></View>
            <View style={styles.hiddenView}><Text>隐藏</Text></View>
          </View>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  testViewContainer: {
    // view 宽度默认为父容器宽度, 高度为子容器高度
    // flex: 1 使得高度尽量充满父容器
    // 没有指定宽度，默认宽度就是充满父容器宽度, 在这里就是屏幕宽度
    flex: 1, // 填充剩下父容器部分高度，在这里就是为了全屏
    alignItems: 'center',
    backgroundColor: 'lightsteelblue'
  },
  testBasic: {
    // React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
    width: '25%', // 宽高可以用百分比, 相对的是父容器
    // height: '20vh', // 不能用 vh, vw
    height: 125,
    marginVertical: 10,
    backgroundColor: 'lightcoral'
  },
  testFlexContainer: {
    // react native 里的 View 默认 display: flex，并且 flexDirection 默认是 column
    width: '80%',
    height: 250,
    flexDirection: 'row',
  },
  flexLeft: {
    flex: 1,
    height: '100%',
    backgroundColor: 'lightgreen'
  },
  flexLeftTop: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'lightcoral',
    backgroundColor: 'white'
  },
  flexLeftBottom: {
    flex: 3,
    backgroundColor: 'lightyellow'
  },
  flexRight: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'aquamarine'
  },
  flexRightTop: {
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    backgroundColor: 'lightskyblue'
  },
  flexRightMiddle: {
    width: 50,
    height: 50,
    backgroundColor: 'darkgreen'
  },
  flexRightBottom: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    backgroundColor: 'darkcyan'
  },
  hiddenView: {
    display: 'none',
    backgroundColor: 'red',
  }
})
