import PropTypes from 'prop-types';
import React from 'react';

export const Button = React.forwardRef((props, ref) => {
  const {
    inverse,
    primary,
    btnStyle,
    btnState,
    disabled,
    children,
    small,
    ...attrs
  } = props;

  let className = 'btn';

  if (inverse) {
    className += ' btn-inverse';
  } else if (primary) {
    className += ' btn-primary';
  } else if (btnStyle === 'flat') {
    className += ' btn-link';
  } else {
    if (btnState) {
      className += ` btn-${btnState}`;
    }

    if (btnStyle === 'outline') {
      className += '-outline';
    }
  }

  if (small) {
    className += ' btn-sm';
  }

  return (
    <button ref={ref} className={className} disabled={disabled} {...attrs}>
      {children}
    </button>
  );
});

Button.propTypes = {
  inverse: PropTypes.bool,
  primary: PropTypes.bool,
  btnStyle: PropTypes.oneOf(['solid', 'outline', 'flat']),
  btnState: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  disabled: PropTypes.bool,
  children: PropTypes.any.isRequired,
  small: PropTypes.bool,
  onClick: PropTypes.func
};
