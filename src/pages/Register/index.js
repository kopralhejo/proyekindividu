import React from 'react'
import { StyleSheet, Text, View , TextInput} from 'react-native'

export default function Register() {
    return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}} />
      <View
        style={{
          flex: 15,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#9ea7aa"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#9ea7aa"
            onChangeText={(text) => this.setState({password: text})}
            secureTextEntry
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Nama"
            placeholderTextColor="#9ea7aa"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="No Handphone"
            placeholderTextColor="#9ea7aa"
            onChangeText={(text) => this.setState({password: text})}
            secureTextEntry
          />
        </View>
        <View
          style={{
            backgroundColor: '#4982C1',
            width: '80%',
            borderRadius: 5,
            height: 50,
            alignItems: 'center',
            alignContent: 'center',
            paddingTop: 15,
          }}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
            SUBMIT
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#9ea7aa',
  },
  inputText: {
    height: 50,
    color: 'black',
  },
});
