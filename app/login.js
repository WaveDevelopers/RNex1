
import React, { Component } from 'react';
import { AppRegistry,StyleSheet,TouchableOpacity,Text,TextInput,View } from 'react-native';
import { Router, Scene,Actions } from 'react-native-router-flux';
import { Container, Header,Footer, Content, Form, Item, Icon, Input ,Button} from 'native-base';
import * as firebase from "firebase"
import {GoogleAuthProvider} from 'firebase' 

export default class root extends Component {
    
    loginWithGoogle = () =>{
        const provider = new firebase.auth().GoogleAuthProvider()
        firebase.signInWithPopup(provider).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err)
        })
    }

  render() {
    return (
       <Container>
           <Header><Text style={styles.headtext}>Login Screen</Text></Header>
           <Content style={ styles.container }> 
                <Form> 
                    <Item>
                        <Input placeholder="Email Id" />
                    </Item>
                    <Item>
                        <Input placeholder="Password" />
                    </Item> 
                </Form>
                <Button onPress={() => this.loginWithGoogle()}></Button>
           </Content>
           <Footer/>
       </Container>
    );
  }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,  
      backgroundColor: '#F5FCFF',
      paddingTop:100,
      paddingLeft:50,
    },
    headtext:{
        color:'#fff',
        fontSize:30,
    }
  });
  