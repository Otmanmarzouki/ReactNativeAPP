import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View, Image } from "react-native";

class Loadingview extends Component {
  render() {
    return (
      <View style={styles.container}>
           <View>
             <Image source={require('../images/palmarosa-logo.jpg')} style={{width:120,height:80,marginBottom:40}}/>
             </View>
        <ActivityIndicator size="large" color="grey"/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  
});

export default Loadingview;