import React from 'react';
import { View } from 'react-native';

export default DivideLine = (props) => (
    <View
        style={{
            borderBottomStyle: 'solid',
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            ...props.style
        }}
    ></View>
)