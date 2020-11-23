import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollViewComponent,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Home from './Home';
import Login from './pages/Login';
import Register from './Register';

export default class App extends Component {
  render() {
    return (
      <Login></Login>
      // <Register></Register>
      // <Home />
    );
  }
}

const styles = StyleSheet.create({});
