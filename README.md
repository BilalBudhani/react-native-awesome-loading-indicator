# Sleek Loading Indicator for React Native
I was looking for a drop-in, lightweight and cool looking loading component for my app. I couldn't find one so, I wrote it myself.
A sleek loading indicator for React Native apps for iOS and Android.

In action on __iOS__

![](http://g.recordit.co/p2Cs4yDtHm.gif)  

In action on __Android__

![](http://g.recordit.co/Bc3SG9UCH3.gif)


### Usage
Install the package
```
npm install react-native-sleek-loading-indicator --save
```

```javascript

const SleekLoadingIndicator = require('react-native-sleek-loading-indicator');

const MyView = React.createClass({
   render() {
    if (this.state.loading) {
      return (<SleekLoadingIndicator loading={this.state.loading} />);
   } else {
     //.... Do my stuff
   }
});

```

### Props
- `text` (Optional) - Custom text can be provided.
- `loading` (bool | required) - tells the component to show/hide loading indicator.

### Roadmap
- Light theme for dark backgrounds.
- Animation when component disappears from view.

### Contribution Guide
Feel free to fork the repo, add feature and send me a pull request.

### Note from author
Gimme a buzz [@BilalBudhani](https://twitter.com/BilalBudhani) If you've questions, suggestions or just wanna say Hi.

### MIT Licensed
