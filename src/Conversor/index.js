import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, FlatList, ActivityIndicator,
  StatusBar, Image, TouchableOpacity, TextInput, Keyboard
} from 'react-native';

import api from '../services/api';

//https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=8d71548276b0f34e87e8
// > convert?q=USD_BRL&compact=ultra&apiKey=8d71548276b0f34e87e8

import { TextInputMask } from 'react-native-masked-text'


class Conversor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0
        };

        this.converter = this.converter.bind(this);

    }

    async converter() {
        let de_para = this.state.moedaA + '_' + this.state.moedaB;
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=8d71548276b0f34e87e8`); //buscar
        let cotacao = response.data[de_para];
                  
        //Fechar automaticamente

        Keyboard.dismiss();
        console.log(this.state.moedaA);
        let resultado = (cotacao * parseFloat(this.state.moedaB_valor));

        this.setState({
            valorConvertido: resultado.toFixed(2)
        });       
    }     
    

 render(){



    const { moedaA, moedaB } = this.props;

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Converter {moedaA} para {moedaB}</Text>

  
        <TextInput  placeholder="Dólar americano" placeholderTextColor="#c9c9c9"
            style={styles.areaInput}
            onChangeText={ (moedaB_valor)=> this.setState({moedaB_valor})}
            keyboardType="numeric"
        />
        <ActivityIndicator animating={this.state.isLoading} />




        <Text style={styles.resultado}>
        $ { (this.state.moedaB_valor === 0) ? '   ' : this.state.moedaB_valor} dólares são
        R$ <Text style={{fontWeight: 'bold'}}>{ (this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}</Text>
        </Text> 




        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.touchButton} onPress={this.converter}>
            <Text style={styles.touchText}>Converter</Text>
          </TouchableOpacity>

        </View>
  
        {/* <Text>Cotação Dólar hoje R$ {this.cotacao}</Text> */}
    </View>
   );
 }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 21,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: '#262626'
    },
    areaInput: {
        marginTop: 15,
        width: '90%',
        height: 45,
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        textAlign: 'center',
        fontSize: 14,
        color: '#181818',
    },
    resultado:{
        marginTop: 5,
        fontSize: 20,
        fontWeight: '900',
        color: '#6C6C6C',
        fontStyle: "italic"
    },
    viewButton: {
        marginTop: '45%',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff'
    },
    touchButton: {
        width: '90%',
        height: '55%',
        backgroundColor: '#77dd88', //#04BF46  #0f6e42  #77dd77 #22c25f
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 100
    },
    touchText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1
    }
});
export default Conversor;