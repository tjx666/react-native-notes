import { Alert } from 'react-native';

export default class Logger {
    debug(logString) {
        if (typeof logString === 'object') {
            logString = JSON.stringify(logString, null, '   ');
        }

        Alert.alert('Debug', logString, [
            {
                text: 'return',
                onPress: __ => { }
            }
        ]);
    }
}