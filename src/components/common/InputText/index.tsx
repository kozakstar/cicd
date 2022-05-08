import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {Typography} from '../Typography';
import styles from './style';
import {theme} from '../../../utils';
interface IInputTextProps extends TextInputProps {
  label?: string;
  error?: string;
}
export const InputText: React.FC<IInputTextProps> = ({
  label,
  error,
  ...rest
}) => {
  return (
    <>
      {label ? <Typography size={13}>{label}</Typography> : null}
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize={'none'}
          style={[
            styles.inputField,
            {borderBottomColor: error ? theme.global.red : theme.global.green},
          ]}
          {...rest}
        />
      </View>
    </>
  );
};
