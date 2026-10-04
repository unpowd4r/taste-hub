import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native';

import { COLORS, FONT_SIZE, RADIUS, SPACE } from '@app/tokens';

type Props = TextInputProps & {
  error?: string;
};

export function Input({ error, ...props }: Props) {
  return (
    <View style={styles.root}>
      <TextInput
        style={[styles.input, !!error && styles.inputError]}
        placeholderTextColor={COLORS.text.muted}
        {...props}
      />

      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { gap: SPACE[2] },
  input: {
    height: 52,
    paddingHorizontal: SPACE[4],
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.bg.card,
    color: COLORS.text.primary,
    fontSize: FONT_SIZE.md,
  },
  inputError: {
    borderWidth: 1,
    borderColor: COLORS.status.error,
  },
  error: {
    color: COLORS.status.error,
    fontSize: FONT_SIZE.sm,
    paddingHorizontal: SPACE[2],
  },
});
