import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

export const Badge = React.forwardRef((props, ref) => {
  const { badgeType, children, ...attrs } = props;

  const className = cn(props.className, 'badge', {
    [`badge-${badgeType}`]: !!badgeType
  });

  return (
    <span ref={ref} className={className} {...attrs}>
      {children}
    </span>
  );
});

Badge.propTypes = {
  badgeType: PropTypes.string
};
