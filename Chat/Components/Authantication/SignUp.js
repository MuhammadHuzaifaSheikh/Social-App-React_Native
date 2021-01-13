import React, {useState} from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
} from 'react-native';
import SocialIcon from 'react-native-vector-icons/SimpleLineIcons';
import CameraIcon from 'react-native-vector-icons/Entypo';

const backgroundColor = '#006837';
const ButtonColor = 'rgba(555, 555, 555,0.4)';
const buttonAndInputHeight = 50;

const SignUp = ({navigation}) => {
    const [state, setState] = useState(false);
    return (
        <View style={{flex: 1, backgroundColor,}}>
            <ScrollView>
                <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity activeOpacity='0.9' style={{
                        width: 80,
                        height: 80,
                        backgroundColor: 'grey',
                        borderRadius: 200,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ImageBackground blurRadius={10} borderRadius={200} style={{
                            width: 80,
                            height: 80,
                            borderRadius: 300,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} source={require('../../../Images/bg.jpg')}>
                            <CameraIcon size={30} name="camera"/>

                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={{height: 350, paddingHorizontal: 20}}>
                    <View style={{
                        height: buttonAndInputHeight,
                        marginTop: 10,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 5,
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
                    <TouchableOpacity activeOpacity={.7} style={{
                        height: buttonAndInputHeight,
                        marginTop: 10,
                        backgroundColor: ButtonColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 10
                    }}>
                        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Sign
                            Up</Text>
                    </TouchableOpacity>


                </View>


            </ScrollView>

        </View>
    );
};

export default SignUp;
