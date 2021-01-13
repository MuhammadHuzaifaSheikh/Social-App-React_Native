import React, {useState} from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import SocialIcon from 'react-native-vector-icons/SimpleLineIcons';

const backgroundColor = '#006837';
const ButtonColor = 'rgba(555, 555, 555,0.4)';
const buttonAndInputHeight = 50;

const SignIn = ({navigation}) => {
    const [state, setState] = useState(false);
    return (
        <View style={{flex: 1, backgroundColor,}}>
           
                <View style={{height: 160, alignItems: 'center',justifyContent:'center'}}>
                    <Image resizeMode="contain" style={{width: 200, height: 150}}
                           source={require('../../../Images/logo.png')}/>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                <View style={{ paddingHorizontal: 20}}>
                    <View style={{
                        height: buttonAndInputHeight,
                        marginTop: 10,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            height: 45,
                            width: 45,
                            backgroundColor,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <SocialIcon color="#fff" size={30} name="user"/>
                        </View>
                        <TextInput placeholder={'Email'} style={{flex: 1, paddingLeft: 10}}/>
                    </View>
                    <View style={{
                        height: buttonAndInputHeight,
                        marginTop: 10,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            height: 45,
                            width: 45,
                            backgroundColor,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <SocialIcon color="#fff" size={30} name="lock-open"/>
                        </View>
                        <TextInput placeholder={'Password'} style={{flex: 1, paddingLeft: 10}}/>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('main')} activeOpacity={.7} style={{
                        height: buttonAndInputHeight,
                        marginTop: 10,
                        backgroundColor: ButtonColor,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Log
                            In</Text>
                    </TouchableOpacity>
                    <View style={{height: 40, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 17}}>or</Text>
                    </View>

                </View>
                <View style={{ paddingHorizontal: 20}}>
                    <TouchableOpacity activeOpacity={.7} style={{
                        height: buttonAndInputHeight,
                        marginTop: 10,
                        backgroundColor: ButtonColor,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <SocialIcon color="#fff" size={30} name="social-google"/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} style={{
                        height: buttonAndInputHeight,
                        marginTop: 10,
                        backgroundColor: ButtonColor,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <SocialIcon color="#fff" size={30} name="social-facebook"/>
                    </TouchableOpacity>
                    <View style={{
                        height: buttonAndInputHeight,
                        marginTop: 14,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Text style={{fontSize: 15, color: '#fff'}}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('signUp')} activeOpacity=".9">
                            <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               

                </View>


            

        </View>
    );
};

export default SignIn;
