import { StyleSheet, Text, View } from 'react-native';

import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACE } from '@app/tokens';

type Props = {
  children: string;
  action?: React.ReactNode;
};

export function ScreenTitle({ children, action }: Props) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}> {children}</Text>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: SPACE[4],
  },
  title: {
    color: COLORS.text.primary,
    fontSize: FONT_SIZE['2xl'],
    fontWeight: FONT_WEIGHT.bold,
  },
});
