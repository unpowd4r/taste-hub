import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Play, Plus } from 'lucide-react-native';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { TitleListItemResponse } from '@app/api';

import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACE } from '@app/tokens';

import { Button } from '../../../shared/ui';

const { width } = Dimensions.get('window');
const HEIGHT = width * 1.25;

type Props = {
  items: TitleListItemResponse[];
};

export function HeroSlider({ items }: Props) {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.root}
    >
      {items.map(item => (
        <View
          key={item.id}
          style={styles.slide}
        >
          <Image
            source={item.coverUrl}
            style={StyleSheet.absoluteFill}
            contentFit='cover'
            transition={300}
          />

          <LinearGradient
            colors={['transparent', 'rgba(2,0,3,0.8)', COLORS.bg.base]}
            locations={[0.35, 0.75, 1]}
            style={StyleSheet.absoluteFill}
          />

          <View>
            <Text
              style={styles.name}
              numberOfLines={2}
            >
              {item.name}
            </Text>
          </View>

          <View style={styles.actions}>
            <Button
              icon={Play}
              onPress={() => {}}
            >
              Watch Movie
            </Button>

            <Button
              variant='secondary'
              icon={Plus}
              onPress={() => {}}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: HEIGHT,
  },
  slide: {
    width,
    height: HEIGHT,
    justifyContent: 'flex-end',
  },
  content: { padding: SPACE['layout-horizontal'], gap: SPACE[4] },
  name: {
    color: COLORS.text.primary,
    fontSize: FONT_SIZE['3xl'],
    fontWeight: FONT_WEIGHT.bold,
  },
  actions: {
    flexDirection: 'row',
    gap: SPACE[3],
  },
});
