import { useMediaQuery } from '@uidotdev/usehooks';

const useDeviceType = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width: 640px)');
  const isMediumDevice = useMediaQuery('only screen and (max-width: 1024px)');
  const isLargeDevice = useMediaQuery('only screen and (min-width: 1024px)');
  const isExtraLargeDevice = useMediaQuery(
    'only screen and (min-width: 1201px)'
  );

  return { isSmallDevice, isMediumDevice, isLargeDevice, isExtraLargeDevice };
};

export default useDeviceType;
