import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'
import DiscoverScreen from '../screens/Discover'
import Profile from '../screens/Profile';
import Svg, { Path } from 'react-native-svg'
function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();


const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: '#fff' }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={'#fff'}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: "#fff" }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: "#fff"
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: '#fff'
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}
export default function Navigation() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#FC6D3F',
                inactiveTintColor: '#CDCDD2',
                showLabel: false,
                style: {
                    elevation: 0,
                    backgroundColor: 'transparent',
                    height: 60,
                    borderRadius: 100
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) =>
                        (<Icon
                            name={focused ? 'home-outline' : 'home-outline'}
                            size={30}
                            color={color}
                        />),
                    tabBarButton: (props) => (
                        <TabBarCustomButton {...props} />
                    )

                }}
            />
            <Tab.Screen name="Navigator" component={DiscoverScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => <Icon
                        name={focused ? 'compass' : 'compass-outline'}
                        size={30}
                        color={color}
                    />,
                    tabBarButton: (props) => (
                        <TabBarCustomButton {...props} />
                    )
                }}
            />
            <Tab.Screen name="Chat" component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => <Icon
                        name={focused ? 'message' : 'message-outline'}
                        size={30}
                        color={color}
                    />,
                    tabBarButton: (props) => (
                        <TabBarCustomButton {...props} />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused, color }) => <Icon
                        name={focused ? 'account' : 'account-outline'}
                        size={30}
                        color={color}
                    />,
                    tabBarButton: (props) => (
                        <TabBarCustomButton {...props} />
                    )
                }}
            />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}