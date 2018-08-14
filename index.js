'use strict';

let React = require('react');
let {
   View,
   Text,
   StyleSheet
} = require('react-native');
let styles = require('./styles');
let LoadingIndicator = require('./loader');

let PropTypes = require('prop-types');
let createReactClass = require('create-react-class');

const SleekLoadingIndicator = createReactClass({

  propTypes: {
    text: PropTypes.string,
    loading: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      text: 'Loading...',
      loading: true
    }
  },

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.container}>
          <LoadingIndicator text={this.props.text} />
        </View>
      );
    } else {
      return null;
    }
  }
});

module.exports = SleekLoadingIndicator;
