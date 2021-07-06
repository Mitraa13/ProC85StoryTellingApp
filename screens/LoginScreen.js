import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import firebase from "firebase";
import * as Google from 'expo-google-app-auth';

export default class LoginScreen extends Component {

  signInWithGoogleAsync = async() => {
    try{
      const result = await Google.logInAsync({
        behavior: 'web',
        androidClientId: '248210940024-1j5eupn2qvehoqq0ub66fuqvdond207e.apps.googleusercontent.com',
        iosClientId: '248210940024-nfouq4gonv8ogn5t5dud6rdtsep84rl0.apps.googleusercontent.com',
        scopes: ['profile','email']
      })
      if(result.type=="success"){
        this.onSignIn(result)
        return result.accessToken
      }else{
        return{cancelled:true}
      }
    }
    catch{
      console.log(err => 'error')
      return {err:true}
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Button 
            title='Signin with Google'
            onPress={()=>this.signInWithGoogleAsync()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
