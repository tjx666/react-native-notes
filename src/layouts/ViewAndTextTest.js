import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class ViewAndTextTest extends Component {
  render() {
    return (
      <View style={styles.viewAndText}>
        <View style={styles.testTextContainer}>
          {/* View 组件内部不允许直接放置文本，会报错 */}
          <Text style={styles.firstText}>第一段话</Text>
          <Text style={styles.secondText}>第二段话</Text>
          <Text style={styles.outText}> 外部文字 <Text style={styles.innerText}>我是嵌套的文字, 继承外部fontSize, 内部 color 优先级更高</Text></Text>
        </View>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewAndText: {
    // view 宽度默认为父容器宽度, 高度为子容器高度。
    // flex: 1 使得高度尽量充满父容器
    flex: 1,
    backgroundColor: 'lightskyblue'
  },
  testTextContainer: {
    height: '50%', // 宽高可以使用百分比
    paddingRight: 30,
    backgroundColor: 'lightcyan',
    // rn 没有样式继承，使用一个一致的文本和尺寸的推荐方式是创建一个包含相关样式的组件MyAppText，然后在你的App中反复使用它
    color: 'blue'
  },
  firstText: { // 并不会继承 color: blue
    textAlign: 'center',
    textDecorationLine: 'underline',
    // textDecorationColor: 'green' // ios only
  },
  secondText: {
    textAlign: 'right',
    fontStyle: 'italic', // android 不生效什么鬼
    fontWeight: '900', // 必须为字符串
    color: 'lightcoral' // 基本上 html 上能用的颜色值在 rn 都能用
  },
  outText: {
    color: 'lightsalmon',
    fontSize: 24
  },
  innerText: {
    color: 'lightsteelblue'
  }
});
