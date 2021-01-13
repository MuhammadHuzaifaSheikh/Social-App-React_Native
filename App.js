/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Main from './Chat/Main'
import SignIn from './Chat/Components/Authantication/SignIn'
import SignUp from './Chat/Components/Authantication/SignUp'
import Chatheet from './Chat/Components/Chats/Chatsheet/Chatsheet'
import UserProfile from './Chat/Components/UserProfile/UserProfile'
import EditProfile from './Chat/Components/UserProfile/EditProfile'

import {
    ScrollView,
    View,
} from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="signIn" component={SignIn}/>
            <Stack.Screen options={{title: 'Sign Up'}} name="signUp" component={SignUp}/>

            <Stack.Screen options={{headerShown: false}} name="main" component={Main}/>
           
            <Stack.Screen options={({route}) => ({
                title:route.params.name,   // route.params.name,
                headerStyle: {backgroundColor: '#20bf6b',},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold',},
            })} name="chatSheet" component={Chatheet}/>
             <Stack.Screen options={({route}) => ({
                title:'Profile',   // route.params.name,
                headerStyle: {backgroundColor: '#20bf6b',},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold',},
            })} name="userProfile" component={UserProfile}/>
             <Stack.Screen options={({route}) => ({
                title:'Edit',   // route.params.name,
                headerStyle: {backgroundColor: '#20bf6b',},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold',},
            })} name="editProfile" component={EditProfile}/>

        </Stack.Navigator>
    );
}

const App = () => {

    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
};

export default App;
