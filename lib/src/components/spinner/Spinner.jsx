import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

export const Spinner = React.forwardRef((props, ref) => {
  const {
    children,
    inline,
    inverse,
    medium,
    small,
    ariaLive = 'polite',
    ...attrs
  } = props;
  const className = cn(props.className, 'spinner', {
    'spinner-inline': inline,
    'spinner-inverse': inverse,
    'spinner-md': medium,
    'spinner-sm': small
  });

  return (
    <div
      ref={ref}
      className={className}
      aria-busy={true}
      aria-live={ariaLive}
      {...attrs}
    >
      {children}
    </div>
  );
});

Spinner.propTypes = {
  inline: PropTypes.bool,
  inverse: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  ariaLive: PropTypes.oneOf(['assertive', 'off'])
};
