import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants';


class App extends Component {
  
  //exemplo de validacao de login
  async validateLogin(user,password){
    await fetch(
      'https://reqres.in/api/login', 
      {
          method: 'POST',
          headers: 
          {
             Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "1234"
            })
      }).then(response => {
          if (response.status === 200) {
            console.log('sucesso');
            response.text().then(function(result){ 
              console.log(result); 
              });
          } else {
            throw new Error('Usuário ou senha inválidos');
          }
      })
      .then(response => {
        console.debug(response);
      }).catch(error => {
        console.error(error);
      });
  }

  //get simples
  async executeGet(){
    //get síncrono com o uso do fetch
    await fetch("https://reqres.in/api/users?page=1")
    .then(response => {
          if (response.status === 200) {
            console.log('sucesso');
            response.text().then(function(result){ 
              console.log(result); 
              });
          } else {
            throw new Error('Erro ao consumir a API!');
          }
      })
      .then(response => {
        console.debug(response);
      }).catch(error => {
        console.error(error);
      });
  }
  
  
  //post simples
  async executePost(){
    //post síncrono com o uso do fetch
    await fetch(
      'https://reqres.in/api/users', 
      {
          method: 'POST',
          headers: 
          {
             Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': 'morpheus',
            'job': 'leader'
            })
      }).then(response => {
          if (response.status === 201) {
            console.log('sucesso');
            response.text().then(function(result){ 
              console.log(result); 
              });
          } else {
            throw new Error('Erro ao consumir a API!');
          }
      })
      .then(response => {
        console.debug(response);
      }).catch(error => {
        console.error(error);
      });

  }

  
  
  render(){
    return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Teste do POST</Text>

      <TouchableOpacity
        onPress={()=>{
          this.executePost()
        }}>
          <Text style={styles.button}>Executar POST</Text>
        </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{
          this.executeGet()
        }}>
          <Text style={styles.button}>Executar GET</Text>
        </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{
          this.validateLogin()
        }}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>

    </View>
  );
  }
  
} export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    borderColor:'black',
    borderWidth: 1,
    fontSize: 15,
    margin:10,
    backgroundColor: 'grey',
    textAlign: 'center',
    fontFamily: Platform.OS==='ios'?'AvenirNext-Regular':'Roboto'
  }
});
