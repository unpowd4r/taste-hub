import type { TitleListItemResponseType } from '@app/api/src/generated/schemas/models';
import { BookOpen, Film, Gamepad2, type LucideIcon, Sparkles, Tv } from 'lucide-react-native';

import { RADIUS } from '@app/tokens';

type CardConfig = {
  width: number;
  height: number;
  radius: number;
  icon: LucideIcon;
  stacked?: boolean;
  spine?: boolean;
  glow?: string;
};

export const CARD_CONFIG: Record<TitleListItemResponseType, CardConfig> = {
  MOVIE: { width: 132, height: 198, radius: RADIUS.md, icon: Film },
  TV_SHOW: {
    width: 132,
    height: 198,
    radius: RADIUS.md,
    icon: Tv,
    stacked: true,
  },
  ANIME: {
    width: 132,
    height: 198,
    radius: RADIUS.md,
    icon: Sparkles,
    glow: 'rgba(129, 65, 248, 0.6)',
  },
  BOOK: {
    width: 132,
    height: 198,
    radius: RADIUS.sm,
    icon: BookOpen,
    spine: true,
  },
  GAME: { width: 132, height: 198, radius: RADIUS.lg, icon: Gamepad2 },
};
