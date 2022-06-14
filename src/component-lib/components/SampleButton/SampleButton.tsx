import React from 'react';
import './sample-button.css';

interface SampleButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SampleButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: SampleButtonProps) => {
  const mode = primary ? 'storybook-sample-button--primary' : 'storybook-sample-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-sample-button', `storybook-sample-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
