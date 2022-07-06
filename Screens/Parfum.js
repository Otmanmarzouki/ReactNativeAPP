import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity ,FlatList, SafeAreaView,TextInput} from 'react-native';
import { ScrollView  } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 
import Items from '../Common/Items';
import Loadingview from '../Common/Loadingview';







class ParfumScreen extends React.Component {
 

    constructor(props) {
        super(props);
        
        this.state = {
          ProductsParfumHomme: [],
          ProductsParfumHomme: [],
          loading:false,
          productstobeSearched:'',
          errorMsg:''

             
        
        };
      
      
        
    }
    _handleSearch() {
      if (!this.state.productstobeSearched.trim()) {
        this.setState({errorMsg:'Ce champs ne doit pas être vide '})
        return;
      }
   this.props.navigation.navigate('Search',{productname : this.state.productstobeSearched})
   
   }
    async fetchProductsParfumHomme() {
      this.setState({ loading: true });
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=167&per_page=100`);
      const ProductsparfumHomme = await response.json();
  
     this.setState({ProductsParfumHomme: ProductsparfumHomme})
     
   
 
    }

    async fetchProductsParfumFemme() {
     
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=163&per_page=100`);
      const ProductsparfumFemme = await response.json();
  
     this.setState({ProductsParfumFemme: ProductsparfumFemme})
     this.setState({ loading: false });
   
 
    }


    renderflatlistProductsParfumHomme(){

      return(  <FlatList
        horizontal={true}
        nestedScrollEnabled 
        data={this.state.ProductsParfumHomme}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
          
      ) } /> )
    
          }
          

          renderflatlistProductsParfumFemme(){

            return(  <FlatList
              horizontal={true}
              nestedScrollEnabled 
              data={this.state.ProductsParfumFemme}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
                
            ) } /> )
          
                }


      componentDidMount() {
       
        this.fetchProductsParfumHomme();
        
        this.fetchProductsParfumFemme()
     }

     componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = (state,callback)=>{
          return;
      };
  }
    
      
    render() {
      if(this.state.loading){
        return(

          <SafeAreaView style = {{backgroundColor:"#fff",flex:1}} >
              <View style = {{justifyContent:'center',alignItems:'center',flex:1}}>
              <Loadingview/>
              </View>
         
         </SafeAreaView>
        )
  

}else{
        return (
          <SafeAreaView style = {{backgroundColor:"#f6f5f4", flex:1}} >
          <View style={{ backgroundColor:"#fff",borderBottomLeftRadius: 20,borderBottomRightRadius: 20, paddingBottom:20 }}>
                        <View style={{    marginTop:40,  alignItems:"center",  marginVertical:30,paddingHorizontal:10}}>
                            <View >
                                <Image source={require('../images/palmarosa-logo.jpg')} style={{width:180,height:100}}/>
                            </View>
                            <View style={{alignSelf:'center',}}>
                                    <Text style={{fontFamily:"Bold",fontSize:16,color:"grey"}}>PARFUM</Text> 
                             </View>
                            
                        </View>
                        <View style={{flexDirection:"row",alignSelf:'center',}}>
                            <View style={{ flexDirection:"row", alignItems:"center", elevation:2,  backgroundColor:"#FFF", height:35, borderRadius:5, marginLeft:1 }}>
                                <Icon name="ios-search" size={22} color="#4f4a4a" />
                                    <TextInput placeholder="Search ..." style={{ fontFamily:"Medium",paddingHorizontal:10,fontSize:12 ,width:'70%'
                                    }}  onChangeText={text => this.setState({productstobeSearched:text})}
                                    />
                                    </View>
                                    <View style={{ alignItems:"center", elevation:2, width:"15%", backgroundColor:"#f11290",marginLeft:10, height:35,borderRadius:5, justifyContent:"center"}}>
                                    <TouchableOpacity  onPress={() => this._handleSearch()}> 
                                    <MaterialIcons name="sort" size={24} color="#fff"   style={{ width:18,height:25 }}/>
                                    </TouchableOpacity>
                                      
                                    </View>
                        </View>
                        <View style={{alignSelf:'center',}}>
                        <Text style={{fontFamily:"Medium",fontSize:12,color:"red"}}>{this.state.errorMsg}</Text> 
                             </View>
                        </View>
                <ScrollView >
               


                <View style={{paddingHorizontal:10}}> 
                <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> PARFUM HOMME </Text>
               
                </View>

                <View style={{paddingHorizontal:10}}> 
                 {this.renderflatlistProductsParfumHomme()}
                </View >

                <View style={{paddingHorizontal:10}}> 
                <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> PARFUM FEMME </Text>
               
                </View>

                <View style={{paddingHorizontal:10}}> 
                 {this.renderflatlistProductsParfumFemme()}
                </View>
                  

               

               
                </ScrollView>
                
                




      </SafeAreaView> 
           
         
        );
      }

    }



}

export default ParfumScreen;