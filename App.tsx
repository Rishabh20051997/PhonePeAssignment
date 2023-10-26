/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Navigator from './src/navigator/navigator';



function App(): JSX.Element {

  return (
    <View style={styles.mainContainer}>
     <Navigator/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  mainContainer: { flex: 1}
})
