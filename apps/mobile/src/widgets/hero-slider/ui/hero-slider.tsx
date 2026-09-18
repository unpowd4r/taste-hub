import { Play, Plus } from 'lucide-react-native';
import { useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import type { TitleListItemResponse } from '@app/api';

import { SPACE } from '@app/tokens';

import { MOCK_DESCRIPTION, MOCK_GENRES } from '../mocked';
import { useHeroScroll } from '../model';

import { HeroPagination } from './hero-pagination';
import { HeroSlide } from './hero-slide';
import { TitleInfo } from '@/entities/title-info';
import { Button } from '@/shared/ui';

export const AUTO_SCROLL_INTERVAL = 4000;

type Props = {
  items: TitleListItemResponse[];
};

export function HeroSlider({ items }: Props) {
  const { width } = Dimensions.get('window');
  const height = width * 1.35;

  const scrollRef = useRef<Animated.ScrollView>(null);
  const autoScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollX, textProgress, index, scrollHandler } = useHeroScroll({ width });
  const current = items[index];

  const textBlockStyle = useAnimatedStyle(() => ({
    opacity: textProgress.value,
    transform: [{ translateY: (1 - textProgress.value) * 24 }],
  }));

  const stopAutoScroll = () => {
    if (autoScrollTimeout.current) {
      clearTimeout(autoScrollTimeout.current);
      autoScrollTimeout.current = null;
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();

    autoScrollTimeout.current = setTimeout(() => {
      const nextIndex = (index + 1) % items.length;

      scrollRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
    }, AUTO_SCROLL_INTERVAL);
  };

  useEffect(() => {
    startAutoScroll();

    return stopAutoScroll;
  }, [index, items.length, width]);

  return (
    <View style={{ height }}>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        onScrollBeginDrag={stopAutoScroll}
        onMomentumScrollEnd={startAutoScroll}
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
