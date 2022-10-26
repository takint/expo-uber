import PropTypes from 'prop-types';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  Pressable
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import { colors, device, fonts, gStyle } from '../constants';
import { useState } from 'react';

const TripBooking = ({ navigation }) => {
  const [pickedDateTime, setPickedDateTime] = useState(new Date(1598051730000));
  const [pickerMode, setPickerMode] = useState('date');
  const [showDate, setShow] = useState(false);
  const onSubmitPress = () => {};

  const showDateTimePicker = (mode) => {
    setPickerMode(mode);
    setShow(true);
  };

  const onDatePickerChange = (evt, selectedDate) => {
    setShow(false);
    setPickedDateTime(selectedDate);
  };

  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={gStyle.container}>
      <ScrollView style={gStyle.container}>
        <View style={styles.container}>
          <Text>Full Name</Text>
          <TextInput style={styles.textInputField} placeholder="Full Name" />
          <Text>Email</Text>
          <TextInput style={styles.textInputField} placeholder="Your email" />
          <Text>Phone Numbers</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="(###) ### ####"
          />
          <Text>Facebook Account của bạn là gì</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="facebook.com/your_facebook_id"
          />
          <Text>Ngày chuyển</Text>
          <TextInput
            style={styles.textInputField}
            value={pickedDateTime.toLocaleDateString()}
            onPressIn={() => showDateTimePicker('date')}
          />
          <Text>Giờ chuyển</Text>
          <TextInput
            style={styles.textInputField}
            value={pickedDateTime.toLocaleTimeString()}
            onPressIn={() => showDateTimePicker('time')}
          />
          {showDate && (
            <DateTimePicker
              testID="moveDateTimePicker"
              value={pickedDateTime}
              mode={pickerMode}
              is24Hour={true}
              onChange={onDatePickerChange}
            />
          )}
          <Text>Bạn muốn chuyển từ đâu</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="Moving FROM Address"
          />
          <Text>Bạn muốn chuyển đến đâu</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="Moving TO Address"
          />
        </View>
        <View style={styles.actionsRow}>
          <Button
            title="Trở lại"
            color={colors.greyAbbey}
            accessibilityLabel="Back button"
            onPress={onBackPress}
          />
          <Pressable
            style={{ ...gStyle.baseButton, backgroundColor: colors.blue }}
            onPress={onSubmitPress}
          >
            <Text style={gStyle.buttonLabel}>Ước tính giá</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

TripBooking.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'column'
  },
  actionsRow: {
    ...gStyle.flexRow,
    justifyContent: 'space-evenly'
  },
  textInputField: {
    height: 40,
    borderWidth: 1,
    marginVertical: 12,
    padding: 10
  }
});

export default TripBooking;
