import { Stack } from 'expo-router';
import { ScrollView, Text } from 'react-native';

export function SearchView() {
  return (
    <>
      <Stack.Title>Search</Stack.Title>
      <Stack.SearchBar
        placement='automatic'
        placeholder='Search'
        onChangeText={text => console.log(text)}
      />
      <ScrollView>
        <Text>Items</Text>
      </ScrollView>
    </>
  );
}
