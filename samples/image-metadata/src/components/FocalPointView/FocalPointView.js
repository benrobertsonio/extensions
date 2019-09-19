import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextInput } from '@contentful/forma-36-react-components';

import { styles } from './styles';

const FocalPointView = ({ focalPoint: { x, y }, showFocalPointDialog }) => {
  return (
    <div className={styles.container}>
      <TextInput
        className={styles.input}
        width="large"
        type="text"
        id="focal-point"
        testId="focal-point"
        value={`x: ${x}px / y: ${y}px`}
        disabled
      />
      <Button className={styles.button} buttonType="muted" onClick={showFocalPointDialog}>
        Set focal point
      </Button>
    </div>
  );
};

FocalPointView.propTypes = {
  focalPoint: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  showFocalPointDialog: PropTypes.func.isRequired
};

FocalPointView.defaultProps = {
  focalPoint: {
    x: 0,
    y: 0
  }
};

export { FocalPointView };
