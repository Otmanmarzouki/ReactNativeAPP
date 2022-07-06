import React from 'react'
import {View,Image,SafeAreaView,FlatList,Text,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../Common/CartItem';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


export default class  CartScreen extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
    
     data: [],
     totalprice:0
    
    };

  
    
    
  
}





componentDidMount() {
  
  this._unsubscribe = this.props.navigation.addListener('focus', () => {
     
    this.fetchMyAPI();
  
   
  });
 
    

 
 
}
componentWillUnmount() {
  this._unsubscribe();
 
  
 
  
}

 fetchMyAPI() {
  AsyncStorage.getItem('Items').then((cart)=>{
    if (cart !== null) {
      // We have data!!
      
      const cartproducts = JSON.parse(cart)
      var total =cartproducts.map(total => total.price).reduce((acc, total) => parseInt(total) + parseInt(acc));
      this.setState({data:cartproducts,totalprice:total})
      console.log(this.state.data)
    }
    
  })
  .catch((err)=>{
    console.log(err)
  })
   
  }

  renderflatlistCart(){

    return(  <FlatList 
    
      data={this.state.data}
      
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <CartItem key={index} source={{uri: item.picture}} name={item.name}  price= {item.price}   />
        
    ) } /> )
  
        }
      
        deleteData()  {
        AsyncStorage.clear();
        this.setState({data: []})
    
         
        }





    
  render(){
    if (this.state.data && this.state.data.length) {
      return(
        <SafeAreaView style = {{backgroundColor:"#f6f5f4",flex:1}} >
        <View style={{ backgroundColor:"#fff",borderBottomLeftRadius: 20,borderBottomRightRadius: 20, paddingBottom:20,paddingHorizontal:20  }}>
        <View style={{ flexDirection:"row",width:"100%", marginTop:40 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{width:"31%" }} >
                  <Ionicons name="ios-arrow-back" size={24} color="grey" />
                   
                </TouchableOpacity>
                <View style={{ width:"34%" }}>
                        <Image source={require('../images/palmarosa-logo.jpg')}style={{width:120,height:70}} />
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Infos')} style={{alignItems:"flex-end",width:"35%" }} >
                    <AntDesign name="checkcircleo" size={24} color="grey" />
                   
                </TouchableOpacity>
               
            </View>
                   <View style={{paddingTop:15,alignItems:"center"}} > 
                              <Text style={{fontFamily:"Bold",color:'grey',fontSize:16}}> MON PANIER </Text>
               
                          </View>
                   </View>

                   <View style={{paddingBottom:10,marginHorizontal:20,paddingTop:20}} > 
                    
                    <View style={{paddingBottom:10,marginHorizontal:20,alignItems:"center"}} >
                    <TouchableOpacity onPress={()=>this.deleteData()} style={{alignItems:"center",justifyContent:'center',height:30, width:70,backgroundColor:'#f11290' }} >
                    <Text style={{fontFamily:"Medium",color:'white',fontSize:14}}> Vider</Text>
                      </TouchableOpacity>
                    </View>
                    
                </View>
                   
                <View style={{flex:1}}> 
            
                 {this.renderflatlistCart()}
                
                </View>
                
             
                  
                
               
        </SafeAreaView>
        );
  
    }else {
      return(
        <SafeAreaView style = {{backgroundColor:"#f6f5f4",flex:1}} >
        <View style={{ backgroundColor:"#fff",borderBottomLeftRadius: 20,borderBottomRightRadius: 20, paddingBottom:20,paddingHorizontal:20  }}>
        <View style={{ flexDirection:"row",width:"100%", marginTop:40 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{width:"31%" }} >
                  <Ionicons name="ios-arrow-back" size={24} color="grey" />
                   
                </TouchableOpacity>
                <View style={{ width:"34%" }}>
                        <Image source={require('../images/palmarosa-logo.jpg')}style={{width:120,height:70}} />
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Infos')} style={{alignItems:"flex-end",width:"35%" }} >
                    <AntDesign name="checkcircleo" size={24} color="grey" />
                   
                </TouchableOpacity>
               
            </View>
                   <View style={{paddingTop:15,alignItems:"center"}} > 
                              <Text style={{fontFamily:"Bold",color:'grey',fontSize:16}}> MON PANIER </Text>
               
                          </View>
                   </View>


                  

 
                   
                <View style={{flex:1,alignItems:'center',paddingBottom:10,justifyContent:'center'}} > 
            
                 
                <Text style={{ fontFamily:"Bold", fontSize:16, color:"grey", }}>
                      Votre Panier est vide
                    </Text>
                </View>
             
                  
                
               
        </SafeAreaView>
        
    );

    }
    

  }
}
