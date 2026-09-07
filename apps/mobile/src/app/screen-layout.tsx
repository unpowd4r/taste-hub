import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, SPACE } from '@app/tokens';

export default function ScreenLayout({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg.base,
    justifyContent: 'center',
    paddingHorizontal: SPACE[6],
    paddingTop: SPACE[5],
  },
});
