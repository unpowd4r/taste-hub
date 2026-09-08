import { NativeTabs } from 'expo-router/build/native-tabs';

import { COLORS } from '@app/tokens';

export function TabBar() {
  return (
    <NativeTabs
      minimizeBehavior='onScrollDown'
      tintColor={COLORS.text.primary}
      iconColor={{
        default: COLORS.text.muted,
        selected: COLORS.text.primary,
      }}
      labelStyle={{ color: COLORS.text.primary }}
    >
      <NativeTabs.Trigger name='index'>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          md='home'
        />
        <NativeTabs.Trigger.Label>For You</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name='library'>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'heart', selected: 'heart.fill' }}
          md='favorite'
        />
        <NativeTabs.Trigger.Label>My WatchList</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name='profile'>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'person.circle', selected: 'person.circle.fill' }}
          md='account_circle'
        />
        <NativeTabs.Trigger.Label>Account</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger
        name='search'
        role='search'
      ></NativeTabs.Trigger>
    </NativeTabs>
  );
}
