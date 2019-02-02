import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput } from 'react-native'
import { bold } from 'ansi-colors';
``

export default class ScrollViewTest extends Component {
  static itemsData = [
    '姓',
    '名',
    '密码',
    '年龄',
    '性别',
    '学历',
    '邮箱',
    '电话',
    '职业',
    '出生地',
    '居住地',
    '爱好',
  ]

  render() {
    return (
      <ScrollView
        style={styles.scrollViewTest}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>注册</Text>
        {this._renderItems(ScrollViewTest.itemsData)}
      </ScrollView>
    )
  }

  _renderItems = itemsData => (
    <View style={styles.items}>
      {
        itemsData.map((item, index) => (
          <View style={styles.item} key={index}>
            <Text style={styles.itemDesc}>{`${item}: `}</Text>
            <TextInput
              style={styles.itemInput}
              >
            </TextInput>
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  scrollViewTest: {
    backgroundColor: 'lightskyblue'
  },
  title: {
    marginBottom: -15,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  items: {
    
  },
  item: {
    height: 36,
    marginVertical: 10,
    paddingRight: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  itemDesc: {
    fontSize: 24,
    marginLeft: 20,
    marginRight: 5,
  },
  itemInput: {
    flex: 1,
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  }
})
