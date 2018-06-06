import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#f0f',
  },
  touch: {
    backgroundColor: '#00f',
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    paddingLeft: 18,
  },
});

const Button = props => (
  <TouchableOpacity style={styles.touch} >
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
