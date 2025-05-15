export const MEDIA_MAX_WIDTH = {
  imacretina: 2560,
  desktophidpi: 1920,
  lg: 1440,
  md: 1199.98,
  ipad12pro: 1024.98,
  sm: 991.98,
  ipad10pro: 834.98,
  ipad9pro: 768.98,
  xs: 767.98,
  xxs: 575.98,
  iphone6s: 375.98,
};

export const BREAKPOINTS = {
  mobile: `(max-width: ${MEDIA_MAX_WIDTH.xs}px)`,
  tablet: `(max-width: ${MEDIA_MAX_WIDTH.ipad12pro}px) and (min-width: ${MEDIA_MAX_WIDTH.xs}px)`,
  desktop: `(min-width: ${MEDIA_MAX_WIDTH.md}px)`,
};
