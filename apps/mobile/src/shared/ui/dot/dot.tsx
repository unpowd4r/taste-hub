import Animated, {
  Extrapolation,
  type SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { COLORS } from '@app/tokens';

type Props = {
  index: number;
  width: number;
  scrollX: SharedValue<number>;
};

const ACTIVE_SIZE = 9;
const MIN_SIZE = 4;

const MAX_DISTANCE = ACTIVE_SIZE - MIN_SIZE;

export function Dot({ index, width, scrollX }: Props) {
  const style = useAnimatedStyle(() => {
    const page = scrollX.value / width;
    const distance = Math.min(Math.abs(page - index), MAX_DISTANCE);

    const size = interpolate(
      distance,
      [0, MAX_DISTANCE],
      [ACTIVE_SIZE, MIN_SIZE],
      Extrapolation.CLAMP,
    );

    const progress = interpolate(distance, [0, 1], [1, 0], Extrapolation.CLAMP);

    return {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: interpolateColor(progress, [0, 1], [COLORS.text.muted, COLORS.text.primary]),
    };
  });

  return <Animated.View style={style} />;
}
