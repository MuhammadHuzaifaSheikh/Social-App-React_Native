import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MyProfile from './MyProfile';

function Index({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <MyProfile navigation={navigation} />
      </ScrollView>
      {/* <Text>Index</Text> */}
    </View>
  );
}

export default Index;
