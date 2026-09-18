import { StyleSheet, Text, View } from 'react-native';

import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACE } from '@app/tokens';

type Props = {
  name: string;
  genres: string[];
  description?: string;
};

export function TitleInfo({ name, genres, description }: Props) {
  return (
    <View style={styles.root}>
      <Text
        style={styles.name}
        numberOfLines={2}
      >
        {name}
      </Text>

      {genres.length > 0 && (
        <Text
          style={styles.genres}
          numberOfLines={1}
        >
          {genres.join(' · ')}
        </Text>
      )}

      {description && (
        <Text
          style={styles.description}
          numberOfLines={2}
        >
          {description}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: SPACE[2],
  },
  name: {
    color: COLORS.text.primary,
    fontSize: FONT_SIZE['3xl'],
    fontWeight: FONT_WEIGHT.bold,
  },
  genres: {
    color: COLORS.text.primary,
    fontSize: FONT_SIZE.sm,
  },
  description: {
    color: COLORS.text.muted,
    fontSize: FONT_SIZE.sm,
    lineHeight: 20,
  },
});
