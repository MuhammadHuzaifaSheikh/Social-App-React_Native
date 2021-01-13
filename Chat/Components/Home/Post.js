import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/Octicons';
import Share from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';


function Post({name, time, text, userImage, postImage, like,navigation}) {

    const [isLike, setIsLike] = useState(false);
    const [likeCount, setLikeCount] = useState(like);
    const [moreModel, setMoreModel] = useState(false);
    return (
        <View style={{flex: 1, backgroundColor: '#fff', elevation: 10, marginHorizontal: 5}}>
            <View
                style={{
                    height: 70,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                }}>
                <TouchableOpacity
                  activeOpacity={.7}
                onPress={()=>navigation.navigate('userProfile')}
                   
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 200,
                    }}>
                    <Image style={{
                        height: 50,
                        width: 50,
                        borderRadius: 200,
                    }}  source={{uri: userImage,}}/>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={.7}
                 onPress={()=>navigation.navigate('userProfile')}
                    style={{
                        flex: 1,
                        height: 50,
                        paddingLeft: 20,


                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#006837'}}>{name}</Text>
                    <View style={{flexDirection: 'row', paddingTop: 5}}>
                        <Icon color="grey" size={20} name="location-pin"/>
                        <Text>Karachi</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Icon style={{marginRight: 5}} color="grey" size={15} name="history"/>
                    <Text>{time}</Text>
                </View>
            </View>
            <Text
                style={text ? {
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    fontSize: 20,

                    fontWeight: '200',
                } : null}>
                {text ? text : null}
            </Text>
            <Image
                resizeMode="contain"
                style={postImage ? {height: 250, backgroundColor: 'black'} : null}
                source={{
                    uri: postImage
                }}
            />
            <View style={{height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>

                <TouchableOpacity style={{flexDirection: 'row', height: 50, alignItems: 'center'}} activeOpacity={.5}>
                    <Like name={"like1"} color={'#006837'} size={25}/>
                    <Text style={{color: 'grey'}}> {likeCount} </Text>

                </TouchableOpacity>


                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text style={{color: 'grey'}}>10 comments</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                height: 50,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderTopWidth: 1,
                borderTopColor: 'grey',
                borderBottomWidth: 1,
                borderBottomColor: 'grey'
            }}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => {
                        setIsLike(!isLike)
                        if (isLike) {
                            setLikeCount(likeCount - 1)

                        } else {
                            setLikeCount(likeCount + 1)

                        }
                    }} activeOpacity={.5}>
                        {isLike ? <Like name={"like1"} color={'#006837'} size={25}/> :
                            <Like name={"like2"} color={'grey'} size={25}/>}

                    </TouchableOpacity>
                    <Text style={{color: 'grey', marginLeft: 10}}>Like</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity activeOpacity={.5}>
                        <Comment name={"comment"} color={'grey'} size={25}/>
                    </TouchableOpacity>
                    <Text style={{color: 'grey', marginLeft: 10}}>Comment</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity activeOpacity={.5}>
                        <Share name={"md-arrow-redo-outline"} color={'grey'} size={25}/>
                    </TouchableOpacity>
                    <Text style={{color: 'grey', marginLeft: 10}}>Share</Text>
                </View>
                <TouchableOpacity onPress={() => setMoreModel(true)} style={{height: 20, width: 20}} activeOpacity={.5}>
                    <Icon name={"more-horiz"} color={'grey'} size={20}/>
                </TouchableOpacity>

            </View>


        </View>
    );
}

export default Post;
