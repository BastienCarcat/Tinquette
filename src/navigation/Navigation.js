import * as React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import SignIn from '../components/screens/authentification/SignIn'
import SignUp from '../components/screens/authentification/SignUp'
import Home from '../components/screens/Home'

const Logo = () => {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/logo.png')}
        />
    )
}

const AuthStack = createStackNavigator()

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator initialRouteName="SignIn">
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{ title: 'Se connecter' }}
            />
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: 'Créer un compte' }}
            />
        </AuthStack.Navigator>
    )
}

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: (props) => <Logo {...props} /> }}
            />
        </HomeStack.Navigator>
    )
}

const AppTabs = createBottomTabNavigator()
const AppTabsScreen = () => {
    return (
        <AppTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outlined'
                    }
                    return (
                        <Ionicons name={iconName} color={color} size={size} />
                    )
                },
            })}
        >
            <AppTabs.Screen name="Home" component={HomeStackScreen} />
        </AppTabs.Navigator>
    )
}

export const Nav = () => {
    const signIn = false

    return (
        <NavigationContainer>
            {signIn ? <AppTabsScreen /> : <AuthStackScreen />}
        </NavigationContainer>
    )
}

export default Nav
