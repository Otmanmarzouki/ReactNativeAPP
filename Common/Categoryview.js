import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity ,FlatList, SafeAreaView,Dimensions} from 'react-native';







class Categoryview extends React.Component {
 
  
    constructor(props) {
        super(props);
        
        this.state = {
      
             
        
        };
      

        
    }
   


      componentDidMount() {
     }

    
      
    render() {
        return (
     
    <TouchableOpacity style={{
        width:90,
        height:90,
        alignItems:'center',
        justifyContent:'center'
        
    }} onPress={this.props.onPress}>
     <Image
                source={this.props.source}
                style={{
                    width:90,
                    height:90,
                   
                }}
                />
                <View style={{position:'absolute' }}>
                 
                <Image
                source={this.props.Logo}
                style={{
                    width:35,
                    height:35,
                    tintColor:'white'
                   
                }}
                />
                    
                </View> 
                <View style={{position:'absolute',bottom:-2,}}>
                 
                <Text style={{fontFamily:"Bold",fontSize:9,color:"black"}}>{this.props.name} </Text> 
                    
                </View> 
                

     </TouchableOpacity>

               

                     
                 

      
         
        );
      }
     
    }
   
  
    export default Categoryview;