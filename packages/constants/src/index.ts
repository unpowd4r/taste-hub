import type { TMediaType, TStatus } from '../../types/src';

export const STATUS_LABELS: Record<TStatus, string> = {
  want: 'Want',
  progress: 'In progress',
  done: 'Done',
};

export const TYPE_LABELS: Record<TMediaType, string> = {
  anime: 'Anime',
  book: 'Book',
  game: 'Game',
  movie: 'Movie',
  series: 'Series',
};
