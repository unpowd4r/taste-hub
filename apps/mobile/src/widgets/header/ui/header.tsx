import { Bell } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACE } from '@app/tokens';

export function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { top: insets.top + SPACE[2] }]}>
      <Text style={styles.logo}>Taste Hub</Text>

      <Pressable hitSlop={12}>
        <Bell color={COLORS.text.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACE[5],
  },
  logo: {
    color: COLORS.text.primary,
    fontSize: FONT_SIZE['1.5xl'],
    fontWeight: FONT_WEIGHT.bold,
  },
});
