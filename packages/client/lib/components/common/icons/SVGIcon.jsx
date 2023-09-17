import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  CheckIcon,
  DocumentMagnifyingGlassIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  NoSymbolIcon,
  PhotoIcon,
  PlusCircleIcon,
  UserIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

/**
 * map of icon names to import paths
 */
const iconMap = new Map()
  .set('arrowUturnLeftIcon', ArrowUturnLeftIcon)
  .set('arrowUturnRightIcon', ArrowUturnRightIcon)
  .set('checkIcon', CheckIcon)
  .set('documentMagnifyingGlassIcon', DocumentMagnifyingGlassIcon)
  .set('homeIcon', HomeIcon)
  .set('magnifyingGlassIcon', MagnifyingGlassIcon)
  .set('mapPinIcon', MapPinIcon)
  .set('plusCircleIcon', PlusCircleIcon)
  .set('photoIcon', PhotoIcon)
  .set('noSymbolIcon', NoSymbolIcon)
  .set('userIcon', UserIcon)
  .set('xCircleIcon', XCircleIcon)
  .set('xMarkIcon', XMarkIcon);

/**
 * reusable icon component for the app
 * - new or existing icons should be added here
 */
export const SVGIcon = ({ className = '', name, ...rest }) => {
  const IconComponent = iconMap.get(name);
  const combinedClasses = `h-6 w-6 ${className}`;

  return <IconComponent {...rest} className={combinedClasses} />;
};
