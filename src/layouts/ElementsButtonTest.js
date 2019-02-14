import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ElementsTest extends Component {
    render() {
        return (
            <View>
                <Button
                    title='确认'
                    buttonStyle={{
                        width: "90%",
                    }}
                />
                
                <Button
                    title="Outline button"
                    type="outline"
                />

                <Button
                    title="Clear button"
                    type="clear"
                />

                <Button
                    icon={
                        <Icon
                            name="check"
                            size={15}
                            color="white"
                        />
                    }
                    title="Button with icon component"
                />

                <Button
                    icon={{
                        name: "arrow-right",
                        size: 15,
                        color: "white"
                    }}
                    title="Button with icon object"
                />

                <Button
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                    }
                    iconRight
                    title="Button with right icon"
                />

                <Button
                    title="Loading button"
                    loading
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
