import React, { ReactNode } from 'react';

import cn from 'classnames';
import { HiEye, HiEyeOff } from 'react-icons/hi';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  error?: string;
  icon?: ReactNode;
  label?: ReactNode;
  leading?: ReactNode;
  labelClassName?: string;
  errorClassName?: string;
  withShowPassword?: boolean;
  iconAlignClassName?: string;
  containerClassName?: string;
  disableIconInputFocus?: boolean;
  onChange?: (i: object) => object;
  onSetFieldValue?: (key: string, v: string) => void;
}

function FormInput({
  id,
  name,
  icon,
  type,
  error,
  label,
  leading,
  required,
  onChange,
  className,
  errorClassName,
  labelClassName,
  onSetFieldValue,
  withShowPassword,
  containerClassName,
  iconAlignClassName,
  disableIconInputFocus,
  ...rest
}: IProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleOnShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onSetFieldValue === 'function') {
      onSetFieldValue(name, e?.target?.value);
      return;
    }
    if (typeof onChange === 'function')
      onChange((prev: object) => ({
        ...prev,
        [name]: e?.target.value,
      }));
  };

  return (
    <div>
      <div className="w-full relative">
        <div
          className={cn(
            'form-container transition duration-300 ease-in-out',
            containerClassName,
            {
              'form-container': !error,
              'form-container-error': error,
            }
          )}
        >
          {label && (
            <label
              className={cn('form-label', labelClassName)}
              htmlFor={id ?? name}
            >
              {label}
              {required ? <span className="text-red-500">*</span> : ''}
            </label>
          )}
          <div className="relative">
            {leading && (
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <span
                  className={cn(
                    'transition duration-300 ease-in-out text-gray-400 font-light',
                    {
                      'form-input-leading-error': error,
                      'form-input-leading': !error,
                    }
                  )}
                >
                  {leading}
                </span>
              </div>
            )}
            <input
              name={name}
              id={id ?? name}
              autoComplete="on"
              required={required}
              onChange={handleOnChange}
              type={
                withShowPassword
                  ? `${showPassword ? 'text' : 'password'}`
                  : type
              }
              className={cn('transition duration-300 ease-in-out', className, {
                'form-input': !error,
                'form-input-error': error,
                'pl-8': leading,
                'pl-3 pr-8': icon,
              })}
              {...rest}
            />
            <>
              {withShowPassword && type === 'password' ? (
                <span
                  onClick={handleOnShowPassword}
                  role="presentation"
                  className="cursor-pointer absolute right-2 h-full top-0 flex items-center"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              ) : (
                <>
                  {icon && (
                    <span
                      className={cn(
                        'absolute h-full top-0 flex items-center',
                        iconAlignClassName
                      )}
                      onClick={() => {
                        if (!disableIconInputFocus) return;
                        const x = document.activeElement;
                        setTimeout(() => {
                          if (x instanceof HTMLElement) {
                            x.blur();
                          }
                        }, 100);
                      }}
                      role="presentation"
                    >
                      {icon}
                    </span>
                  )}
                </>
              )}
            </>
          </div>
        </div>
        {!!error && (
          <small className={cn('form-error-badge', errorClassName)}>
            {error ?? ''}
          </small>
        )}
      </div>
    </div>
  );
}

FormInput.defaultProps = {
  type: 'text',
  icon: undefined,
  label: undefined,
  error: undefined,
  leading: undefined,
  onChange: undefined,
  withShowPassword: false,
  labelClassName: undefined,
  errorClassName: undefined,
  onSetFieldValue: undefined,
  containerClassName: undefined,
  disableIconInputFocus: false,
  iconAlignClassName: 'right-2',
};

export default FormInput;
