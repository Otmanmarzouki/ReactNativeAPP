import React from 'react';
import { Text, View ,Image,TouchableOpacity ,FlatList, SafeAreaView,TextInput} from 'react-native';
import { ScrollView  } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 

import Items from '../Common/Items';
import Loadingview from '../Common/Loadingview';






class SoinVisage extends React.Component {
  

    constructor(props) {
        super(props);
        
        this.state = {
          ProductsMasque: [],
          ProductsDemaquillantNetoyant:[],
          ProductsSolaire:[],
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
    async fetchProductsMasque() {
      this.setState({ loading: true });
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=173&per_page=100`);
      const Productsmasque = await response.json();
  
     this.setState({ProductsMasque: Productsmasque})

   
 
    }

    async fetchProductsDemaquillantNetoyant() {
     
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=174&per_page=100`);
      const Productsdemaquillantnetoyant = await response.json();
  
     this.setState({ProductsDemaquillantNetoyant: Productsdemaquillantnetoyant})
     
   
 
    }
    async fetchProductsSolaire() {
      
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=480&per_page=100`);
      const Productssolaire = await response.json();
  
     this.setState({ProductsSolaire: Productssolaire})
    
   
 
    }

    async fetchProductsSolaire() {
     
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=480&per_page=100`);
      const Productssolaire = await response.json();
  
     this.setState({ProductsSolaire: Productssolaire})
     this.setState({ loading: false });
   
 
    }
    
    renderflatlistMasque(){

      return(  <FlatList
        horizontal={true}
        nestedScrollEnabled 
        data={this.state.ProductsMasque}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
          
      ) } /> )
    
          }
          renderflatlistDemaquillantNetoyant(){

            return(  <FlatList
              horizontal={true}
              nestedScrollEnabled 
              data={this.state.ProductsDemaquillantNetoyant}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
                
            ) } /> )
          
                }
                renderflatlistSolaire(){

                  return(  <FlatList
                    horizontal={true}
                    nestedScrollEnabled 
                    data={this.state.ProductsSolaire}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})}  />
                      
                  ) } /> )
                
                      }
         
   


      componentDidMount() {
        
        this.fetchProductsMasque();
        this.fetchProductsDemaquillantNetoyant();
        this.fetchProductsSolaire()
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
          <SafeAreaView style = {{backgroundColor:"#f6f5f4",flex:1}} >
          <View style={{ backgroundColor:"#fff",borderBottomLeftRadius: 20,borderBottomRightRadius: 20, paddingBottom:20 }}>
                            <View style={{    marginTop:40,  alignItems:"center",  marginVertical:30,paddingHorizontal:10}}>
                                <View >
                                    <Image source={require('../images/palmarosa-logo.jpg')} style={{width:180,height:100}}/>
                                </View>
                                <View style={{alignSelf:'center',}}>
                                    <Text style={{fontFamily:"Bold",fontSize:16,color:"grey"}}>SOIN VISAGE</Text> 
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
                <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> MASQUE </Text>
               
                </View>

                <View style={{paddingHorizontal:10}}> 
                 {this.renderflatlistMasque()}
                </View>

                <View style={{paddingHorizontal:10}}> 
                <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> DEMAQUILLANT ET NETOYANT </Text>
               
                </View>

                <View style={{paddingHorizontal:10}}> 
                 {this.renderflatlistDemaquillantNetoyant()}
                </View>
                
                <View style={{paddingHorizontal:10}}> 
                <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> SOLAIRE </Text>
               
                </View>

                <View style={{paddingHorizontal:10}}> 
                 {this.renderflatlistSolaire()}
                </View>
                
                </ScrollView>
      </SafeAreaView> 
           
         
        );
      }

    }



}

export default SoinVisage;