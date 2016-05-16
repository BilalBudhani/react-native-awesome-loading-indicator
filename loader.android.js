'use strict';

let React = require('react');
let {
  View,
  Text,
  ProgressBarAndroid,
  StyleSheet
} = require('react-native');
let styles = require('./styles');

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>{this.props.text}</Text>
        <ProgressBarAndroid color="#fff" styleAttr="Large" />
      </View>
    );
  }
});
