import React, { ReactElement, ReactNode } from 'react';

import cn from 'classnames';
import { HiEyeSlash } from 'react-icons/hi2';
import { IoCloseSharp } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlinePrinter } from 'react-icons/ai';
import { HiDownload, HiEye, HiPencil, HiPlus } from 'react-icons/hi';
import { IconType } from 'react-icons';

type TSize = 'xs' | 'sm' | 'md' | 'lg';

type TColor =
  | 'info'
  | 'gray'
  | 'dark'
  | 'line'
  | 'light'
  | 'danger'
  | 'primary'
  | 'success'
  | 'warning'
  | 'outline'
  | 'danger-outline'
  | 'primary-outline';

type TIcon =
  | 'view'
  | 'create'
  | 'update'
  | 'unview'
  | 'close'
  | 'download'
  | 'remove'
  | 'print';

const renderSize: Record<TSize, string> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const renderColor: Record<TColor, string> = {
  info: 'info',
  gray: 'gray',
  dark: 'dark',
  line: 'line',
  light: 'light',
  danger: 'danger',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  outline: 'outline',
  'danger-outline': 'danger-outline',
  'primary-outline': 'primary-outline',
};

const renderFocus: Record<TColor, string> = {
  info: 'focus-info',
  gray: 'focus-gray',
  dark: 'focus-dark',
  line: 'focus-line',
  light: 'focus-light',
  danger: 'focus-danger',
  primary: 'focus-primary',
  success: 'focus-success',
  warning: 'focus-warning',
  outline: 'focus-outline',
  'danger-outline': '',
  'primary-outline': '',
};

const renderIcon: Record<TIcon, IconType> = {
  view: HiEye,
  create: HiPlus,
  update: HiPencil,
  unview: HiEyeSlash,
  close: IoCloseSharp,
  download: HiDownload,
  remove: MdDeleteForever,
  print: AiOutlinePrinter,
};

const renderIconSize: Record<TSize, string> = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  size?: TSize;
  color?: TColor;
  focus?: boolean;
  label?: ReactNode;
  isLoading?: boolean;
  withLoader?: boolean;
  icon?: TIcon | ReactElement;
}

function Button({
  to,
  size,
  icon,
  color,
  label,
  focus,
  isLoading,
  withLoader,
  ...rest
}: IProps) {
  const renderLabel = React.useMemo(() => {
    if (typeof icon === 'object') {
      return (
        <div className="flex items-center gap-1">
          {icon}
          {label}
        </div>
      );
    }

    if (typeof icon === 'string' && size) {
      const Icon = renderIcon[icon];
      const iconSize = renderIconSize[size];
      return (
        <div className="flex items-center gap-1">
          <Icon className={iconSize} />
          {label}
        </div>
      );
    }
    return label;
  }, [icon, label, size]);

  return (
    <button
      type="button"
      disabled={isLoading}
      {...rest}
      className={cn(
        'duration-300 ease-out-in transition',
        renderSize[size || 'md'],
        {
          '!cursor-wait': isLoading,
          [`${rest?.className}`]: rest?.className,
          [color ? renderFocus[color] : '']: focus,
          [`btn ${[color ? renderColor[color] : '']}`]: color,
        }
      )}
    >
      {isLoading && withLoader ? 'Loading...' : renderLabel}
    </button>
  );
}

Button.defaultProps = {
  size: 'md',
  focus: false,
  to: undefined,
  icon: undefined,
  color: undefined,
  label: undefined,
  isLoading: false,
  withLoader: false,
};

export default Button;
