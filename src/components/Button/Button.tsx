import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  // props?: React.HTMLAttributes<HTMLButtonElement>;
  appearance?: 'primary' | 'ghost';
  theme?: 'light' | 'dark';
  sx?: React.CSSProperties;

  [key: string]: React.HTMLAttributes<HTMLButtonElement> | string | undefined | (() => void) | React.ReactNode | React.CSSProperties;
}

const Button = ({className, onClick, appearance = "primary", theme,sx, ...props}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={sx}
      className={[
        className,
        classes.Button,
        classes[appearance],
        theme ? classes[theme] : ""
      ].join(' ')}
      {...props}
    >

    </button>
  );
};

export default Button;
