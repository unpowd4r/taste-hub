import { TYPE_LABELS } from '@app/constants';
import { MEDIA_TYPES } from '@app/types';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taste Hub</Text>
      {MEDIA_TYPES.map((type) => (
        <Text key={type} style={styles.item}>
          {TYPE_LABELS[type]}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0F',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
  },
  item: {
    color: '#a1a1aa',
    fontSize: 16,
    paddingVertical: 4,
  },
});
