import React,{useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
  } 
  from 'react-native';
  import Post from "../../../Home/Post";

  
const AllPost = ({navigation}) => {
    const [state,setState]=useState(false)
    const postsArr = [
      {name:'Muhammad Ali',text:'Please fill form',time:'2d',like:12,userImage:'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-0/p180x540/130910016_2101764279958351_8027059050416273370_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=aoXUsBc36f4AX9xEC4n&_nc_ht=scontent.fkhi2-1.fna&tp=6&oh=347d507bcc3991a1c28e4358c45128c9&oe=6001DFE8',postImage:'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-0/p180x540/130910016_2101764279958351_8027059050416273370_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=aoXUsBc36f4AX9xEC4n&_nc_ht=scontent.fkhi2-1.fna&tp=6&oh=347d507bcc3991a1c28e4358c45128c9&oe=6001DFE8',},
      {name:'Muhammad Ali',text:'Please fill form',time:'2d',like:1,userImage:'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-0/p180x540/130910016_2101764279958351_8027059050416273370_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=aoXUsBc36f4AX9xEC4n&_nc_ht=scontent.fkhi2-1.fna&tp=6&oh=347d507bcc3991a1c28e4358c45128c9&oe=6001DFE8',postImage:'https://i.pinimg.com/originals/c4/2c/d3/c42cd325eb9e88ff4acd0b6914b9a3f0.jpg'},
      {name:'Muhammad Ali',time:'2d',like:1,userImage:'https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-0/p180x540/130910016_2101764279958351_8027059050416273370_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=aoXUsBc36f4AX9xEC4n&_nc_ht=scontent.fkhi2-1.fna&tp=6&oh=347d507bcc3991a1c28e4358c45128c9&oe=6001DFE8',postImage:'https://scontent.fkhi2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p526x296/126441775_6217291955227_7325099041780172663_n.png.jpg?_nc_cat=109&ccb=2&_nc_sid=7e83b1&_nc_eui2=AeEc9le5weDOalNEevPRBEfWRQyoEFSgagZFDKgQVKBqBulGqtEhVmNJi_fhI0uNfvEVuTH4XMAhwJNRbfvoJlHw&_nc_ohc=bTZkwenBjNAAX9-5HoW&_nc_ht=scontent.fkhi2-1.fna&oh=eaf7d23b51ab7b579321c7f8d3c547ae&oe=60159D71'},
    ]
    
    const Posts = postsArr.map((item,index)=>{
           return  (
            <Post navigation={navigation}  key={index} like={item.like} name={item.name} time={item.time} userImage={item.userImage} text={item.text} postImage={item.postImage}/>
           )
    })


    return (
       <View style={{flex:1}}> 
         <ScrollView>
            {Posts}
         </ScrollView>
        
       </View>
    );
  };
  
  export default AllPost;
  