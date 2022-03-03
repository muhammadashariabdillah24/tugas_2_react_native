/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Barang, Coba } from './Component/Barang';
import { Logins } from './Component/Login';

export default class App extends Component {

  render(){

    return(

      <View style = {{flex : 5, backgroundColor : 'red'}}>

        <StatusBar backgroundColor="blue"/>

        <Barang namaBelanja="================ Total Belanja ================" />
        <Coba usia='20' hoby='Progmming' />
        <Logins />
        {/* <Login /> */}
      </View>

    )

  }
}

