export type FestivalStageSlot = {
  time: string;
  artist: string;
  detail?: string;
};

export const MAIN_STAGE_SLOTS: FestivalStageSlot[] = [
  { time: '12:00 - 13:30', artist: 'Borat', detail: 'Music Mania' },
  { time: '13:30 - 15:00', artist: 'Sharon Deman' },
  { time: '15:00 - 16:30', artist: 'Fonkituur' },
  { time: '16:30 - 18:00', artist: 'Walashi' },
  { time: '18:00 - 20:00', artist: 'Red D x Jensen' },
  { time: '20:00 - 21:30', artist: 'Deejames' },
  { time: '21:30 - 23:00', artist: 'Ian Pooley', detail: 'LIVE' },
  { time: '23:00 - 00:30', artist: 'Pabels b2b Signo' },
  { time: '00:30 - 02:00', artist: 'No Shit Like Deep' },
];

export const HIDE_OUT_STAGE_SLOTS: FestivalStageSlot[] = [
  { time: '16:00 - 18:00', artist: 'Rik P & Kingfluencer' },
  { time: '18:00 - 20:00', artist: 'Rakesh' },
  { time: '20:00 - 22:00', artist: 'René Opsedée' },
  { time: '22:00 - 00:30', artist: 'No Sleep Richy' },
  { time: '00:30 - 02:00', artist: 'Fred Blunt' },
];

export const FULL_LINEUP_NAMES = [
  'Borat',
  'Sharon Deman',
  'Fonkituur',
  'Walashi',
  'Red D x Jensen',
  'Deejames',
  'Ian Pooley',
  'Pabels b2b Signo',
  'No Shit Like Deep',
  'Rik P & Kingfluencer',
  'Rakesh',
  'René Opsedée',
  'No Sleep Richy',
  'Fred Blunt',
];

export const FULL_LINEUP_DISPLAY = FULL_LINEUP_NAMES.join(' · ');

export const FULL_LINEUP_SENTENCE = FULL_LINEUP_NAMES.join(', ');
