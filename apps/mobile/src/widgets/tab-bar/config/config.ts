import { Home, Library, User } from 'lucide-react-native';

export const tabsConfig = [
  {
    name: 'index',
    title: 'For You',
    icon: Home,
    sf: { default: 'house', selected: 'house.fill' },
    md: 'home',
  },
  {
    name: 'library',
    title: 'My WatchList',
    icon: Library,
    sf: { default: 'heart', selected: 'heart.fill' },
    md: 'favorite',
  },
  {
    name: 'profile',
    title: 'Account',
    icon: User,
    sf: { default: 'person.circle', selected: 'person.circle.fill' },
    md: 'account_circle',
  },
] as const;
