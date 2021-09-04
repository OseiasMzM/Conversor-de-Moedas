import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Image, TouchableOpacity
} from 'react-native';

// Imports
import Icon from 'react-native-vector-icons/Ionicons';

import Conversor from './src/Conversor/index';


// <Icon style = {styles.titleIcon} name="cash-outline" color="#555" size={24}></Icon>


// <Image style={{width: '50%', height: "25%"}} source={require('./undraw_personal_finance_tqcd.png')}></Image>


class App extends Component {
  render(){
    return (
      <View style = {{flex: 1}}>

        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style = {styles.viewTitle}>
          <View style = {styles.viewComponent}>
            <Text style = {styles.title}>Conversor de Moedas</Text>
          </View>
          <View 
          style = {{ marginTop: "4%" ,flexDirection: 'row',borderRadius: 10, width: "95%", height: 75, backgroundColor: '#fff',
           alignItems: 'center', justifyContent: 'flex-start', 
           shadowColor: "#000",shadowOffset: { width: 0, height: 4,}, shadowRadius: 10,
           shadowOpacity: 0.9, elevation: 6,
           
           }}>

            <Icon style = {{margin: 15}} 
            name="alert-circle-outline" color="#22c25f" size={34}></Icon>
            <View>
              <Text style={{fontSize: 14}}>Este aplicativo foi desenvolvido para</Text>
              <Text style={{fontSize: 14}}>fins educativos e pode ocorrer alguns bugs.</Text>
              <Text style={{fontSize: 12}}>Feito por <Text style={{fontWeight: 'bold', fontSize: 12}}>Oséias Mozdzen Martins</Text></Text>
            </View>
            
          </View>
        </View>

        <Conversor moedaA="USD" moedaB="BRL"/>

        {/*<View style = {{flex: 1, backgroundColor: '#c4c4', alignItems: 'center'}}> */}
          {/* <View 
          style = {{flexDirection: 'row',borderRadius: 10, width: "95%", height: "35%", backgroundColor: '#fff',
           alignItems: 'center', justifyContent: 'flex-start', 
           shadowColor: "#000", shadowOffset: { width: 0, height: 3,}, 
           shadowOpacity: 0.9, elevation: 5,
           
           }}>

            <Icon style = {{margin: 15}} 
            name="help-circle-outline" color="#22c25f" size={34}></Icon>
            <View>
              <Text style={{fontSize: 14}}>Este aplicativo foi desenvolvido para</Text>
              <Text style={{fontSize: 14}}>fins educativos e pode ocorrer alguns bugs.</Text>
              <Text style={{fontSize: 12}}>Feito por <Text style={{fontWeight: 'bold', fontSize: 12}}>Oséias Mozdzen</Text></Text>
            </View>
            <Icon style = {{margin: 25}} 
            name="chevron-forward-outline" color="#181818" size={18}></Icon>

          </View> */}
        {/* </View> */}
        

        
        
        

        {/* <View style={styles.viewButton}>
          <TouchableOpacity style={styles.touchButton}>
            <Text style={styles.touchText}>Converter</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewTitle: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  viewComponent: {
    flexDirection: 'row',
    marginTop: "4%",
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.5,
   },
  // viewButton: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems:'center',
  //   backgroundColor: '#fff'
  // },
  // touchButton: {
  //   width: '90%',
  //   height: '25%',
  //   backgroundColor: '#77dd88', //#04BF46  #0f6e42  #77dd77 #22c25f
  //   justifyContent: 'center', 
  //   alignItems: 'center',
  //   borderRadius: 100
  // },
  // touchText: {
  //   fontSize: 15,
  //   fontWeight: 'bold',
  //   color: '#fff',
  //   letterSpacing: 1
  // }
});

export default App;
