import React from 'react';
import {Text,View,Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const width= Dimensions.get('screen').width/2-10
export default class Items extends React.Component{
    render(){
        return(

            <View 
            
             style={{
                 marginTop:30,
                 backgroundColor:"#FFF",
                 height:260,
                 width,
                 elevation:2,
                 borderRadius:10,
                 marginHorizontal:5,
                 marginBottom:20,
                

             }}
            > 
               
               <TouchableOpacity  onPress={this.props.onPress}>

               <Image
                source={this.props.source}
                style={{ width:110,height:120,borderRadius:10,alignSelf:"center", marginTop:10,marginBottom:10 }} />
                <View style={{marginHorizontal:6 }}>
                    <Text style={{fontFamily:"Medium", color:"#4f4a4a", fontSize:10,marginBottom:40}}>
                        {this.props.name}
                 </Text>
               

                </View>
               


                          <View style={{
                     flexDirection:"row",
                     marginTop:5,
                     alignItems:"center",
                     paddingHorizontal:10
                 }}>
                     <View style={{
                         width:"100%",alignItems:"center"
                     }}>
                          <Text style={{
                         fontSize:13,
                         fontFamily:"Bold"
                    }}>
                        {this.props.price} DH
                 </Text>
                         
                     </View>
                 
                 </View>
                

                    
               </TouchableOpacity>
                
            </View>
        );
    }
}