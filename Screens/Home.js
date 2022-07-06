import React from 'react';
import { Text, View ,Image,TouchableOpacity ,FlatList, SafeAreaView,TextInput,ImageBackground} from 'react-native';
import { ScrollView  } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 


import Categoryview from '../Common/Categoryview';
import Items from '../Common/Items';







class Home extends React.Component {
 
  
    constructor(props) {
        super(props);
        
        this.state = {
          productstobeSearched:'',
            NewProducts:[],
            PromoProducts:[],
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


    async fetchNewProducts() {
        this.setState({ loading: true });
        const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&orderby=date&order=desc`);
        const Newproducts = await response.json();
    
       this.setState({NewProducts: Newproducts})
       
     
   
      }
      async fetchPromoProducts() {
        this.setState({ loading: true });
        const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=625&per_page=100`);
        const Promoproducts = await response.json();
    
       this.setState({PromoProducts: Promoproducts})
       
     
   
      }



    renderflatlistNewProducts(){

        return(  <FlatList
          horizontal={true}
          nestedScrollEnabled 
          data={this.state.NewProducts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
            
        ) } /> )
      
            }
            renderflatlistPromoProducts(){

              return(  <FlatList
                horizontal={true}
                nestedScrollEnabled 
                data={this.state.PromoProducts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
                  
              ) } /> )
            
                  }


      componentDidMount() {
      
          this.fetchNewProducts();
          this.fetchPromoProducts()
     }

    
     componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = (state,callback)=>{
          return;
      };
  }
    render() {
        return (
            <SafeAreaView style={{flex:1}} >
                  <ImageBackground  source={require('../images/wave-haikei.png') }  resizeMode="cover"  style={{flex:1}}>


                  <View style={{borderBottomLeftRadius: 20,borderBottomRightRadius: 20, paddingBottom:20 }}>
        
        <View style={{ marginTop:40,alignItems:"center",marginVertical:30,paddingHorizontal:10}}>
            <View >
                <Image source={require('../images/logo.png')} style={{width:180,height:100}}/>
            </View>
            
        </View>
        <View style={{flexDirection:"row",alignSelf:'center',}}>
            <View style={{ flexDirection:"row", alignItems:"center", elevation:2,  backgroundColor:"#FFF", height:35, borderRadius:5, marginLeft:1 }}>
                <Icon name="ios-search" size={22} color="#4f4a4a" />
                    <TextInput placeholder="Search ..." style={{ fontFamily:"Medium",paddingHorizontal:10,fontSize:12,width:'70%'
                    }} onChangeText={text => this.setState({productstobeSearched:text})} />
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

<ScrollView   showsVerticalScrollIndicator={false} >
<View style={{paddingTop:10,paddingHorizontal:10}}>
<View style={{paddingBottom:10}}>

<Text style={{fontFamily:"Bold",fontSize:14,color:"black"}}>CATEGORIES</Text> 
</View>
<ScrollView  horizontal  showsHorizontalScrollIndicator={false}>
<View style={{flexDirection:'row',}}>
<Categoryview source={require('../images/hexagon.png') }  Logo={require('../images/maquillage.png')}  name={"MAQUILLAGE"} onPress={() => this.props.navigation.navigate('Maquillage')} />
<Categoryview source={require('../images/hexagon.png') }  Logo={require('../images/faceCare.png')}  name={" SOIN VISAGE"} onPress={() => this.props.navigation.navigate('SoinVisage')} />  
<Categoryview source={require('../images/hexagon.png') }  Logo={require('../images/bodyCare.png')}  name={"CORPS & BAIN"}  onPress={() => this.props.navigation.navigate('CorpsBain')}  />
<Categoryview source={require('../images/hexagon.png') }  Logo={require('../images/hair.png')}  name={"CHEVEUX"}  onPress={() => this.props.navigation.navigate('Cheveux')} />  
<Categoryview source={require('../images/hexagon.png') }  Logo={require('../images/parfum.png')}  name={"PARFUM"}  onPress={() => this.props.navigation.navigate('Parfum')} />  
</View>
</ScrollView>
</View>
<View style={{paddingTop:40 ,paddingHorizontal:10}}>
<View style={{paddingBottom:10}}>

<Text style={{fontFamily:"Bold",fontSize:14,color:"black"}}>NOUVEAUTÉS</Text> 
</View>
<View> 
 {this.renderflatlistNewProducts()}
</View>
<View style={{paddingBottom:10}}>
<Text style={{fontFamily:"Bold",fontSize:14,color:"black"}}>SUMMER DAYS</Text> 
 </View>
<View> 
      {this.renderflatlistPromoProducts()}
    </View>

</View>



</ScrollView>

                  </ImageBackground>
         
             
                
      </SafeAreaView> 
           
         
        );
      }
     
    }
   
  
    export default Home;