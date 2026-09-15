import { GlassView, isGlassEffectAPIAvailable } from 'expo-glass-effect';
import type { LucideIcon } from 'lucide-react-native';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS, RADIUS, SPACE } from '@app/tokens';

type Props = {
  icon: LucideIcon;
  onPress: () => void;
  side: 'left' | 'right';
  iconOffset?: number;
};

export function FloatingButton({ icon: Icon, onPress, side, iconOffset }: Props) {
  const insets = useSafeAreaInsets();

  const position = [
    styles.root,
    { top: insets.top + SPACE[2] },
    side === 'left' ? { left: SPACE[4] } : { right: SPACE[4] },
  ];

  const content = (
    <Icon
      size={26}
      color={COLORS.text.primary}
      style={iconOffset ? { marginLeft: iconOffset } : undefined}
    />
  );

  if (!isGlassEffectAPIAvailable()) {
    return (
      <Pressable
        onPress={onPress}
        style={[position, styles.fallback]}
        hitSlop={12}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View style={position}>
      <GlassView
        style={styles.glass}
        glassEffectStyle='clear'
        isInteractive
      >
        <Pressable
          onPress={onPress}
          style={styles.press}
          hitSlop={12}
        >
          {content}
        </Pressable>
      </GlassView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: RADIUS.full,
    overflow: 'hidden',
  },
  glass: {
    flex: 1,
    borderRadius: RADIUS.full,
  },
  press: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
