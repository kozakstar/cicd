import {Dimensions, Platform, PixelRatio} from 'react-native';
import {REF_RATIO} from './index';

const {width} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = width / 320;

export function normalize(size: number): number {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}
export function responsiveSize(value: number): number {
  return Math.round(value * REF_RATIO);
}
