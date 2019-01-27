import React, { Component } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';

export default class ViewAndTextTest extends Component {
  _handleTextPress = __ => {
    Alert.alert(
      '你点击了文本',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.testTextContainer}>
        {/* View 组件内部不允许直接放置文本，会报错 */}
        {/* View 具有flex属性, Text 组件在 View 组件中默认垂直排列，当然可以通过 flex-direction 来使其水平排列 */}
        <Text style={styles.firstText}>第一段话</Text>
        <Text style={styles.secondText}>第二段话</Text>
        <Text style={styles.outText}> [外部文字 <Text style={styles.innerText}>我是嵌套的文字, 继承外部fontSize, 内部 color 优先级更高</Text>]</Text>
        <View style={styles.horizontalTextInView}><Text>使用flex-direction: row, &nbsp;</Text><Text>可以使得 View 中 Text 水平排列</Text></View>
        <Text style={styles.horizontalTextInText}><Text>Text 组件内部的 Text 默认是水平排列的</Text><Text>而且还有属性继承</Text></Text>
        <Text
          style={styles.testTextProps}
          selectable={true} // 是否可以复制
          ellipsizeMode={'tail'} // 设置省略号位置
          allowFontScaling={true}
          selectionColor={'blue'} // only android
          onPress={this._handleTextPress}
          onLongPress={__ => console.warn('长按了')}
        >测试 Text props</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  testTextContainer: {
    flex: 1,
    paddingRight: 30,
    backgroundColor: 'lightskyblue',
    // rn 没有样式继承，使用一个一致的文本和尺寸的推荐方式是创建一个包含相关样式的组件MyAppText，然后在你的App中反复使用它
    color: 'blue'
  },
  firstText: { // 并不会继承 color: blue
    marginVertical: 20, // 关于 margin 文档没写，测试结果表明 margin-left可用，那么可以替代 text-index 缩进属性使用
    fontSize: 18,
    textAlign: 'center',
    textDecorationLine: 'underline',
    // textDecorationColor: 'green' // ios only
    // 可见 Text 组件就好像一个可以容纳文字的View，默认宽度也是充满父容器
    backgroundColor: 'lightcoral'
  },
  secondText: {
    marginVertical: 20,
    fontSize: 18,
    textAlign: 'right',
    fontStyle: 'italic', // android 不生效什么鬼
    fontWeight: '900', // 必须为字符串
    color: 'lightcoral' // 基本上 html 上能用的颜色值在 rn 都能用
  },
  outText: {
    marginVertical: 20,
    marginLeft: 30,
    color: 'lightsalmon',
    fontSize: 24
  },
  innerText: {
    color: 'aquamarine',
    fontSize: 18,
  },
  horizontalTextInView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  horizontalTextInText: {
    fontSize: 18,
    color: '#666666',
    marginLeft: 20,
  },
  testTextProps: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 30
  }
});
