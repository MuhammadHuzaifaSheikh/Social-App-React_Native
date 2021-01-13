import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
} from 'react-native'

export default function List({navigation,firstName,lastName,photoUrl}) {
    return (
        <View onPress={()=>navigation.navigatie('userProfile')} style={{
            height: 45,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
            alignItems: 'center',
            backgroundColor:'#f2f2f2',
            paddingHorizontal: 10,
            marginTop: 20
        }}>
            <Image style={{height: 40, width: 40, borderRadius: 200,}} source={{uri: photoUrl}}/>
            <Text style={{paddingLeft: 20, color: '#20bf6b'}}>{firstName + ' ' +lastName}</Text>
        </View>
    )
}