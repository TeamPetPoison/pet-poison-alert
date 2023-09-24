import { SVGIcon } from './icons/SVGIcon';

const BUTTON_TYPE_CLASSES_MAP = {
  neutral: 'bg-background text-foreground',
  positive: 'bg-positive text-background',
  negative: 'bg-negative text-background',
};

export const Button = ({
  children,
  handleClick,
  iconName,
  buttonType = 'neutral',
  ...rest
}) => {
  const buttonClasses = BUTTON_TYPE_CLASSES_MAP[buttonType];

  return (
    <button
      className={`flex w-full items-center justify-center rounded-2xl border px-3.5 py-2 text-xl ${buttonClasses}`}
      onClick={handleClick}
      type="button"
      {...rest}
    >
      {children}
      <SVGIcon name={iconName} className="pl-1" />
    </button>
  );
};
