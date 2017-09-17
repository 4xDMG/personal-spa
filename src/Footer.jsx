import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  container: {
    backgroundColor: '#000',
    height: '40px',
    width: '100%',
  },
};

const Footer = ({ classes }) => <div className={classes.container}>daniel tait 2017</div>;

Footer.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Footer);
