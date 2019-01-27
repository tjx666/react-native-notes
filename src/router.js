import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from './layouts/Home';
import ViewAndTextTest from './layouts/ViewAndTextTest';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null
        }),
    },
    ViewAndTextTest: {
        screen: ViewAndTextTest
    }
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);