import type { TitleListItemResponseType } from '@app/api/src/generated/schemas/models';
import { BookOpen, Film, Gamepad2, type LucideIcon, Sparkles, Tv } from 'lucide-react-native';

import { RADIUS } from '@app/tokens';

type CardConfig = {
  radius: number;
  icon: LucideIcon;
  stacked?: boolean;
  spine?: boolean;
  glow?: string;
};

export const CARD_CONFIG: Record<TitleListItemResponseType, CardConfig> = {
  MOVIE: { radius: RADIUS.md, icon: Film },
  TV_SHOW: {
    radius: RADIUS.md,
    icon: Tv,
    stacked: true,
  },
  ANIME: {
    radius: RADIUS.md,
    icon: Sparkles,
    glow: 'rgba(129, 65, 248, 0.6)',
  },
  BOOK: {
    radius: RADIUS.sm,
    icon: BookOpen,
    spine: true,
  },
  GAME: { radius: RADIUS.lg, icon: Gamepad2 },
};
