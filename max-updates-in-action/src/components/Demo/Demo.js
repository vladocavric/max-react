import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Demo.module.css';

const Demo = (props) =>{ 
  console.log('Demo is running')
  return(
  <>
 {props.show ?  <p className={styles.Demo}>
    Demo Component
  </p> : <p></p>}
  </>
)};

// Demo.ropTypes = {};

// Demo.defaultProps = {};

export default React.memo(Demo);
