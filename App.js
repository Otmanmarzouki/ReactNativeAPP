
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import  AppNavigator from './navigation/AppNavigator'


class  App extends React.Component {
  
  state= {
    isFontLoaded : false,
}

  async componentDidMount() {

    await Font.loadAsync({
     'Bold': require('./font/Montserrat-ExtraBold.ttf'),
     'Medium': require('./font/Montserrat-Medium.ttf'),
     'Regular': require('./font/Montserrat-Regular.ttf'),

    });
    this.setState({
      isFontLoaded: true
    })
  }
   
  render() {
    return (
      (this.state.isFontLoaded === true )? (<AppNavigator/>):(<AppLoading/>)
         );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;