import React from 'react'
import {View,Image,TouchableOpacity,SafeAreaView,Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { Button, Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Loadingview from '../Common/Loadingview';
import { Ionicons } from '@expo/vector-icons'; 







export default class  BillingShipping extends React.Component {
  
  constructor(props) {
    super(props);
     this.state = {
     data: [],
     idOrder:0,
     orderKey:'',
     loading:false,
     paymentUrl:null
    
    };

  
    
    this.fetchMyAPI();
  
}



 fetchMyAPI() {
  AsyncStorage.getItem('Items').then((cart)=>{
    if (cart !== null) {
      // We have data!!
      
      const cartproducts = JSON.parse(cart)
      this.setState({data:cartproducts})
     
    }
    
  })
  .catch((err)=>{
    console.log(err)
  })
   
  }

     async checkout(userInfo) {
      this.setState({ loading: true });
          await axios.post('https://palmarosashop.com/wp-json/wc/v2/orders?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199',{
            billing: userInfo,
            shipping: userInfo,
            line_items: this.state.data.map((item) => ({
            product_id: item.id,
              
            }))
            
          })
          .then((response) => {
            
           this.setState({idOrder:response.data.id,orderKey:response.data.order_key})
            console.log(this.state.orderKey)
            console.log(this.state.idOrder)
          }, (error) => {
            console.log(error);
          });
          this.setState({paymentUrl:'https://palmarosashop.com/checkout/order-pay/'+this.state.idOrder+'?pay_for_order=true&key='+this.state.orderKey })
         
          const paymentUrl =
          `${"https://palmarosashop.com"}/checkout/order-pay/${this.state.idOrder}` +
          `?pay_for_order=true&key=${this.state.orderKey}`;
          this.setState({ loading: false });
          this.props.navigation.navigate("WebView", {url: this.state.paymentUrl});
            
         
         
         
        };
      




    
  render(){
    if(this.state.loading){
      return(

        <SafeAreaView style = {{backgroundColor:"#fff",flex:1}} >
            <View style = {{justifyContent:'center',alignItems:'center',flex:1}}>
            <Loadingview/>
            </View>
       
       </SafeAreaView>
      )


}else{
    return(
        <SafeAreaView style = {{backgroundColor:"#f6f5f4",flex:1}} >
        <View style={{ backgroundColor:"#fff",borderBottomLeftRadius: 20,borderBottomRightRadius: 20, paddingBottom:20 ,paddingHorizontal:20  }}>
        <View style={{ flexDirection:"row",width:"100%", marginTop:40 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{width:"31%" }} >
                  <Ionicons name="ios-arrow-back" size={24} color="grey" />
                   
                </TouchableOpacity>
                <View style={{ width:"34%" }}>
                        <Image source={require('../images/palmarosa-logo.jpg')}style={{width:120,height:70}} />
                    </View>
               
            </View>
                     <View style={{paddingTop:15,alignItems:"center"}} > 
                              <Text style={{fontFamily:"Bold",color:'grey',fontSize:16}}> Information Personelle </Text>
               
                          </View>

                     </View>

            
                   <ScrollView  style={{paddingTop:10}} >
                <View style={{alignItems:'center',paddingBottom:10, marginHorizontal:10}} > 
                <Formik
    initialValues={{
      first_name: '',
      last_name: '',
      address_1: '',
      address_2: '',
       city: '',
      state: '',
      postcode: '',
      country: '',
      email: '',
      phone: ''
    }}
    onSubmit={(values) => this.checkout(values)}>
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <>
        <Input
          
          placeholder="Votre Prénom"
          onChangeText={handleChange('first_name')}
          onBlur={handleBlur('first_name')}
          value={values.first_name}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
          
        />
        <Input
          
          placeholder="Votre Nom"
          onChangeText={handleChange('last_name')}
          onBlur={handleBlur('last_name')}
          value={values.last_name}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
        />
        <Input
          
          placeholder="Votre Adresse"
          onChangeText={handleChange('address_1')}
          onBlur={handleBlur('address_1')}
          value={values.address_1}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
        />
         <Input
          
          placeholder="Votre Adresse"
          onChangeText={handleChange('address_2')}
          onBlur={handleBlur('address_2')}
          value={values.address_2}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
        />
       
        <Input
          
          placeholder=" Ville"
          onChangeText={handleChange('city')}
          onBlur={handleBlur('city')}
          value={values.city}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
        />
        <Input
          
          placeholder="Région"
          onChangeText={handleChange('state')}
          onBlur={handleBlur('state')}
          value={values.state}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
        />
        <Input
          
          placeholder="Code Postal"
          onChangeText={handleChange('postcode')}
          onBlur={handleBlur('postcode')}
          value={values.postcode}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
        />
        <Input
          
          placeholder="Pays"
          onChangeText={handleChange('country')}
          onBlur={handleBlur('country')}
          value={values.country}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
        />
        <Input
          
          placeholder="Votre Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
        />
        <Input
         
          placeholder="Votre Telephone"
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
          containerStyle={{width:"90%"}}
          style={{fontFamily:"Medium",fontSize:12}}
        />
        <Button
          // @ts-ignore
          onPress={handleSubmit}
          title="Commander"
          containerStyle={{width:"35%"}}
          buttonStyle={{backgroundColor:"#f11290"}}
        />
      </>
    )}
  </Formik>
                    
                </View>
              </ScrollView>
                  
                
               
        </SafeAreaView>
        
    );

  }
}
}
