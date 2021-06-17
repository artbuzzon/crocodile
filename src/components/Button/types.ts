import React, { FormEvent, MouseEventHandler } from 'react';

export interface ButtonProps {
  size?: string;
  type?: 'button' | 'submit' | 'reset';
  styleType?: string;
  color?: string;
  disabled?: boolean;
  text: string;
  className?: string;
  as?: 'link';
  href?: string;
  onClick?: (e: MouseEventHandler<HTMLButtonElement>) => void;
}
