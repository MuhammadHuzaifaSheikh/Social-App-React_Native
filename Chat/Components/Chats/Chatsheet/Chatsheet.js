import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
}
    from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ScrollView} from 'react-native-gesture-handler';
import MessageBubble from './MessageBubble'


const Chatheet = ({route}) => {
    const [state, setState] = useState(false)
    const {name, image, isOnline} = route.params;

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <ScrollView>


                    <MessageBubble mine text="hello"/>
                    <MessageBubble text="hello how are you"/>
                    <MessageBubble text="hello how are you"/>

                    {/* <View style={{marginTop:20,flexDirection:'row',width:300,alignItems:'center'}}>
                          <Image style={{height:40,width:40,borderRadius:200}} source={{uri:image}}/>
                           <View style={{flex:1,width:100}}>
                             <Text style={{maxWidth: '80%',backgroundColor:'#e8e8e8',marginLeft:10,borderRadius:50,minHeight:50,paddingHorizontal:20,paddingVertical:20}}>j</Text>
                           </View>
                      </View> */}


                </ScrollView>
            </View>

            <View
                style={{height: 60, backgroundColor: '#20bf6b', flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 10}}>
                    <TextInput placeholder="Send" style={{height: 40, backgroundColor: '#fff', paddingHorizontal: 10}}/>
                </View>
                <TouchableOpacity style={{height: 50, justifyContent: 'center', width: 70, alignItems: 'center'}}>
                    <Icon name="send" size={30} color="#fff"/>

                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Chatheet;
