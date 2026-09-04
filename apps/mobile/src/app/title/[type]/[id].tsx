import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TitleDetail() {
  const { id, type } = useLocalSearchParams<{ id: string; type: string }>();

  return (
    <SafeAreaView>
      <Text>
        Title {type} {id}
      </Text>

      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </SafeAreaView>
  );
}
