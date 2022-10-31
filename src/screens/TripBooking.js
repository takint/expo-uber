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
import { addBooking } from '../../firebaseConfig';

const TripBooking = ({ navigation }) => {
  const [pickedDateTime, setPickedDateTime] = useState(new Date());
  const [pickerMode, setPickerMode] = useState('date');
  const [showDate, setShow] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form booking data
  const [fullName, onFullNameChangeText] = useState('');
  const [email, onEmailChangeText] = useState('');
  const [phoneNumber, onPhoneNumberChangeText] = useState('');
  const [facebookAcc, onFacebookChangeText] = useState('');
  const [moveFrom, onMoveFromChangeText] = useState('');
  const [moveTo, onMoveToChangeText] = useState('');
  let dateMove = pickedDateTime;
  let timeMove = pickedDateTime;

  const showDateTimePicker = (mode) => {
    setPickerMode(mode);
    setShow(true);
  };

  const onDatePickerChange = (evt, selectedDate) => {
    setShow(false);
    setPickedDateTime(selectedDate);

    if (pickerMode === 'date') {
      dateMove = selectedDate;
    } else if (pickerMode === 'time') {
      timeMove = selectedDate;
    }
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  const onSubmitPress = async () => {
    setLoading(true);
    const newBooking = {
      fullName,
      email,
      phoneNumber,
      facebookAcc,
      moveFrom,
      moveTo,
      dateMove,
      timeMove
    };

    const docId = await addBooking(newBooking);

    if (docId) {
      setIsSuccess(true);
    }

    setLoading(false);
  };

  return (
    <SafeAreaView style={gStyle.container}>
      <ScrollView style={gStyle.container}>
        {isSuccess ? (
          <View style={styles.container}>
            <Text style={styles.noticeMessage}>
              {
                'Chúng tôi đã tiếp nhận thông tin.\nChúng tôi liên hệ lại trong thời gian sớm nhất cùng với báo giá.\nXin chân thành cảm ơn quý khách! '
              }
            </Text>
          </View>
        ) : (
          <View style={styles.container}>
            <Text>Full Name</Text>
            <TextInput
              onChangeText={onFullNameChangeText}
              value={fullName}
              style={styles.textInputField}
              placeholder="Full Name"
            />
            <Text>Email</Text>
            <TextInput
              onChangeText={onEmailChangeText}
              value={email}
              style={styles.textInputField}
              placeholder="Your email"
            />
            <Text>Phone Numbers</Text>
            <TextInput
              onChangeText={onPhoneNumberChangeText}
              value={phoneNumber}
              style={styles.textInputField}
              placeholder="(###) ### ####"
            />
            <Text>Facebook Account của bạn là gì</Text>
            <TextInput
              onChangeText={onFacebookChangeText}
              value={facebookAcc}
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
              onChangeText={onMoveFromChangeText}
              value={moveFrom}
              style={styles.textInputField}
              placeholder="Moving FROM Address"
            />
            <Text>Bạn muốn chuyển đến đâu</Text>
            <TextInput
              onChangeText={onMoveToChangeText}
              value={moveTo}
              style={styles.textInputField}
              placeholder="Moving TO Address"
            />
          </View>
        )}
        <View style={styles.actionsRow}>
          <Button
            title="Trở lại"
            color={colors.greyAbbey}
            accessibilityLabel="Back button"
            onPress={onBackPress}
          />
          {!isSuccess && (
            <Pressable
              style={{ ...gStyle.baseButton, backgroundColor: colors.blue }}
              onPress={onSubmitPress}
              disabled={loading}
            >
              <Text style={gStyle.buttonLabel}>{loading ? 'Loading...' : 'Ước tính giá'}</Text>
            </Pressable>
          )}
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
    flexDirection: 'column',
    fontFamily: fonts.uberRegular
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
  },
  noticeMessage: {
    textAlign: 'center',
    fontFamily: fonts.uberMedium
  }
});

export default TripBooking;
