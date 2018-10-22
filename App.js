import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, AppRegistry, TextInput, Linking } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30, }}>Adriana</Text>
        <View style={{height:15}}/>
          <Image
            style={{height:200, width:150,}} 
            source={require('./pictures/foto.png')} />
        <View style={{height:15}}/>
        <Button style={{height:15}}
          title="My profile"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { text: 'I am trying to get this job done' };  
  }
  static navigationOptions = {
    title: 'My Profile',
};
  
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.row}>
            <Image
              style={styles.myQuadroPhoto} 
              source={require('./pictures/hello.png')} />
            <Text style={{fontSize:20, flex:1}}> Adriana</Text>
          </View>
          <Text style={{fontSize:8, flex:1}}> About me</Text>
          <TextInput
            style={{flex:2,height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            //make it save
          /> 
          <Button style={{flex:1}}
            onPress={ ()=>{ Linking.openURL('https://github.com/20152658/app')}}
            title="My github profile"
            accessibilityLabel="Learn more!"
          />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex:2,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myQuadroPhoto: {
    flex:1,
    width:100,
    height:100,
  },
});
