import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    Modal,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function Conversation({navigation}) {

    const users = [
        {
            firstName: 'Ali',
            lastName: 'Muhammad',
            isOnline: true,
            photo:
                'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/20883006_10212011927524856_4285594832550173033_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=m_N1ycikZ5wAX8aGMZ_&_nc_ht=scontent.fkhi2-1.fna&oh=4fd6d610bb399ae0672585455e5d7cf3&oe=5FF66B9D',
        },
        {
            firstName: 'Hamza',
            lastName: 'Shaikh',
            isOnline: true,
            photo:
                'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/90429659_516567559026914_2095979778870870016_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=c8qlTFgOl4YAX_-7ZSl&_nc_ht=scontent.fkhi2-1.fna&oh=f29db5e32d0f1004daa6af3b6372f27a&oe=5FF6CA5B',
        },
        {
            firstName: 'معاز',
            lastName: 'احمد',
            isOnline: true,
            photo:
                'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/117299546_923461508156655_6289093511847745821_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=64GXWrAKYLcAX9j_jdy&_nc_ht=scontent.fkhi2-1.fna&oh=e2141b389de5c931d3b80b22eee54f69&oe=5FF6FC37',
        },
        {
            firstName: 'Shahzain ',
            lastName: 'Tariq',
            isOnline: true,
            photo:
                'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/91347099_1634174606732866_1266824402368987136_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=zF_gREB7_fUAX9XImNM&_nc_ht=scontent.fkhi2-1.fna&oh=47abbec8cc5db2d524f2bf4c05a35aea&oe=5FF9367E',
        },
        {
            firstName: 'Muhammad',
            lastName: 'mavia',
            isOnline: true,
            photo:
                'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/82777570_2295585440738857_215976880065478656_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=o-l576OC2YYAX8y9tjn&_nc_ht=scontent.fkhi2-1.fna&oh=fe2e567ac0c9064c31a8d16035c7dbe2&oe=5FF955C1',
        },
    ];

    const usersList = users.map((item, index) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('chatSheet', {
                name: item.firstName.toLocaleUpperCase() + ' ' + item.lastName.toLocaleUpperCase(),
                image: item.photo,
                isOnline: item.isOnline
            })} activeOpacity={0.7} key={index} style={{
                height: 45,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#f2f2f2',
                alignItems: 'center',
                paddingHorizontal: 10,
                marginTop: 20
            }}>
                <Image style={{height: 40, width: 40, borderRadius: 200,}} source={{uri: item.photo}}/>
                <Text style={{paddingLeft: 20, color: '#20bf6b'}}>{item.firstName + ' ' + item.lastName}</Text>
            </TouchableOpacity>
        )

    })
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{
                height: 60,
                backgroundColor: '#20bf6b',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 4
            }}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Chat</Text>
            </View>
            <ScrollView>
                {usersList}
            </ScrollView>


        </View>
    );
}

