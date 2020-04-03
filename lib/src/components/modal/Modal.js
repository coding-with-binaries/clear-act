import React, { useCallback, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { commonStrings } from '../../constants/CommonStrings';
import { transitionConfig } from '../../helpers/config';

export const Modal = React.forwardRef((props, ref) => {
  const {
    modalOpen,
    modalSize,
    modalClosable = true,
    modalStaticBackdrop = true,
    onModalClose,
    modalTitle,
    modalBody,
    modalFooter,
    modalPreventClose = false,
    ...attrs
  } = props;

  const className = cn('modal-dialog', {
    [`modal-${modalSize}`]: !!modalSize
  });

  const dialogTransitions = useTransition(modalOpen, null, {
    from: { transform: 'translate(0, -25%)' },
    enter: { transform: 'translate(0, 0)' },
    leave: { transform: 'translate(0, 0)' },
    ...transitionConfig
  });

  const backdropTransitions = useTransition(modalOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.85 },
    leave: { opacity: 0 },
    ...transitionConfig
  });

  const onModalBackdropClick = () => {
    if (!modalStaticBackdrop) onModalClose();
  };

  const listenForKeyRelease = useCallback(
    event => {
      if (event.keyCode === 27) {
        // 27 corresponds to Esc key
        if (modalClosable && modalOpen && !modalPreventClose) {
          onModalClose();
        }
      }
    },
    [modalClosable, modalOpen, modalPreventClose, onModalClose]
  );

  useEffect(() => {
    document.addEventListener('keyup', listenForKeyRelease);

    return () => {
      document.removeEventListener('keyup', listenForKeyRelease);
    };
  }, [listenForKeyRelease]);

  return (
    modalOpen && (
      <div ref={ref} className="modal" {...attrs}>
        {dialogTransitions.map(
          ({ item, key, props: style }) =>
            item && (
              <animated.div
                key={key}
                style={style}
                className={className}
                role="dialog"
                aria-modal={true}
                aria-hidden={!modalOpen}
              >
                <div className="clr-sr-only">
                  {commonStrings.keys.modalContentStart}
                </div>
                <div className="modal-content-wrapper">
                  <FocusTrap>
                    <div className="modal-content">
                      <div className="modal-header">
                        {modalClosable && (
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={onModalClose}
                          >
                            <clr-icon shape="close" />
                          </button>
                        )}
                        <div className="modal-title-wrapper">{modalTitle}</div>
                      </div>
                      {modalBody}
                      {modalFooter}
                    </div>
                  </FocusTrap>
                </div>

                <div className="clr-sr-only">
                  {commonStrings.keys.modalContentEnd}
                </div>
              </animated.div>
            )
        )}
        {backdropTransitions.map(
          ({ item, key, props: style }) =>
            item && (
              <animated.div
                key={key}
                style={style}
                className="modal-backdrop"
                aria-hidden={true}
                onClick={onModalBackdropClick}
              />
            )
        )}
      </div>
    )
  );
});

Modal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  modalSize: PropTypes.oneOf(['sm', 'lg', 'xl']),
  modalClosable: PropTypes.bool,
  modalStaticBackdrop: PropTypes.bool,
  onModalClose: PropTypes.func.isRequired,
  modalTitle: PropTypes.node.isRequired,
  modalBody: PropTypes.node.isRequired,
  modalFooter: PropTypes.node,

  // Escape Key does not close the modal
  modalPreventClose: PropTypes.bool
};

export const ModalTitle = React.forwardRef((props, ref) => {
  const { children, ...attrs } = props;
  return (
    <div ref={ref} className="modal-title" {...attrs}>
      {children}
    </div>
  );
});

ModalTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export const ModalBody = React.forwardRef((props, ref) => {
  const { children, ...attrs } = props;
  return (
    <div ref={ref} className="modal-body" {...attrs}>
      {children}
    </div>
  );
});

ModalBody.propTypes = {
  children: PropTypes.node.isRequired
};

export const ModalFooter = React.forwardRef((props, ref) => {
  const { children, ...attrs } = props;
  return (
    <div ref={ref} className="modal-footer" {...attrs}>
      {children}
    </div>
  );
});

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired
};
