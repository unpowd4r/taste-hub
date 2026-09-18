import { ChevronRight } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACE } from '@app/tokens';

type Props = {
  title: string;
  onPress?: () => void;
  children: React.ReactNode;
};

export function CarouselSection({ children, title, onPress }: Props) {
  const hasOnPress = !!onPress;

  return (
    <View style={styles.root}>
      <Pressable
        onPress={onPress}
        disabled={!hasOnPress}
        style={styles.header}
      >
        <Text style={styles.title}>{title}</Text>

        {hasOnPress && (
          <ChevronRight
            size={24}
            color={COLORS.text.primary}
          />
        )}
      </Pressable>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { gap: SPACE[3], marginTop: SPACE[6] },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SPACE['layout-horizontal'],
    marginBottom: SPACE[2],
  },
  title: {
    color: COLORS.text.primary,
    fontSize: FONT_SIZE.xl,
    fontWeight: FONT_WEIGHT.semiBold,
  },
  scroll: { gap: SPACE[2], paddingHorizontal: SPACE['layout-horizontal'] },
});
