import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { useAuthMobileRegister } from '@app/api';

import { type AuthForm, authSchema } from '@app/schemas';

import ScreenLayout from '../screen-layout';

import { saveTokens } from '@/shared/lib/token';
import { Button } from '@/shared/ui';
import { Input } from '@/shared/ui/input/input';

export default function Register() {
  const { control, handleSubmit } = useForm<AuthForm>({
    resolver: zodResolver(authSchema),
  });

  const { mutate, isPending, error } = useAuthMobileRegister({
    mutation: {
      onSuccess: async ({ data: { accessToken, refreshToken } }) => {
        await saveTokens(accessToken, refreshToken);
        router.replace('/');
      },
    },
  });

  const onSubmit = (data: AuthForm) => {
    mutate({ data });
  };

  return (
    <ScreenLayout>
      <View>
        <Controller
          control={control}
          name='email'
          render={({ field, fieldState }) => (
            <Input
              placeholder='Email'
              autoCapitalize='none'
              keyboardType='email-address'
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name='password'
          render={({ field, fieldState }) => (
            <Input
              placeholder='Password'
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Button
          onPress={handleSubmit(onSubmit)}
          isDisabled={isPending}
        >
          {isPending ? 'Creating...' : 'Create account'}
        </Button>
      </View>
    </ScreenLayout>
  );
}
