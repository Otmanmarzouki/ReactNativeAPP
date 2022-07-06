

import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-ico';
import Home from '../Screens/Home';
import Maquillage from '../Screens/Maquillage';
import Parfum from '../Screens/Parfum';
import SoinVisage from '../Screens/SoinVisage';
import CorpsBain from '../Screens/CorpsBain';
import Hair from '../Screens/Hair';
import Details from '../Screens/Details';
import CartScreen from '../Screens/CartScreen';
import BillingShipping from '../Screens/BillingShipping';
import SearchScreen from '../Screens/SearchScreen';
import AboutUsScreen from '../Screens/AboutUsScreen';
import WebViewScreenPayment from '../Screens/WebViewScreenPayment';


const HomeStack = createStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
     <HomeStack.Screen name="ACCUEIL" component={Home} options={{ headerShown:false }} />
  <HomeStack.Screen name="Maquillage" component={Maquillage} options={{ headerShown:false }} />
  <HomeStack.Screen name="SoinVisage" component={SoinVisage} options={{ headerShown:false }} />
  <HomeStack.Screen name="Cheveux" component={Hair}  options={{ headerShown:false }}/>
  <HomeStack.Screen name="Parfum" component={Parfum}  options={{ headerShown:false }}/>
  <HomeStack.Screen name="CorpsBain" component={CorpsBain}  options={{ headerShown:false }}/>
  <HomeStack.Screen name="Details" component={Details}  options={{ headerShown:false }}/>
  <HomeStack.Screen name="Cart" component={CartScreen}  options={{ headerShown:false }}/>
  <HomeStack.Screen name="Infos" component={BillingShipping}  options={{ headerShown:false }}/>
  <HomeStack.Screen name="Search" component={SearchScreen}  options={{ headerShown:false }}/>
 
    </HomeStack.Navigator>
  );
}
function CartStackScreen() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Cart" component={CartScreen}  options={{ headerShown:false }}/>
      <HomeStack.Screen name="Infos" component={BillingShipping}  options={{ headerShown:false }}/>
      <HomeStack.Screen name="WebView" component={WebViewScreenPayment}  options={{ headerShown:false }}/>
 
    </HomeStack.Navigator>
  );
}
function PlusStackScreen() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="PLUS" component={AboutUsScreen}  options={{ headerShown:false }}/>
     </HomeStack.Navigator>
  );
}



const Tab = createBottomTabNavigator();
export default function AppNavigator() {

  return (
    <NavigationContainer>

    
    <Tab.Navigator tabBarOptions={{activeTintColor: '#f11290',inactiveTintColor: 'grey',labelStyle: { fontFamily: "Bold",fontSize:8 }, style:{paddingBottom:7, height: 65, paddingHorizontal:5} }}>
<Tab.Screen name='ACCUEIL'   component={HomeStackScreen} options={{  tabBarIcon: ({ focused, color, size }) => {
        const icon = focused ? 'home' : 'home';
        return (
          <Icon name={icon} color={color} width={30} height={30}  group="ui-interface"  />
        ); }
       }}  />
      
      

       <Tab.Screen name='MON PANIER' component={CartStackScreen}    options={{
          tabBarIcon: ({ focused, color }) => {
            const icon = focused ? 'shopping-cart' : 'shopping-cart';
            return (
              <Icon name={icon} color={color} width={30} height={30} group="ui-interface"/>
            );
          }
        }} />  

<Tab.Screen name='PLUS' component={PlusStackScreen}    options={{
          tabBarIcon: ({ focused, color }) => {
            const icon = focused ? 'squares' : 'squares';
            return (
              <Icon name={icon} color={color} width={30} height={30} group="basic"/>
            );
          } 
        }} />  
    </Tab.Navigator>
    </NavigationContainer>
  )
}

