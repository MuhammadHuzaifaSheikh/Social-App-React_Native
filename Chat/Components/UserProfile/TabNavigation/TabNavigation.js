import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllPost from '../TabNavigation/AllPost/AllPost';
import Following from '../TabNavigation/Following/Following';
import Activities from '../TabNavigation/RecentActivity/Activities';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#20bf6b',
        showLabel: true,
        inactiveTintColor :'black',
        style: {
          backgroundColor: '#f2f2f2',
          color:'black'

        },
      }}>
      <Tab.Screen  name="Post" component={AllPost} />
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="Activities" component={Activities} />
    </Tab.Navigator>
  );
}
