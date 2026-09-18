import { BlurView } from 'expo-blur';
import { Bell } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { type SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACE } from '@app/tokens';

type Props = {
  scrollY: SharedValue<number>;
};

export function Header({ scrollY }: Props) {
  const insets = useSafeAreaInsets();

  const blurStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.get(), [0, 35], [0, 1], 'clamp'),
  }));

  return (
    <View
      style={styles.root}
      pointerEvents='box-none'
    >
      <Animated.View
        pointerEvents='none'
        style={[StyleSheet.absoluteFill, blurStyle]}
      >
        <BlurView
          intensity={30}
          tint='systemChromeMaterialDark'
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.overlay} />
      </Animated.View>
      <View style={[styles.inner, { paddingTop: insets.top }]}>
        <Text style={styles.logo}>Taste Hub</Text>

        <Pressable hitSlop={12}>
          <Bell color={COLORS.text.primary} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACE['layout-horizontal'],
    paddingBottom: SPACE[4],
  },
  logo: {
    color: COLORS.text.primary,
    fontSize: FONT_SIZE['1.5xl'],
    fontWeight: FONT_WEIGHT.bold,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'rgba(0,0,0,0.45)',
  },
});
