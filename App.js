import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom : 'IBN ROCHD', 
    names: [  { id: 0,  name: 'Ben', },
    { id: 1, name: 'Susan', },  { id: 2,  name: 'Ben', },
    { id: 3, name: 'Susan', }, { id: 4,  name: 'Ben', },
    { id: 5, name: 'Susan', }, { id: 6,  name: 'Ben', },
    { id: 7, name: 'Susan', }, { id: 8,  name: 'Ben', },
    { id: 9, name: 'Susan', },     ],
    email: '',      password: '',
}
  }

  alertItemName = (item) => {   alert(item.name)   }
  handleEmail = (text) => {      this.setState({ email: text })   }
  handlePassword = (text) => {   this.setState({ password: text }) }
  login = (email, pass) => {
     alert('email: ' + email + ' password: ' + pass)  
}
componentWillMount = () => {
  this.animatedWidth = new Animated.Value(50)
  this.animatedHeight = new Animated.Value(100)
}
animatedBox = () => {
  Animated.timing(this.animatedWidth, {
     toValue: 200,  duration: 1000 }).start()
  Animated.timing(this.animatedHeight, {
     toValue: 500, duration: 500 }).start()
}

  maj = () => { this.setState({nom : 'ETM IBN ROCHD'})}
  render() {
    return (
      <View style={styles.container}>
        <Image style = {{ width: 200, height: 200 }}  
        source = {{uri:'https://www.ibnrochd.com/images/Logoibnrochd.png'}}   />
        <Text onPress={this.maj}>{this.state.nom}</Text>
        <TouchableOpacity style = { {backgroundColor:'#f00'}} 
        onPress = {this.animatedBox}>
            <Animated.View style = {[styles.box, { width: this.animatedWidth, height: this.animatedHeight }]}/>
         </TouchableOpacity>


        <View>
        
          {
               this.state.names.map((item, index) => (
                  <TouchableOpacity   key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>{item.name} </Text>
                  </TouchableOpacity>
               ))            }
               </View>
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
              
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit</Text>
            </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 23   
  },
  input: {      margin: 15,      height: 40,     borderColor: '#7a42f4',
  borderWidth: 1   },
submitButton: {      backgroundColor: '#7a42f4',
  padding: 10,      margin: 15,      height: 40,   },
submitButtonText:{      color: 'white'   },
text2: {  borderWidth: 1,  padding: 25,
  borderColor: 'black',   backgroundColor: 'red'   }

});
