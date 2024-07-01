import { useMediaQuery } from '@uidotdev/usehooks';

export const isSmallDevice = useMediaQuery(
  'only screen and (max-width : 768px)'
);
export const isMediumDevice = useMediaQuery(
  'only screen and (min-width : 769px) and (max-width : 992px)'
);
export const isLargeDevice = useMediaQuery(
  'only screen and (min-width : 993px) and (max-width : 1200px)'
);
export const isExtraLargeDevice = useMediaQuery(
  'only screen and (min-width : 1201px)'
);
