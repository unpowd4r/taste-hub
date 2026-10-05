import { useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useAuthMobileLogout, useUserFindMe } from '@app/api';

import { COLORS, FONT_SIZE, SPACE } from '@app/tokens';

import ScreenLayout from '@/app/screen-layout';
import { clearTokens, getRefreshToken } from '@/shared/lib';
import { Button } from '@/shared/ui';

export function ProfileView() {
  const queryClient = useQueryClient();
  const { data } = useUserFindMe();

  const { mutate: logout, isPending } = useAuthMobileLogout({
    mutation: {
      onSettled: async () => {
        await clearTokens();

        queryClient.clear();
        router.replace('/register');
      },
    },
  });

  const handleLogout = async () => {
    const refreshToken = await getRefreshToken();

    if (!refreshToken) return;

    logout({ data: { refreshToken } });
  };

  return (
    <ScreenLayout>
      <View style={{ padding: SPACE['layout-horizontal'], gap: SPACE[4] }}>
        <Text style={{ color: COLORS.text.primary, fontSize: FONT_SIZE.xl }}>
          {data?.data.email}
        </Text>

        <Button
          variant='secondary'
          onPress={handleLogout}
          isDisabled={isPending}
        >
          Sign out
        </Button>
      </View>
    </ScreenLayout>
  );
}
