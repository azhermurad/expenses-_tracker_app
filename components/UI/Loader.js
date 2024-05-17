import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { GlobalColors } from '../../constants/colors';

const Loader = () => (
  <View style={[styles.container]}>
    <ActivityIndicator size="large" color="white" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor: GlobalColors.primary700
    

  },

});

export default Loader;