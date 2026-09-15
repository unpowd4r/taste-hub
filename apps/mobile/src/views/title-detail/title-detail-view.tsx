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

      {/* 
        Header
          Left side: Back button (arrow left)
          Right side: Bell (notifications)

        Backdrop Image
        Title

        Meta line
          rating, age, year, duration, genre...

        Description + AI summary button no spoilers

        Primary button
          none     =>  [+ Add to library]
          want     => [Start]
          progress => [Mark as done]
          done     => [Done] (not clickable)
          dropped  => [Dropped]

        LONG PRESS 
          open full list of actions (want, progress, done, dropped)

        Details 
          cats / director / author /
          developer / studio - depends on type

        Actions
          add to watchList, add to collection, to share ...

        Similar titles (Carousel)
        
        Reviews (possible add review button)
      */}
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
