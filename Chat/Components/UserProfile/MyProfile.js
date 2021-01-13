import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import EditIcon from 'react-native-vector-icons/AntDesign';
import TabNavigator from './TabNavigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllPost from './TabNavigation/AllPost/AllPost';
import Following from './TabNavigation/Following/Following';

const Tab = createMaterialTopTabNavigator();

function MyProfile({navigation}) {
  return (
    <View style={{flex: 1}}>
      {/* <ScrollView> */}
        <View
          style={{
            height: 60,
            backgroundColor: '#20bf6b',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            elevation: 4,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, backgroundColor: 'red'}} />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              My Profile
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('editProfile')}
            style={{alignItems: 'flex-end', flex: 1, paddingEnd: 10}}>
            <EditIcon name="edit" color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
        <ImageBackground
          blurRadius={2}
          source={require('../../../Images/cover.jpg')}
          style={{
            height: 160,
            backgroundColor: 'blue',
            alignItems: 'center',
            position: 'relative',
          }}>
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 200,
              borderWidth: 5,
              borderColor: '#f2f2f2',
              position: 'absolute',
              bottom: -75,
            }}
            source={{
              uri:
                'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/137043018_697102287635880_1377173207340703594_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFXdZnQVo72wqr3s1wVykG3ceWiEN6Zrelx5aIQ3pmt6cs3XeYrgOq5b2vdli7QaYJ9EKqmc7J5exhze9uhQQ1d&_nc_ohc=weel9EkeSLkAX_acFzK&_nc_ht=scontent.fkhi2-1.fna&oh=01fd079da18a24784b1b2b56a7834c4c&oe=601CB355',
            }}
          />
        </ImageBackground>
      <View>
        <View style={{height: 75}} />
        <View style={{height: 100}}>
          <View style={{height: 55, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: 'rgba(0,0,0,0.6)',
              }}>
              Huzaifa Shaikh
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '200',
                color: 'rgba(0,0,0,0.4)',
              }}>
              Web Developer
            </Text>
          </View>
          <View
            style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: '#20bf6b',
                  fontSize: 17,
                  letterSpacing: 1,
                  fontWeight: 'bold',
                }}>
                Follower : 108k
              </Text>
            </View>
            <View
              style={{height: 25, width: 2, backgroundColor: '#20bf6b'}}></View>
 
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: '#20bf6b',
                  fontSize: 17,
                  letterSpacing: 1,
                  borderLeftColor: '#20bf6b',
                  fontWeight: 'bold',
                }}>
                Following : 187
              </Text>
               </View>
             </View> 
          </View>
      </View>

      <TabNavigator/>
          {/* <Tab.Navigator
            tabBarOptions={{
              scrollEnabled: true,
              indicatorStyle: {backgroundColor: '#521C87'},
              activeTintColor: '#521C87',
              inactiveTintColor: '#707070',
              labelStyle: {
                fontSize: 15,
                paddingTop: 5,
                justifyContent: 'space-around',
                fontFamily: 'Poppins-SemiBold',
              },
              tabStyle: {justifyContent: 'space-between'},
              style: {height: 50, backgroundColor: '#fff', width: 400},
            }}>
            <Tab.Screen name="Post" component={AllPost} />
            <Tab.Screen name="Following" component={Following} />
          </Tab.Navigator> */}
        </View>
 
  );
}

export default MyProfile;
