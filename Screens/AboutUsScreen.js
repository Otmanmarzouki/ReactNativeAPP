import React from 'react'
import {View,Image,SafeAreaView,Text,TouchableOpacity} from 'react-native'

import { Linking } from 'react-native';
import FindMe from '../Common/FindMe';






export default class  BillingShipping extends React.Component {
  
  constructor(props) {
    super(props);
     this.state = {
     data: [],
     idOrder:0,
     orderKey:'',
     loading:false
    
    };

  
    
}

opengoogleMaps(){
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
const latLng = `${33.55530781015205},${-7.628567269312001}`;
const label = 'Custom Label';
const url = Platform.select({
  ios: `${scheme}${label}@${latLng}`,
  android: `${scheme}${latLng}(${label})`
});


Linking.openURL(url); 
}


    
  render(){
  
    return(
        <SafeAreaView style = {{backgroundColor:"#f6f5f4",flex:1}} >
        <View style={{ backgroundColor:"#fff",borderBottomLeftRadius: 20,borderBottomRightRadius: 20, }}>
                   <View style={{    marginTop:40,  alignItems:"center",  marginVertical:20,paddingHorizontal:10}}>
                       <View >
                           <Image source={require('../images/palmarosa-logo.jpg')} style={{width:120,height:80}}/>
                       </View>
                       <View style={{paddingTop:5}} > 
                              <Text style={{fontFamily:"Bold",color:'grey',fontSize:14}}> A PROPOS </Text>
               
                          </View>
                     </View>

                     </View>

            
                  
                <View style={{alignItems:'center',paddingBottom:5, marginHorizontal:10,marginTop:20}} > 
             
               <Text style={{fontFamily:"Bold",fontSize:14,color:"grey"}}>QUI NOUS SOMMEs</Text> 
            </View>
            <View style={{borderRadius:20, backgroundColor:'"#f6f5f4"',paddingHorizontal:20,  marginHorizontal:10}}>
              <View style={{paddingTop:10,alignItems:'center'}}>
              
               <Text style={{fontFamily:"Medium",fontSize:13,color:"grey"}}>
               Palmarosa, une boutique 100% marocaine spécialisée dans la cosmétique, parfums, soins, parapharmacie. Actif en magasin physique à Casablanca ainsi qu’une présence en ligne.
                 
                 </Text> 
            </View>
              
            </View>
            <View style={{alignItems:'center',paddingBottom:10, marginHorizontal:10,marginTop:20}} > 
             
             <Text style={{fontFamily:"Bold",fontSize:14,color:"grey"}}>TROUVEZ NOUS </Text> 
             </View>
          
         
          <View style={{ flex: 1}}>
             <FindMe/>
          </View>
          
                                    
          
          
          
           
                
               
        </SafeAreaView>
        
    );

  }
}

