import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, ToastAndroid } from 'react-native';
import Faker from 'faker';

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
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
