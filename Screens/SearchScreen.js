import React from 'react'
import {View,Image,StyleSheet,SafeAreaView,FlatList,Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Items from '../Common/Items';
import Loadingview from '../Common/Loadingview';





export default class  SearchSvreen extends React.Component {
  
  constructor(props) {
    super(props);
     this.state = {
        Results: [],
        loading:false
     
    
    };

   console.log(this.props.route.params.productname)
 
  
}

componentDidMount() {
      
    this.fetchProduct();
    
}


componentWillUnmount() {
// fix Warning: Can't perform a React state update on an unmounted component
this.setState = (state,callback)=>{
    return;
};
}
async fetchProduct() {
    this.setState({ loading: true });
    const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&search=${this.props.route.params.productname}&per_page=100`);
    const results = await response.json();

   this.setState({Results: results})
   
   this.setState({ loading: false });
 

  }



renderflatlistProduct(){

    return(  <FlatList
        numColumns={2}
      nestedScrollEnabled 
      data={this.state.Results}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
        
    ) } /> )
  
        }





    
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
        <View style={{ backgroundColor:"#fff",borderBottomLeftRadius: 20,borderBottomRightRadius: 20, paddingBottom:20 }}>
                   <View style={{    marginTop:40,  alignItems:"center",  marginVertical:20,paddingHorizontal:10}}>
                       <View >
                           <Image source={require('../images/palmarosa-logo.jpg')} style={{width:180,height:100}}/>
                       </View>
                       <View style={{paddingTop:15}} > 
                              <Text style={{fontFamily:"Bold",color:'grey',fontSize:18}}> Résultats</Text>
               
                          </View>
                     </View>

                     </View>

            
                   <ScrollView  style={{paddingTop:10}} >
                <View style={{alignItems:'center',paddingBottom:10}} > 
                {this.renderflatlistProduct()}
                </View>
              </ScrollView>
                  
                
               
        </SafeAreaView>
        
    );

  }
    

  }
}
