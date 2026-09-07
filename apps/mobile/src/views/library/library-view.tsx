import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { TYPE_LABELS } from '@app/constants';

import { COLORS } from '@app/tokens';

import { MEDIA_TYPES } from '@app/types';

import ScreenLayout from '../../app/screen-layout';

export function LibraryView() {
  return (
    <ScreenLayout>
      <Text style={styles.title}>Library</Text>
      {MEDIA_TYPES.map(type => (
        <Link
          style={styles.navItem}
          key={type}
          href={`/title/${type}/1`}
        >
          {TYPE_LABELS[type]}
        </Link>
      ))}
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
  navItem: {
    color: COLORS.text.primary,
    fontSize: 16,
    paddingVertical: 4,
  },
});
