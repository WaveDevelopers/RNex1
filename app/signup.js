
import React, { Component } from 'react';
import { AppRegistry,StyleSheet,TouchableOpacity,Text,TextInput,View,Alert } from 'react-native';
import { Router, Scene,Actions } from 'react-native-router-flux';
import { Container, Header,Footer, Content, Form, Item, Icon, Input ,Button} from 'native-base';
import * as firebase from "firebase"
import {GoogleAuthProvider} from 'firebase' 

export default class root extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    componentWillMount(){
        var config = {
            apiKey: "AIzaSyDJAmFJlNpM_1yy21Gg65-rHZ-mEm4vgmg",
            authDomain: "test-fada6.firebaseapp.com",
            databaseURL: "https://test-fada6.firebaseio.com",
            projectId: "test-fada6",
            storageBucket: "",
            messagingSenderId: "680231701318"
          };
          firebase.initializeApp(config);        
    }
    
    SignUp = () => {
        
        console.log(this.state.email);
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
            console.log("Ok"); 
            Actions.login();
        }).catch((error)=>{ console.log(error); Alert.alert(error.message); })
    }

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
           <Header><Text style={styles.headtext}>Sign Up Screen</Text></Header>
           <Content style={ styles.container }>
                
                <Form>
                    <Item>
                        <Input placeholder="Full Name" />
                    </Item>
                    <Item>
                        <Input placeholder="Email Id" onChangeText={(email) => this.setState({email:email})} />
                    </Item>
                    <Item>
                        <Input placeholder="Password" onChangeText={(password) => this.setState({password:password})} />
                    </Item>
                    <Item>
                        <Input placeholder="Confirm Password" />
                    </Item>
                    <Item>
                        <Input placeholder="Contact Number"  />
                    </Item>
                    <Button onPress={() => this.SignUp()}><Text>Sign Up</Text></Button>
                </Form>
                
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
    text:{
        color:'#fff'
    },
    btn:{ 
        paddingBottom:20,
        flex:1,
    },
    headtext:{
        color:'#fff',
        fontSize:30,
    }
  });
  