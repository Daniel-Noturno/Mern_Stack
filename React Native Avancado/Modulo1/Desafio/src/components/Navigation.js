import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const bgPostColor = '#F5FCFF';

const styles = StyleSheet.create({
  containerNavi: {
    alignItems: 'center',
    backgroundColor: bgPostColor,
    height: 100,
    justifyContent: 'flex-end',
    marginBottom: 2,
    paddingBottom: 10,
    width: '100%',
  },
  textNavi: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const Navigation = () => (
  <View style={styles.containerNavi}>
    <Text style={styles.textNavi}>GoNative App</Text>
  </View>
);

export default Navigation;
