import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

import type { TitleListItemResponse } from '@app/api';

import { COLORS } from '@app/tokens';

type Props = {
  item: TitleListItemResponse;
  width: number;
  height: number;
};

export function HeroSlide({ item, width, height }: Props) {
  return (
    <View style={{ width, height }}>
      <Image
        source={item.coverUrl}
        style={{ width, height }}
        contentFit='cover'
        transition={300}
      />

      <LinearGradient
        colors={['rgba(2,0,3,0.7)', 'transparent', 'rgba(2,0,3,0.9)', COLORS.bg.base]}
        locations={[0, 0.35, 0.75, 1]}
        style={StyleSheet.absoluteFill}
        pointerEvents='none'
      />
    </View>
  );
}
