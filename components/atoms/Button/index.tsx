import React, { Component } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import styles from './Button.module.scss';

export enum ButtonType {
  PLAIN = 'plain',
}

export type Props = {
  children: React.ReactNode;
  customClass?: string;
  Icon?: any;
  type?: ButtonType;
} & (
  | {
      to: string | (() => void);
      onClick?: () => void;
    }
  | {
      to?: string | (() => void);
      onClick: () => void;
    }
);

const Button = ({
  Icon,
  children,
  customClass,
  onClick,
  to,
  type,
}: Props): JSX.Element => {
  const router = useRouter();

  const handleClick = async () => {
    if (typeof to === 'function') to();
    if (to && typeof to === 'string') router.push(to);
    if (onClick) onClick();
  };

  const classNames = cn(styles.btn, { [styles[type!]]: type }, customClass);
  const classesText = cn({ [styles.icon_text]: Icon });
  return (
    <button type="button" className={classNames} onClick={handleClick}>
      {Icon && <Icon cssClasses={cn('icon', styles.icon)} />}
      <span className={classesText}>{children}</span>
    </button>
  );
};

export default Button;
