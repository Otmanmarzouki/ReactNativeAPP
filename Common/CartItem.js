import React from 'react';
import {Text,View,Image, Dimensions} from 'react-native';
const width= Dimensions.get('screen').width/2-10
export default class Items extends React.Component{
    render(){
        return(

            <View 
            
             style={{ marginTop:10,
                 backgroundColor:"#FFF",
                  height:130,
                  elevation:2,
                 borderRadius:10,
                 marginHorizontal:10,
                 marginBottom:10,
                 flexDirection:'row',
                 alignItems:'center'
              
             }}
            > 
             <View style={{ width:"35%"}}>
                   <Image  source={this.props.source}style={{ width:100,height:90, marginTop:10,}}/>
             </View>
               
              
                <View style={{   width:"35%",}}>
                    <Text style={{  fontFamily:"Medium",color:"#4f4a4a", fontSize:8, marginTop:10,  }}>
                        {this.props.name}
                    </Text>
               
                </View>
               


                  
                     <View style={{ width:"30%", alignItems:'center'}}>
                          <Text style={{fontSize:13,fontFamily:"Medium" }}>
                        {this.props.price} DH
                         </Text>
                         
                   </View>
                    
      </View>
                
           
        );
    }
}