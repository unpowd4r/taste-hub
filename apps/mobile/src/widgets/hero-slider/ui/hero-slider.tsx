import { Play, Plus } from 'lucide-react-native';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import type { TitleListItemResponse } from '@app/api';

import { SPACE } from '@app/tokens';

import { useHeroScroll } from '../model';

import { HeroPagination } from './hero-pagination';
import { HeroSlide } from './hero-slide';
import { TitleInfo } from '@/entities/title-info';
import { Button } from '@/shared/ui';

const MOCK_GENRES = ['Thrillers', 'Dramas', 'Action', 'Chime'];
const MOCK_DESCRIPTION =
  'When an overachieving college senior makes a wrong turn, her road trip becomes a life-changing fight for...';

type Props = {
  items: TitleListItemResponse[];
};

export function HeroSlider({ items }: Props) {
  const { width } = Dimensions.get('window');
  const height = width * 1.35;

  const { scrollX, textProgress, index, scrollHandler } = useHeroScroll({ width });
  const current = items[index];

  const textBlockStyle = useAnimatedStyle(() => ({
    opacity: textProgress.value,
    transform: [{ translateY: (1 - textProgress.value) * 24 }],
  }));

  return (
    <View style={{ height }}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
      >
        {items.map(item => (
          <HeroSlide
            key={item.id}
            item={item}
            width={width}
            height={height}
          />
        ))}
      </Animated.ScrollView>

      {current && (
        <View
          style={styles.content}
          pointerEvents='box-none'
        >
          <Animated.View style={textBlockStyle}>
            <TitleInfo
              name={current.name}
              genres={MOCK_GENRES}
              description={MOCK_DESCRIPTION}
            />
          </Animated.View>

          <View style={styles.bottom}>
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

            <HeroPagination
              count={items.length}
              width={width}
              scrollX={scrollX}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    paddingHorizontal: SPACE['layout-horizontal'],
    paddingBottom: SPACE[4],
    gap: SPACE[2],
    justifyContent: 'flex-end',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: SPACE[3],
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACE[3],
  },
});
