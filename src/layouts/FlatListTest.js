import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, ToastAndroid } from 'react-native';
import Faker from 'faker';
import Divider from '../components/Divider';

export default class FlatListTest extends Component {
    static data = Array
        .from({ length: 100 })
        .map(__ => ({ key: Faker.name.findName() }));

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={FlatListTest.data}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    ItemSeparatorComponent={Divider}
                    ListEmptyComponent={<Text>列表为空</Text>}
                    ListHeaderComponent={<Text style={styles.listHeader}>a flatList of 100 names</Text>}
                    ListFooterComponent={<Text style={styles.listFooter}>end  ＞﹏＜</Text>}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={25}
                    getItemLayout={this._getItemLayout}
                    initialScrollIndex={5}
                    onEndReached={__ => ToastAndroid.show('到底啦!', ToastAndroid.SHORT)}
                    onEndReachedThreshold={0.1}
                />
            </View>
        )
    }

    _getItemLayout = (data, index) => (
        { length: 41, offset: 41 * index, index }
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 40,
    },
    listHeader: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    listFooter: {
        fontSize: 18,
        textAlign: 'center',
        color: 'gray'
    }
});
