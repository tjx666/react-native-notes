import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from './layouts/Home';
import SimpleTest from './layouts/SimpleTest';
import ViewTest from './layouts/ViewTest';
import TextTest from './layouts/TextTest';
import TextInputTest from './layouts/TextInputTest';
import ScrollViewTest from './layouts/ScrollViewTest';
import FlatListTest from './layouts/FlatListTest';
import SectionListTest from './layouts/SectionListTest';
import ElementsButtonTest from './layouts/ElementsButtonTest';
import AwesomeAlertTest from './layouts/AwesomeAlertTest';
import DropdownAlertTest from './layouts/DropdownAlertTest';

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
    },
    TextInputTest: {
        screen: TextInputTest
    },
    ScrollViewTest: {
        screen: ScrollViewTest
    },
    FlatListTest: {
        screen: FlatListTest
    },
    SectionListTest: {
        screen: SectionListTest
    },
    ElementsButtonTest: {
        screen: ElementsButtonTest
    },
    AwesomeAlertTest: {
        screen: AwesomeAlertTest
    },
    DropdownAlertTest: {
        screen: DropdownAlertTest
    },
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);