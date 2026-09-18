import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '@app/tokens';

type Props = {
  children: React.ReactNode;
  edges?: ('top' | 'bottom')[];
};

export default function ScreenLayout({ children, edges = ['top'] }: Props) {
  if (edges.length === 0) {
    return <View style={styles.container}>{children}</View>;
  }

  return (
    <SafeAreaView
      style={styles.container}
      edges={edges}
    ></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg.base,
  },
});
