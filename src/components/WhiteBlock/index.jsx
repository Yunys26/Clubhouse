import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css'

const WhiteBlock = ({ children }) => <div className={styles.whiteBlock}>{children}</div>

WhiteBlock.propTypes = { children: PropTypes.node };

export default WhiteBlock;
