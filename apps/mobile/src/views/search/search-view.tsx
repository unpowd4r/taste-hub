import { StyleSheet, Text } from 'react-native';

import ScreenLayout from '../../app/screen-layout';

export function SearchView() {
  return (
    <ScreenLayout>
      <Text style={styles.title}>Search Page</Text>
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
});
