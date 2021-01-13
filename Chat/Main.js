import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
}
    from 'react-native';
import Home from "../Chat/Components/Home/Home";
import Fav from "../Chat/Components/Fav/Fav";
import Conversation from "./Components/Chats/Conversation/Conversation";
import MyProfile from "./Components/UserProfile/MyProfile";
import Index from "./Components/UserProfile/index";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PersonIcon from 'react-native-vector-icons/Ionicons';
import SettingIcon from 'react-native-vector-icons/Fontisto';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const Main = () => {
    const [state, setState] = useState(false)
    return (
        <View style={{flex: 1}}>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#20bf6b',

            }}>
                <Tab.Screen options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (<Icon name="home" color={color} size={size}/>),
                }} name="Home" component={Home}/>
                <Tab.Screen options={{
                    tabBarLabel: 'Favourate',
                    tabBarIcon: ({color, size}) => (<Icon name="star-outline" color={color} size={size}/>),
                }} name="Favourate" component={Fav}/>
                <Tab.Screen options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({color, size}) => (<Icon name="chat-outline" color={color} size={size}/>),
                }} name="Conversation" component={Conversation}/>
                <Tab.Screen options={({route}) => ({
                   tabBarLabel: 'Profile',
                
                   tabBarIcon: ({color, size}) => (<PersonIcon name="person" color={color} size={size}/>),
                   headerTitleStyle: {fontWeight: 'bold',},
                  })} name="myProfile" component={Index}/>
            </Tab.Navigator>

        </View>
    );
};

export default Main;
