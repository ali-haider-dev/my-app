import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Colors, FONT_FAMILY} from '../constants';
import { Ionicons } from '@expo/vector-icons';
const InputField = ({
  heading,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  isRequired = false,
  type = 'text',
  inputWidth = '100%', // New prop to control width
  multiline,
  styling,
  error,
  label,
  keyboardType,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };
  // console.log(heading,value)

  return (
    <View style={[styles.container, {width: inputWidth}]}>
      <Text style={[styles.label, {fontSize: inputWidth < '100%' ? 12 : 15}]}>
        {heading}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styling
              ? {fontSize: value ? 14 : 10, fontFamily: value ? 'Poppins_500Medium' : 'Poppins_200ExtraLight', ...styling}
              : value
              ? styles.input
              : styles.placeholder,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.white}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardType}
          // onBlur={() => validateInput(value)}
          multiline={multiline ? true : false}
          textAlignVertical={multiline ? 'top' : ''}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeButton}>
            <Ionicons
              name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
              size={30}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.danger}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 10,
    fontFamily: 'Poppins_500Medium',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 44,
    borderRadius: 2,
    fontSize: 14,
    borderWidth: 2,
    borderColor: Colors.white,
    fontFamily: 'Poppins_500Medium',
    color: Colors.white,
    paddingHorizontal: 10,
  },
  placeholder: {
    height: 44,
    borderRadius: 2,
    fontSize: 10,
    borderWidth: 2,
    borderColor: Colors.white,
    fontFamily: 'Poppins_200ExtraLight',
    color: Colors.white,
    paddingHorizontal: 10,
    fontWeight: '200',
  },
  eyeButton: {
    position: 'absolute',
    right: 20,
    top: '40%',
    transform: [{translateY: -10}],
  },
  eyeImage: {
    width: 25,
    height: 20,
    tintColor: Colors.white,
  },
  danger: {
    color: 'red',
    fontSize: 12,
    textAlign: 'left',
    width: '100%',
    marginTop: 5,
    paddingLeft: 10,
  },
});

export default InputField;