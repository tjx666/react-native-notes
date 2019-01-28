import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from './layouts/Home';
import SimpleTest from './layouts/SimpleTest';
import ViewTest from './layouts/ViewTest';
import TextTest from './layouts/TextTest';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null
        }),
    },
    SimpleTest: {
        screen: SimpleTest
    },
    ViewTest: {
        screen: ViewTest
    },
    TextTest: {
        screen: TextTest
    }
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);