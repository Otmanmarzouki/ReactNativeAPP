import React from 'react'
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default class  Details extends React.Component {
   
  constructor(props) {
    super(props);
    
    this.state = {
   
    };
   
    
  }
  onClickAddCart(item){
   
    const idpro= this.props.route.params.item.id;
    const namepro= this.props.route.params.item.name;
    const pricepro = this.props.route.params.item.price;
    const picturepro = this.props.route.params.item.images[0].src
    
    let data = {id:idpro, name: namepro, price:pricepro, picture:picturepro};
 
    AsyncStorage.getItem('Items').then((datacart)=>{
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart)
          cart.push(data)
          AsyncStorage.setItem('Items',JSON.stringify(cart));
        }
        else{
          const cart  = []
          cart.push(data)
          AsyncStorage.setItem('Items',JSON.stringify(cart));
        }
        
        this.props.navigation.navigate('ACCUEIL')
      })
      .catch((err)=>{
        console.log(err)
      })
  }


 
  
  render(){
    return(
        <View style={{  flex:1,backgroundColor:"#FFF", paddingHorizontal:20 }}>
            <View style={{ flexDirection:"row",width:"100%", marginTop:40 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{width:"31%" }} >
                  <Ionicons name="ios-arrow-back" size={24} color="grey" />
                   
                </TouchableOpacity>
                <View style={{ width:"34%" }}>
                        <Image source={require('../images/palmarosa-logo.jpg')}style={{width:120,height:70}} />
                    </View>
               
            </View>

            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={{ height:200,width:"100%",alignItems:'center' }}>
                      <Image source={ {uri: this.props.route.params.item.images[0].src}} style={{width:180,height:200}} />
                </View>
             <View style={{ flexDirection:"row", alignItems:"center", width:15,width:"100%"}}>
                    <View style={{ width:"65%" }}>
                        <Text style={{ fontFamily:"Bold", fontSize:10, color:"#4f4a4a" }}>
                            {this.props.route.params.item.name}
                            </Text>
                    </View>
                    <View style={{ width:"35%",alignItems:"center" }}>
                    <Text style={{ fontFamily:"Bold",fontSize:16,color:"#b3aeae" }}>
                    {this.props.route.params.item.price}DH
                    </Text>
                    </View>
                </View>
                
                <Text style={{ fontFamily:"Medium",fontSize:10,lineHeight:20,color:"#b3aeae", marginTop:20 }}>
                    {this.props.route.params.item.description.replace(/(<([^>]+)>)/ig, '').replace(/((&nbsp;))*/gmi, '').replace(/((&amp;))*/gmi, '').trim()}
                </Text>
                  
                 <View style={{alignItems:'center', justifyContent:'center', marginTop:20  }}>
                 <TouchableOpacity style={{ backgroundColor:"#f11290", padding:5,borderRadius:6,alignItems:'center',justifyContent:'center',width:130, height:40}}  
                 onPress={() => this.onClickAddCart()}>
                        <Text style={{fontFamily:"Bold",fontSize:10, color:"#fff",}}>
                       J'ACHÈTE
                    </Text>
                     </TouchableOpacity>
                </View>
                </ScrollView>
        </View>
        
    );

  }
}
