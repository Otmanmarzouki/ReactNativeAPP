import React from 'react';
import { Text, ImageBackground} from 'react-native';

export default class Best extends React.Component{
    render(){
        return(
           <ImageBackground
           source={this.props.src}
           style={{
               height:300,
               width:230,
               marginRight:20,
               borderRadius:10,
               marginBottom:40,
               opacity:0.8,
               backgroundColor:"grey",
               marginLeft:3,
               padding:6,
               marginTop:20
           }}
           >
               <Text style={{
                   fontFamily:"Bold",
                   color:"grey",
                   fontSize:12,
                   
               }}>{this.props.name}</Text>
               <Text style={{
                   fontFamily:"Bold",
                   color:"red",
                   fontSize:12
               }}>{this.props.discount}</Text>
           </ImageBackground>
        )
    }
}