import * as React from 'react';

import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet} from 'react-native';





class FindMe extends React.Component {
  constructor (props){
    super(props);

  this.state = { 
   mapRegion: null,
 
}

}


 componentDidMount() {



}


    render(){
     
        return (

    
     <MapView  
      provider={PROVIDER_GOOGLE}  style={styles.map}  
        showsUserLocation={true}
          region={{
            latitude: 33.55530781015205,
            longitude: -7.628567269312001,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221, }}
    >

    <Marker  
      coordinate={{latitude : 33.55530781015205,
        longitude: -7.628567269312001,}}
        title={"PALMAROSA"}
    >
     
    </Marker>

  </MapView>


  
            );

        }
    
 
}


const styles = StyleSheet.create({
  
  map: {
    

    flex: 1,
    alignSelf: 'stretch',
   

  },
});

export default FindMe;


