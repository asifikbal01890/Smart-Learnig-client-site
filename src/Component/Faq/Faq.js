import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Faq = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Simple tooltip
        </Tooltip>
      );

    return (
        <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="light">Hover me to see</Button>
      </OverlayTrigger>
    );
};

export default Faq;