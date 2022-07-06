import React from 'react'
import {View,Image,StyleSheet,SafeAreaView,} from 'react-native'


import { WebView } from 'react-native-webview';





export default class  WebViewScreenPayment extends React.Component {
  
  constructor(props) {
    super(props);
     this.state = {
    
    
    };

}
 
  render(){
    
      return(

        <SafeAreaView style = {{backgroundColor:"#fff",flex:1}} >
    
    <WebView 
            style = {{flex:1}}
              source={{ uri: this.props.route.params.url}}
            />
                
               
        </SafeAreaView>
        
    );

  }
}

