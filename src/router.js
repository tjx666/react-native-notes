import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from './layouts/Home';
import ViewTest from './layouts/ViewTest';
import TextTest from './layouts/TextTest';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null
        }),
    },
    ViewTest: {
        screen: ViewTest
    },
    TextTest: {
        screen: TextTest
    }
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);