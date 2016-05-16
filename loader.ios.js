'use strict';

let React = require('react');
let {
   View,
   Text,
   ActivityIndicatorIOS,
   StyleSheet
} = require('react-native');
let styles = require('./styles');

module.exports = React.createClass({
   render() {
      return (
         <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>{this.props.text}</Text>
            <View style={styles.spinnerContainer}>
              <ActivityIndicatorIOS
               animating={true}
               size='large'
              />
            </View>
         </View>
      );
   }
});
