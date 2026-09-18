import { NativeTabs } from 'expo-router/build/native-tabs';

import { COLORS } from '@app/tokens';

import { tabsConfig } from '../config';

export function TabBar() {
  return (
    <NativeTabs
      tintColor={COLORS.text.primary}
      iconColor={{
        default: COLORS.text.muted,
        selected: COLORS.text.primary,
      }}
      labelStyle={{ color: COLORS.text.primary }}
    >
      {tabsConfig.map(tab => (
        <NativeTabs.Trigger
          key={tab.name}
          name={tab.name}
        >
          <NativeTabs.Trigger.Icon
            sf={tab.sf}
            md={tab.md}
          />
          <NativeTabs.Trigger.Label>{tab.title}</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      ))}

      <NativeTabs.Trigger
        name='search'
        role='search'
      />
    </NativeTabs>
  );
}
