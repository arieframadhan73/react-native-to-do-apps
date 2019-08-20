import React, {Component} from 'react';
import {View, Animated, Dimensions} from 'react-native';

const dimensionHeight = Dimensions.get('window').height;
const height = dimensionHeight * 2;

class SplashScreen extends Component {
  circle = new Animated.Value(0);
  title = new Animated.Value(0);

  componentDidMount() {
    this.animatedFunction();
  }

  animatedFunction() {
    Animated.sequence([
      Animated.timing(this.circle, {
        toValue: 1,
        duration: 3000,
      }),
      Animated.timing(this.title, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }

  render() {
    const translateY = this.circle.interpolate({
      inputRange: [0, 1],
      outputRange: [-height, 0],
    });
    const opacity = this.title.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.circle, {transform: [{translateY}]}]} />
        <Animated.Text style={[styles.text, {opacity}]}>
          Selamat Datang
        </Animated.Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: height,
    height,
    backgroundColor: '#0271DF',
    borderRadius: dimensionHeight,
    position: 'absolute',
    zIndex: -1,
  },
  icon: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginTop: 10,
  },
};

export default SplashScreen;
