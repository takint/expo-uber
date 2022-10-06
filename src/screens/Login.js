import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors, device, fonts, gStyle } from '../constants';

const Login = ({ navigation }) => {
  const onLoginPress = () => {};
  const onRegisterPress = () => {};
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={gStyle.container}>
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput style={{ height: 40 }} placeholder="Your email" />
        <Text>Password</Text>
        <TextInput
          style={{ height: 40 }}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Password"
        />
      </View>
      <View style={styles.actionsRow}>
        <Button
          title="Back"
          color={colors.greyAbbey}
          accessibilityLabel="Back button"
          onPress={onBackPress}
        />
        <Pressable
          style={{ ...gStyle.baseButton, backgroundColor: colors.blue }}
          onPress={onLoginPress}
        >
          <Text style={gStyle.buttonLabel}>Login</Text>
        </Pressable>
        <Button
          title="Register"
          accessibilityLabel="Register button"
          onPress={onRegisterPress}
        />
      </View>
    </View>
  );
};

Login.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column'
  },
  actionsRow: {
    ...gStyle.flexRow,
    justifyContent: 'space-evenly'
  }
});

export default Login;
