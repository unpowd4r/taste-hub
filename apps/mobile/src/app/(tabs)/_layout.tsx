import { Tabs } from 'expo-router';
import { Home, Library } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Home
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='library'
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => (
            <Library
              color={color}
              size={22}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Search
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='user'
        options={{
          title: 'User',
          tabBarIcon: ({ color }) => (
            <User
              color={color}
              size={22}
            />
          ),
        }}
      /> */}
    </Tabs>
  );
}
