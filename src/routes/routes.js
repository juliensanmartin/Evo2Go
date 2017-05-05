import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home/index';

export default StackNavigator({
  Home: {
    screen: Home,
  },
})
