import React, { Component } from 'react';
import { Text, StyleSheet, View, SectionList, ToastAndroid, RefreshControl } from 'react-native';
import Divider from '../components/Divider';

export default class SectionListTest extends Component {
  static listData = [
    {
      weekday: '星期一',
      data: [
        '数据库系统理论',
        '数据库系统理论'
      ]
    },
    {
      weekday: '星期二',
      data: [
        '无线传感器网络理论',
        '无线传感器网络理论'
      ]
    },
    {
      weekday: '星期三',
      data: [
        '数据库系统实验',
        '数据库系统理论',
        '毛泽东思想和中国特色社会主义理论体系概论'
      ]
    },
    {
      weekday: '星期四',
      data: [
        '毛泽东思想和中国特色社会主义理论体系概论',
        '毛泽东思想和中国特色社会主义理论体系概论',
        'RFID原理及其应用',
        'RFID原理及其应用实验'
      ]
    },
    {
      weekday: '星期五',
      data: [
        '无线传感器网络实验',
        '无线传感器网络理论',
        '无线传感器网络理论'
      ]
    }
  ]

  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false
    }
  }

  _beginRefresh = __ => {
    this, this.setState({
      ...this.state,
      isRefreshing: true
    })
  }

  _endRefresh = __ => {
    this.setState({
      ...this.state,
      isRefreshing: false
    })
  }

  _handleRefresh = __ => {
    this._beginRefresh();

    setTimeout(__ => {
      this._endRefresh();
      ToastAndroid.show('加载完毕!', ToastAndroid.SHORT);
    }, 3000);
  }

  render() {
    return (
      <SectionList
        contentContainerStyle={styles.container}
        sections={SectionListTest.listData}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        renderSectionFooter={this._renderSectionFooter}
        ListHeaderComponent={this._renderListHeader}
        ListFooterComponent={this._renderListFooter}
        ItemSeparatorComponent={Divider}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
        refreshControl={<RefreshControl
          refreshing={this.state.isRefreshing}
          onRefresh={this._handleRefresh}
        />}
        onEndReachedThreshold={0.1}
        onEndReached={__ => ToastAndroid.show('到底啦!', ToastAndroid.SHORT)}
        keyExtractor={(item, index) => item + index}
      />
    )
  }

  _renderItem = ({ item, index, section }) => (
    <Text style={styles.item} key={index}>{item}</Text>
  )

  _renderSectionHeader = ({ section: { weekday } }) => (
    <Text style={styles.sectionHeader}>{weekday}</Text>
  )

  _renderListHeader = __ => (
    <Text style={styles.title}>大三下学期课程表</Text>
  )

  _renderListFooter = __ => (
    <Text style={styles.listFooter}>到底啦！ ＞﹏＜</Text>
  )

  _renderSectionFooter = __ => (
    <View style={styles.sectionFooter}>
      <Divider style={styles.sectionFooterLine} />
      <Text>&nbsp;d=====(￣▽￣*)b&nbsp;</Text>
      <Divider style={styles.sectionFooterLine} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '900',
    fontFamily: '微软雅黑',
    color: 'black'
  },
  sectionHeader: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#666666',
    fontFamily: '新宋体'
  },
  sectionFooter: {
    marginTop: -5,
    marginBottom: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionFooterLine: {
    flex: 1,
    borderStyle: 'dashed',
    borderBottomColor: '#999999',
  },
  item: {
    marginVertical: 10,
    marginLeft: 18,
    color: '#999999',
    fontSize: 18,
    fontFamily: 'Noto'
  },
  listFooter: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },

})
