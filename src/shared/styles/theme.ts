export const colors = {
  // wt/bk
  white: '#ffffff',
  black: '#000000',
  background: '#fafafa',

  // gray
  gray50: '#f7f7f7',
  gray100: '#efefef',
  gray200: '#e2e2e2',
  gray300: '#d0d0d0',
  gray400: '#b7b7b7',
  gray500: '#949494',
  gray600: '#707070',
  gray700: '#525252',
  gray800: '#333333',
  gray900: '#1a1a1a',

  // yellow gray
  yellowGray50: '#faf6f1',
  yellowGray100: '#f2ebdf',
  yellowGray200: '#e7dccd',
  yellowGray300: '#d1c4af',
  yellowGray400: '#b5aa99',
  yellowGray500: '#93897a',
  yellowGray600: '#7b7161',
  yellowGray700: '#665d4f',
  yellowGray800: '#4b4336',
  yellowGray900: '#312b24',

  // yellow
  yellow50: '#fffbee',
  yellow100: '#fff4cd',
  yellow200: '#ffecac',
  yellow300: '#fee384',
  yellow400: '#ffd540',
  yellow500: '#ffc700',
  yellow600: '#ecaa00',
  yellow700: '#d68d00',
  yellow800: '#af7400',
  yellow900: '#865800',

  // red
  red50: '#fcede8',
  red100: '#fec4b2',
  red200: '#f49779',
  red300: '#ec744e',
  red400: '#dc5a31',
  red500: '#cc3d0c',
  red600: '#aa3106',
  red700: '#892e0d',
  red800: '#681e03',
  red900: '#481300',

  // orange
  orange50: '#fef0e3',
  orange100: '#ffe4c4',
  orange200: '#ffcd93',
  orange300: '#ffb966',
  orange400: '#ff9e2d',
  orange500: '#fd871a',
  orange600: '#ee7505',
  orange700: '#d45e09',
  orange800: '#9f4300',
  orange900: '#7e3500',

  // pink
  pink50: '#fff0f2',
  pink100: '#ffd7db',
  pink200: '#ffbbc3',
  pink300: '#fe8493',
  pink400: '#f96b7c',
  pink500: '#ec5062',
  pink600: '#d8384b',
  pink700: '#b92335',
  pink800: '#9c0d1e',
  pink900: '#800110',

  // green
  green50: '#e7f8da',
  green100: '#c3f0a0',
  green200: '#84e56b',
  green300: '#56d641',
  green400: '#17c83e',
  green500: '#0db431',
  green600: '#0ca02d',
  green700: '#138a2d',
  green800: '#137529',
  green900: '#075a19',

  // teal
  teal50: '#dff4f4',
  teal100: '#c5eaea',
  teal200: '#8cd7d7',
  teal300: '#68c8c8',
  teal400: '#3abdbd',
  teal500: '#1eaeae',
  teal600: '#149d9d',
  teal700: '#118e8e',
  teal800: '#0e7c7c',
  teal900: '#096666',

  // blue
  blue50: '#dff4ff',
  blue100: '#ddecf8',
  blue200: '#94c9fb',
  blue300: '#68b3f8',
  blue400: '#48a2f4',
  blue500: '#3982ef',
  blue600: '#266ad1',
  blue700: '#1959ba',
  blue800: '#184b96',
  blue900: '#083973',

  // purple
  purple50: '#f9f1fc',
  purple100: '#ecd3f4',
  purple200: '#dda5f0',
  purple300: '#c680dd',
  purple400: '#b55dd2',
  purple500: '#a842ca',
  purple600: '#9540b1',
  purple700: '#8628a5',
  purple800: '#6c2085',
  purple900: '#4e1860',
} as const;

export const theme = {
  colors,
};

export type Theme = typeof theme;
