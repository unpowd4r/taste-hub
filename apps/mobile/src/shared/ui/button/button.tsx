import { type LucideIcon } from 'lucide-react-native';
import { Pressable, StyleSheet, Text } from 'react-native';

import { COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS, SPACE } from '@app/tokens';

import type { ButtonSize, ButtonVariant } from '@app/types';

type Props = {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  isDisabled?: boolean;
  onPress: () => void;
};

const CONTENT_COLOR: Record<ButtonVariant, string> = {
  primary: COLORS.text.secondary,
  secondary: COLORS.text.primary,
};

const ICON_SIZE: Record<ButtonSize, number> = {
  md: 18,
  lg: 20,
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  isDisabled,
  onPress,
}: Props) {
  const isIconOnly = !children && !!Icon;
  const contentColor = CONTENT_COLOR[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.root,
        variantStyles[variant],
        sizeStyles[size],
        isIconOnly && [styles.iconOnly, iconOnlySizes[size]],
        pressed && styles.pressed,
        isDisabled && styles.disabled,
      ]}
    >
      {Icon && (
        <Icon
          size={ICON_SIZE[size]}
          color={contentColor}
        />
      )}
      {children && (
        <Text style={[styles.label, labelSizes[size], { color: contentColor }]}>{children}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACE[2],
    borderRadius: RADIUS.full,
  },
  iconOnly: { paddingHorizontal: 0, aspectRatio: 1 },
  pressed: { opacity: 0.7 },
  disabled: { opacity: 0.4 },
  label: { fontWeight: FONT_WEIGHT.semiBold },
});

const variantStyles = StyleSheet.create({
  primary: { backgroundColor: COLORS.primary },
  secondary: { backgroundColor: COLORS.bg.card },
});

const sizeStyles = StyleSheet.create({
  md: { height: 44, paddingHorizontal: SPACE[5] },
  lg: { height: 44, paddingHorizontal: SPACE[6] },
});

const iconOnlySizes = StyleSheet.create({
  md: { width: 44 },
  lg: { width: 56 },
});

const labelSizes = StyleSheet.create({
  md: { fontSize: FONT_SIZE.sm },
  lg: { fontSize: FONT_SIZE.md },
});
