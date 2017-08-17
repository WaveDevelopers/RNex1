
import React, { Component } from 'react';
import { AppRegistry,StyleSheet,TouchableOpacity,Text,TextInput,View } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Container, Header,Footer, Content, Form, Item, Icon, Input ,Button} from 'native-base';

export default class root extends Component {

  render() {
    return (
       <Container>
           <Header><Text style={styles.headtext}>First App</Text></Header>
           <Content style={ styles.container }>
               
               <View style={ styles.btn }>
               <Button iconLeft rounded onPress={()=>Actions.signup()}>
               <Icon name='lock' />
                    <Text style={styles.text}>Sign Up</Text>
                </Button>
               </View>
               
                <View style={styles.btn2}>
                <Button iconLeft rounded onPress={()=>Actions.login()}>
                <Icon name='lock' />
                    <Text style={styles.text}>Login</Text>
                </Button>
                </View> 
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
    headtext:{
        color:'#fff',
        fontSize:30,
    },
    btn:{ 
        paddingBottom:20,
        flex:1,
    }
  });
  