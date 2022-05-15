import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {normalize, theme} from '../../../utils';
import {IColors} from '../../../utils';

enum IWeight {
  bold = '700',
  regular = '400',
  light = '300',
}
enum IFontFamily {
  bold = 'Lato-Bold',
  regular = 'Lato-Regular',
  light = 'Lato-Light',
}

interface ITypographyProps extends TextProps {
  color?: keyof IColors;
  weight?: keyof typeof IWeight;
  size?: number;
  textStyle?: TextStyle;
}
export const Typography: React.FC<ITypographyProps> = ({
  color = 'black',
  weight = 'regular',
  size = 16,
  textStyle,
  children,
  ...rest
}) => (
  <Text
    style={{
      fontSize: normalize(size),
      color: theme.global[color],
      fontWeight: IWeight[weight],
      fontFamily: IFontFamily[weight],
      ...textStyle,
    }}
    {...rest}>
    {children}
  </Text>
);
