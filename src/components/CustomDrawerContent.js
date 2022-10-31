import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import { colors, device, fonts } from '../constants';

const CustomDrawerContent = () => (
  <View style={styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CIICLO</Text>
      <Text>An toàn | Tiện lợi | Tiết kiệm</Text>
    </View>
    <View style={styles.containerVersion}>
      <Text style={styles.versionText}>{`v${Constants.manifest.version}`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  containerVersion: {
    bottom: device.iPhoneNotch ? 40 : 16,
    paddingHorizontal: 38,
    position: 'absolute',
    width: '100%'
  },
  versionText: {
    color: colors.grey,
    fontFamily: fonts.uberRegular,
    fontSize: 20,
    textAlign: 'right'
  }
});

export default CustomDrawerContent;
