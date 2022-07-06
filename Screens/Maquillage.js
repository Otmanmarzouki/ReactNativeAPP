import React from 'react';
import {  Text, View ,Image,TouchableOpacity ,FlatList, SafeAreaView,TextInput} from 'react-native';
import { ScrollView  } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 
import Items from '../Common/Items';
import Loadingview from '../Common/Loadingview';











class Maquillage extends React.Component {
 

    constructor(props) {
        super(props);
        
        this.state = {
          productsPinceaux :[],
          productsSourcils: [],
          productsLevres: [],
          ProductsPaletteMaquillage: [],
          ProductsYeux:[],
          ProductsTeint:[],
          ProductsOngle : [],
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
    async fetchProductsPinceaux() {
      this.setState({ loading: true });
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=80&per_page=100`);
      const Productspinceaux = await response.json();
  
     this.setState({productsPinceaux: Productspinceaux})
     
 
    }
    async fetchProductsSourcils() {
      
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=79&per_page=100`);
      const Productssourcils = await response.json();
  
     this.setState({productsSourcils: Productssourcils})
  
 
    }

    async fetchProductsLevres() {
     
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=78&per_page=100`);
      const productslevres = await response.json();
  
     this.setState({productsLevres: productslevres})
     
 
    }
    async fetchProductsPaletteMaquillage() {
      
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=77&per_page=100`);
      const Productspalettemaquillage = await response.json();
  
     this.setState({ProductsPaletteMaquillage: Productspalettemaquillage})
   
 
    }

    async fetchProductsYeux() {
      
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=76&per_page=100`);
      const Productsyeux = await response.json();
  
     this.setState({ProductsYeux: Productsyeux})
     
   
 
    }
    async fetchProductsTeint() {
     
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=75&per_page=100`);
      const Productsteint = await response.json();
  
     this.setState({ProductsTeint: Productsteint})
     
   
 
    }
    async fetchProductsOngle() {
      
      const response = await fetch(`https://palmarosashop.com/wp-json/wc/v2/products?consumer_key=ck_f270284678424c444f4d00fbaaecd87007888021&consumer_secret=cs_f8fd8ee2fa1889cf2d2ad6b9a87281e3c282e199&category=81&per_page=100`);
      const ProductsOngle = await response.json();
  
     this.setState({ProductsOngle: ProductsOngle})
    
     this.setState({ loading: false });
 
    }

    renderflatlistPinceaux(){

      return(  <FlatList
        horizontal={true}
        nestedScrollEnabled 
        data={this.state.productsPinceaux}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price}  onPress={() => this.props.navigation.navigate('Details',{ item})} />
          
      ) } /> )
    
          }
  


          renderflatlistSourcils(){

            return(  <FlatList
              horizontal={true}
              nestedScrollEnabled 
              data={this.state.productsSourcils}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price}  onPress={() => this.props.navigation.navigate('Details',{ item})} />
                
            ) } /> )
          
                }

                renderflatlistLevres(){

                  return(  <FlatList
                    horizontal={true}
                    nestedScrollEnabled 
                    data={this.state.productsLevres}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
                      
                  ) } /> )
                
                      }
      
                  renderFlatlistPaletteMaquillage(){

                        return(  <FlatList
                          horizontal={true}
                          nestedScrollEnabled 
                          data={this.state.ProductsPaletteMaquillage}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({ item, index }) => (
                            <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
                            
                        ) } /> )
                      
                            }

                            renderFlatlistYeux(){

                              return(  <FlatList
                                horizontal={true}
                                nestedScrollEnabled 
                                data={this.state.ProductsYeux}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                  <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price}  onPress={() => this.props.navigation.navigate('Details',{ item})}/>
                                  
                              ) } /> )
                            
                                  }
             
                                  renderFlatlistTeint(){

                                    return(  <FlatList
                                      horizontal={true}
                                      nestedScrollEnabled 
                                      data={this.state.ProductsTeint}
                                      keyExtractor={(item, index) => index.toString()}
                                      renderItem={({ item, index }) => (
                                        <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price}  onPress={() => this.props.navigation.navigate('Details',{ item})} />
                                        
                                    ) } /> )
                                  
                                        }                   

                                        renderFlatlistOngle(){

                                          return(  <FlatList
                                            horizontal={true}
                                            nestedScrollEnabled 
                                            data={this.state.ProductsOngle}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({ item, index }) => (
                                              <Items source={{uri: item.images[0].src}} name={item.name}  price= {item.price} onPress={() => this.props.navigation.navigate('Details',{ item})} />
                                              
                                          ) } /> )
                                        
                                              }   



      componentDidMount() {
        
        this.fetchProductsPinceaux();
        this.fetchProductsSourcils();
        this.fetchProductsLevres();
        this.fetchProductsPaletteMaquillage();
        this.fetchProductsYeux();
        this.fetchProductsTeint();
        this.fetchProductsOngle()
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
                                    <Text style={{fontFamily:"Bold",fontSize:16,color:"grey"}}>MAQUILLAGE</Text> 
                             </View>
                        </View>
                        <View style={{flexDirection:"row",alignSelf:'center',}}>
                            <View style={{ flexDirection:"row", alignItems:"center", elevation:2,  backgroundColor:"#FFF", height:35, borderRadius:5, marginLeft:1 }}>
                                <Icon name="ios-search" size={22} color="#4f4a4a" />
                                    <TextInput placeholder="Search ..." style={{ fontFamily:"Medium",paddingHorizontal:10,fontSize:12,width:"70%",
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
                <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> PINCEAUX ET ACCESSOIRES </Text>
               
                </View>

                <View style={{paddingHorizontal:10}}> 
                 {this.renderflatlistPinceaux()}
                </View>
                  

                <View style={{paddingHorizontal:10}}> 
                       <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> SOURCILES </Text>
               </View>

               <View style={{paddingHorizontal:10}}> 
                 {this.renderflatlistSourcils()}
                </View>

                <View style={{paddingHorizontal:10}}> 
                       <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> LÈVRES </Text>
               </View>

               <View style={{paddingHorizontal:10}}> 
                 {this.renderflatlistLevres()}

                </View>
                <View style={{paddingHorizontal:10}}> 
                       <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> PALLETTE MAQUILLAGE </Text>
               </View>

               <View style={{paddingHorizontal:10}}> 
                 {this.renderFlatlistPaletteMaquillage()}

                </View>
                <View style={{paddingHorizontal:10}}> 
                       <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> YEUX </Text>
               </View >

               <View style={{paddingHorizontal:10}}> 
                 {this.renderFlatlistYeux()}

                </View>
                <View style={{paddingHorizontal:10}}>  
                       <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> TEINT </Text>
               </View>

               <View style={{paddingHorizontal:10}} > 
                 {this.renderFlatlistTeint()}

                </View>
                <View style={{paddingHorizontal:10}}> 
                       <Text style={{fontFamily:"Bold",color:'grey',fontSize:12}}> ONGLE </Text>
               </View>

               <View style={{paddingHorizontal:10}}> 
                 {this.renderFlatlistOngle()}

                </View>
               
               
                </ScrollView>
                
                


      </SafeAreaView> 
           
         
        );
      }

    }



}

export default Maquillage;