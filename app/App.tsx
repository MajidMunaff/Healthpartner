import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';


import * as SplashScreen from "expo-splash-screen";
import AboutScreen from './AboutMe';
import Cook from './Cook';
import Form from './Form';
import FruitView from './FruitView';
import HomeScreen from "./HomeScreen";
import List from './List';
import Login from "./Login";
import Moredetails from './Moredetails';
import Privacy from './Privacy';
import ServiceScreen from './ServiceScreen';
import Splash from './SplashScreen';
import SupportScreen from './SupportScreen';
import Terms from './Terms';
import Timer from "./Timer";


export type RootStackParamList = {
    Login: undefined;
    HomeScreen: undefined;
    Timer: undefined;
    Form: undefined;
    List: undefined;
    FruitView: undefined;
    ServiceScreen: undefined;
    SupportScreen: undefined;
    AboutScreen: undefined;
    Privacy: undefined;
    Terms: undefined;
    Splash: undefined;
    Moredetails: undefined;
    Cook: undefined;

}


SplashScreen.preventAutoHideAsync();
setTimeout(() => {
    SplashScreen.hideAsync();
}, 500);


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

    useEffect(() => {
        // hide the navigation bar
        NavigationBar.setVisibilityAsync("hidden");

        // optional: set background to transparent
        NavigationBar.setBackgroundColorAsync("transparent");
    }, []);
    function MainTabs() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName: keyof typeof Ionicons.glyphMap;

                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Timer') {
                            iconName = 'timer';
                        } else if (route.name === 'Add') {
                            iconName = 'add-circle-sharp';
                        } else if (route.name === 'List') {
                            iconName = 'list';
                        } else {
                            iconName = 'help-circle';    // fallback icon (safe default)
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#180adcff',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderTopWidth: 0.5,
                        elevation: 3,
                        height: 60,
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Timer" component={Timer} />
                <Tab.Screen name="Add" component={Form} />
                <Tab.Screen name="List" component={List} />
            </Tab.Navigator>
        );
    }
    return (

        <NavigationIndependentTree>
            {/* <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'dark-content'} /> */}
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Maintabs" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='FruitView' component={FruitView} />
                    <Stack.Screen name='ServiceScreen' component={ServiceScreen} />
                    <Stack.Screen name='SupportScreen' component={SupportScreen} />
                    <Stack.Screen name='AboutScreen' component={AboutScreen} />
                    <Stack.Screen name='Privacy' component={Privacy} />
                    <Stack.Screen name='Terms' component={Terms} />
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Moredetails" component={Moredetails} />
                    <Stack.Screen name='Maintabs' component={MainTabs} />
                    <Stack.Screen name='Cook' component={Cook} />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    )
}