import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { animationConfig, transitionConfig } from '../../helpers/config';

import PropTypes from 'prop-types';
import cn from 'classnames';
import { useMeasure } from '../../helpers/hooks/useMeasure';

export const Accordion = React.forwardRef((props, ref) => {
  const { accordionMultiPanel = false, children, ...attrs } = props;
  const accordionPanels = React.Children.toArray(children);

  const className = cn(props.className, 'clr-accordion');

  const [openPanels, setOpenPanels] = useState(accordionPanels.map(p => false));
  const togglePanel = index => () => {
    setOpenPanels(prev =>
      prev.map((panel, i) => {
        return index === i ? !panel : accordionMultiPanel ? panel : false;
      })
    );
  };

  const renderAccordionPanels = () => {
    return React.Children.map(accordionPanels, (panel, panelIndex) => {
      return React.cloneElement(panel, {
        open: openPanels[panelIndex],
        togglePanel: togglePanel(panelIndex)
      });
    });
  };

  return (
    <div ref={ref} className={className} {...attrs}>
      {renderAccordionPanels()}
    </div>
  );
});

Accordion.propTypes = {
  className: PropTypes.string,
  accordionMultiPanel: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export const AccordionPanel = React.forwardRef((props, ref) => {
  const {
    open,
    accordionTitle,
    accordionDescription,
    accordionContent,
    togglePanel,
    ...attrs
  } = props;

  const panelStateClassName = cn('clr-accordion-panel-inactive', {
    'clr-accordion-panel-open': open
  });

  const renderAccordionContent = () =>
    React.cloneElement(accordionContent, {
      open
    });

  return (
    <div ref={ref} className="clr-accordion-panel" {...attrs}>
      <div role="group" className={panelStateClassName}>
        <div className="clr-accordion-header">
          <button
            type="button"
            className="clr-accordion-header-button"
            onClick={togglePanel}
          >
            <span className="clr-accordion-status">
              <clr-icon shape="angle" dir="right" class="clr-accordion-angle" />
              <span className="clr-accordion-number"></span>
              <clr-icon
                shape="exclamation-circle"
                class="clr-accordion-error-icon"
              />
              <clr-icon
                shape="check-circle"
                class="clr-accordion-complete-icon"
              />
            </span>
            {accordionTitle}
            {accordionDescription}
          </button>
        </div>
        <div role="region">{renderAccordionContent()}</div>
      </div>
    </div>
  );
});

AccordionPanel.propTypes = {
  open: PropTypes.bool,
  accordionTitle: PropTypes.node.isRequired,
  accordionDescription: PropTypes.node,
  accordionContent: PropTypes.node.isRequired
};

export const AccordionTitle = React.forwardRef((props, ref) => {
  const { children, ...attrs } = props;
  return (
    <div ref={ref} className="clr-accordion-title" {...attrs}>
      {children}
    </div>
  );
});

AccordionTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export const AccordionDescription = React.forwardRef((props, ref) => {
  const { children, ...attrs } = props;
  return (
    <div ref={ref} className="clr-accordion-description" {...attrs}>
      {children}
    </div>
  );
});

AccordionDescription.propTypes = {
  children: PropTypes.node.isRequired
};

export const AccordionContent = React.forwardRef((props, ref) => {
  const { open, children, ...attrs } = props;
  const [bind, { top, bottom }] = useMeasure();
  const totalHeight = top + bottom; // Total height = top and bottom (y + height)
  const { height } = useSpring({
    from: { height: 0 },
    to: {
      height: open ? totalHeight : 0
    },
    ...transitionConfig
  });
  return (
    <animated.div
      ref={ref}
      className="clr-accordion-content"
      style={{ height: !open ? 'auto' : height }}
      {...attrs}
    >
      <animated.div className="clr-accordion-inner-content" {...bind}>
        {children}
      </animated.div>
    </animated.div>
  );
});

AccordionContent.propTypes = {
  children: PropTypes.node.isRequired
};
