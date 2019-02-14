import React, { Component } from 'react'
import { ScrollView, Text, Image, StyleSheet, TextInput, View } from 'react-native'
import Logger from '../utils/log';
const logger = new Logger();

class InputItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showClearButton: false
        }
    }

    _handleFocus = __ => {
        this.setState({
            ...this.state,
            showClearButton: true
        })
    }

    _handleBlur = __ => {
        this.setState({
            ...this.state,
            showClearButton: false
        })
    }

    _handleClear = __ => {
        const { name } = this.props;
        this.refs[name].clear();
    }

    _handleTextChange = newText => {

    }

    render() {
        return (
            <View style={styles.inputItem}>
                <Text style={styles.itemDesc}>{this.props.desc}</Text>
                <TextInput
                    ref={this.props.name}
                    style={styles.itemInput}
                    placeholder={`参考值: ${this.props.hint}`}
                    keyboardType='numeric'
                    selectionColor='gray'
                    onFocus={this._handleFocus}
                    onBlur={this._handleBlur}
                    onChangeText={this._handleTextChange}
                />
                {this._renderClearButton()}
            </View>
        )
    }

    _renderClearButton = __ => {
        if (this.state.showClearButton) {
            return (
                <Text
                    style={{
                        fontSize: 18,
                        color: 'gray'
                    }}
                    onPress={this._handleClear}
                >
                    x
                </Text>
            )
        }
    }
}

export default class InputSection extends Component {
    static users = [
        { name: 'currentRatio', desc: '流动比率', hint: '1.03' },
        { name: 'assetsAndLiabilityRate', desc: '存货周期律', hint: '87%' },
        { name: 'inventoryTurnover', desc: '毛利率', hint: '0.7' },
        { name: 'accountReceivableTurnover', desc: '净利润增长率', hint: '74.78' },
    ]

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps={true}
            >
                {this._renderCards()}
            </ScrollView>
        )
    }

    _renderCards = __ => {
        return Array.from({ length: 3 }).map((ele, index) => {
            return (
                <View style={styles.section} key={index}>
                    <Text style={styles.sectionHeader}>盈利能力</Text>
                    {
                        ElementsCardTest.users.map((item, i, self) => {
                            return (
                                <InputItem key={i} {...item} />
                            );
                        })
                    }
                </View>
            )
        })
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(239, 239, 244)',
        alignItems: 'center'
    },
    section: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 20,
        paddingBottom: 20
    },
    sectionHeader: {
        width: '100%',
        height: 45,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 45,
        fontFamily: '方正中宋'
    },
    inputItem: {
        width: '90%',
        height: 40,
        paddingRight: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,

    },
    itemDesc: {
        width: 100,
        marginLeft: 2,
        fontSize: 16,
        color: '#666666'
    },
    itemInput: {
        flex: 1,
    }
})
