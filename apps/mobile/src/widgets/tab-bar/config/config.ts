import { Home, Library, Search, User } from 'lucide-react-native';

export const tabsConfig = [
  {
    name: 'index',
    title: 'Home',
    icon: Home,
  },
  {
    name: 'library',
    title: 'Library',
    icon: Library,
  },
  {
    name: 'search',
    title: 'Search',
    icon: Search,
  },
  {
    name: 'user',
    title: 'User',
    icon: User,
  },
] as const;
