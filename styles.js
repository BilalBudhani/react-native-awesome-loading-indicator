'use strict';

let {
  StyleSheet
} = require('react-native');

module.exports = StyleSheet.create({
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
