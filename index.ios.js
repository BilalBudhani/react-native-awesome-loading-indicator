'use strict';

var React = require('react-native');
var {
   View,
   Text,
   ActivityIndicatorIOS,
   StyleSheet
} = React;


const SleekLoadingIndicator = React.createClass({

  getDefaultProps() {
    return {
      text: 'Loading...',
      loading: true
    }
  },

  propTypes: {
    // text: React.propTypes.string,
    loading: React.PropTypes.bool,
  },

  renderText(){
    if(this.props.text){
      return <Text style={styles.loadingText}>{this.props.text}</Text> 
    }else{
      return null; 
    }
  },


  render() {
    if (this.props.loading) {
      return (
        <View
          style={styles.container}>
            <View style={styles.loadingContainer}>

            {this.renderText()}

            <View style={styles.spinnerContainer}>
              <ActivityIndicatorIOS
                animating={true}
                size='large'
              />
            </View>

            </View>
        </View>
      );
    } else {
      return null;
    }
  }
});

const styles = StyleSheet.create({
   container: {
      flex: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center'
   },

   loadingContainer: {
     padding: 12,
     backgroundColor: '#000',
     borderRadius: 8,
     opacity: .8,
     justifyContent: 'center',
     alignItems: 'center'
   },

   loadingText: {
     fontWeight: 'bold',
     color: '#fff',
     textAlign: 'center',
     fontSize: 22,
   },

   spinnerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
      marginTop: 4,
   },
});

module.exports = SleekLoadingIndicator;
