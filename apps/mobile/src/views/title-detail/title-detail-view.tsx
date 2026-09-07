import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import ScreenLayout from '../../app/screen-layout';

export function TitleDetailView() {
  const { id, type } = useLocalSearchParams<{ id: string; type: string }>();

  return (
    <ScreenLayout>
      <Text style={styles.title}>
        Title {type} {id}
      </Text>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.backButton}>Back</Text>
      </Pressable>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
  },
  backButton: {
    color: '#a1a1aa',
    fontSize: 16,
    paddingVertical: 4,
  },
});
