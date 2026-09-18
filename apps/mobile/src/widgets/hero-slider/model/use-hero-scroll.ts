import { useState } from 'react';
import {
  Easing,
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

type Params = {
  width: number;
};

export function useHeroScroll({ width }: Params) {
  const scrollX = useSharedValue(0);
  const textProgress = useSharedValue(1);
  const [index, setIndex] = useState(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollX.value = e.contentOffset.x;
    },
    onMomentumEnd: e => {
      const next = Math.round(e.contentOffset.x / width);
      scheduleOnRN(setIndex, next);
    },
  });

  useAnimatedReaction(
    () => scrollX.value / width,
    page => {
      const offset = Math.abs(page - Math.round(page));

      if (offset > 0.01) {
        textProgress.value = withTiming(0, {
          duration: 150,
          easing: Easing.out(Easing.quad),
        });
      } else {
        textProgress.value = withDelay(
          80,
          withTiming(1, { duration: 400, easing: Easing.out(Easing.cubic) }),
        );
      }
    },
  );

  return { scrollX, textProgress, index, scrollHandler };
}
