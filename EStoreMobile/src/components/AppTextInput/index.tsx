import React, { useState } from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

interface AppTextInputInterface {
  icons?: any,
  value?: string,
  style?: Object,
  secureText?: boolean,
  containerStyle?: Object,
  placeholder?: string,
  error?: boolean, 
  label?: string,
  labelStyle?: Object,
  onChangeText: (text: string) => void
}

const AppTextInput = (props: AppTextInputInterface) => {
  const {
    icons,
    value,
    style,
    secureText,
    containerStyle,
    placeholder,
    label,
    labelStyle,
    error,
    onChangeText,
  } = props;
  const [viewHidden, setViewHidden] = useState(false);

  const handleToggle = () => {
    setViewHidden(!viewHidden)
  }
  return (
    <>
      {label ? (<Text style={[styles.label, labelStyle]}>{label}</Text>) : null}
      <View style={[styles.container, error ? {borderColor: 'red'} : null, containerStyle]}>
        {icons ? (<View style={styles.icons}>{icons}</View>) : null}
        <TextInput
          defaultValue={value}
          style={[styles.textInput, icons ? {borderLeftWidth: 1} : null, style]}
          placeholder={placeholder !== '' ? placeholder : 'Write anything here...'}
          secureTextEntry={viewHidden}
          onChangeText={onChangeText}
        />
          {secureText ? (
            <TouchableOpacity onPress={() => handleToggle()}>
              {
                viewHidden ? <Feather name="eye" color="#000000" size={20}/> : <Feather name="eye-off" color="#000000" size={20}/>
              }
            </TouchableOpacity>
          ) : null}
      </View>
    </>
  );
};

export default AppTextInput;
