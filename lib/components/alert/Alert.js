import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const ALERT_STATE_MAP = {
  success: ['check-circle', 'Success'],
  info: ['info-circle', 'Info'],
  warning: ['exclamation-triangle', 'Warning'],
  danger: ['exclamation-circle', 'Error']
};

export const Alerts = React.forwardRef((props, ref) => {
  const { children, ...attrs } = props;
  const alerts = React.Children.toArray(children);
  const totalAlerts = alerts.length;
  // Page Starts from 0
  const [page, setPage] = useState(0);
  const onPrevious = () => setPage(p => (p - 1 < 0 ? totalAlerts - 1 : p - 1));
  const onNext = () => setPage(p => (p + 1 >= totalAlerts ? 0 : p + 1));

  const renderAlerts = () => {
    return React.Children.map(alerts, (alert, index) => {
      return React.cloneElement(alert, {
        alertHidden: index !== page,
        alertAppLevel: true
      });
    });
  };

  const alertsState =
    (totalAlerts > 0 && alerts[page].props.alertState) || 'info';

  const className = cn('alerts', `alert-${alertsState}`);

  return (
    <div ref={ref} className={className} {...attrs}>
      <div className="alerts-pager">
        <div className="alerts-pager-control">
          <div className="alerts-page-down">
            <button className="alerts-pager-button" onClick={onPrevious}>
              <clr-icon shape="caret left" role="none" title="Previous" />
            </button>
          </div>
          <div className="alerts-pager-text">
            {page + 1} / {totalAlerts}
          </div>
          <div className="alerts-page-up">
            <button className="alerts-pager-button" onClick={onNext}>
              <clr-icon shape="caret right" role="none" title="Next" />
            </button>
          </div>
        </div>
      </div>
      {renderAlerts()}
    </div>
  );
});

Alerts.propTypes = {
  children: PropTypes.node.isRequired
};

export const Alert = React.forwardRef((props, ref) => {
  const {
    alertClosable = true,
    alertClosed = false,
    onCloseAlert,
    small,
    alertState = 'info',
    alertAppLevel,
    closeButtonAriaLabel = 'Close alert',
    alertItems,
    children,
    alertHidden,
    ...attrs
  } = props;
  let className = cn(props.className, 'alert', `alert-${alertState}`, {
    'alert-sm': small,
    'alert-app-level': alertAppLevel,
    'alert-hidden': alertHidden
  });

  const [defaultIconShape, defaultIconTitle] = ALERT_STATE_MAP[alertState];

  const renderAlertItems = () => {
    const items = React.Children.toArray(children);
    return React.Children.map(items, item => {
      const {
        iconShape = defaultIconShape,
        iconTitle = defaultIconTitle
      } = item.props;
      return React.cloneElement(item, {
        iconShape,
        iconTitle
      });
    });
  };

  return (
    !alertClosed && (
      <div ref={ref} className={className} {...attrs}>
        <div className="alert-items">{renderAlertItems()}</div>
        {alertClosable && (
          <button
            className="close"
            type="button"
            aria-label={closeButtonAriaLabel}
            onClick={onCloseAlert}
          >
            <clr-icon shape="close" role="none" />
          </button>
        )}
      </div>
    )
  );
});

Alert.propTypes = {
  className: PropTypes.string,
  alertClosable: PropTypes.bool,
  alertClosed: PropTypes.bool,
  onCloseAlert: PropTypes.func,
  small: PropTypes.bool,
  alertState: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  alertAppLevel: PropTypes.bool,
  closeButtonAriaLabel: PropTypes.string,
  children: PropTypes.node.isRequired
};

export const AlertItem = React.forwardRef((props, ref) => {
  const { iconShape, iconTitle, children, ...attrs } = props;

  return (
    <div ref={ref} className="alert-item" {...attrs}>
      <div className="alert-icon-wrapper">
        <clr-icon
          class="alert-icon"
          shape={iconShape}
          role="none"
          title={iconTitle}
        />
      </div>
      {typeof children === 'string' ? (
        <span className="alert-text">{children}</span>
      ) : (
        children
      )}
    </div>
  );
});

AlertItem.propTypes = {
  iconShape: PropTypes.string,
  iconTitle: PropTypes.string,
  children: PropTypes.any.isRequired
};
