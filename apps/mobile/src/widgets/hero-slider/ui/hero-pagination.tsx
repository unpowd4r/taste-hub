import { StyleSheet, View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';

import { SPACE } from '@app/tokens';

import { Dot } from '@/shared/ui';

type Props = {
  count: number;
  width: number;
  scrollX: SharedValue<number>;
};

export function HeroPagination({ count, width, scrollX }: Props) {
  return (
    <View style={styles.root}>
      {Array.from({ length: count }).map((_, idx) => (
        <Dot
          key={idx}
          index={idx}
          width={width}
          scrollX={scrollX}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACE[2],
  },
});
