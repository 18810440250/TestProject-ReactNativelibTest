/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NativeModules,
  View
} from 'react-native';

var BGNativeModuleExample = NativeModules.BGNativeModuleExample;
BGNativeModuleExample.testPrint("Jack",{
  height:'1.78m',
  weight:'7kg'
});
BGNativeModuleExample.getNativeClass(name => {
  console.log("nativeClass:",name);
});
BGNativeModuleExample.testRespondMethod("dealloc")
.then(result => {
  console.log("result is",result);
})
.catch(error =>{
  console.log(error);
});
console.log("BGModuleName value is" ,BGNativeModuleExample.BGModuleName);
NativeAppEventEmitter.addlistener(BGNativeModuleExample.TestEventName,info=>{
  console.log(info);
});
export default class TestProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);
