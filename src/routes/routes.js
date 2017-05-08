import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home/index';
import Filter from '../screens/Filter/index';


const Tabs = TabNavigator({
  Filter: {
    screen: Filter,
    navigationOptions: {
      tabBarLabel: 'Filter',
      tabBarIcon: ({ tintColor }) => <Icon name="sliders" type='font-awesome' size={35} color={tintColor} />,
    },
  },
});

export default StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Home: {
    screen: Home,
  }
},{
    mode: 'modal',
    headerMode: 'none',
  }
)
