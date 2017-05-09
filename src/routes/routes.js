import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements';

import Home from '../screens/Home/index'
import Filter from '../screens/Filter/index'

export default TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' size={ 20 } name='map' color={ tintColor }/>
    },
  },
  Filter: {
    screen: Filter,
    navigationOptions: {
      tabBarLabel: 'Filter',
      tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' size={ 20 } name='sliders' color={ tintColor }/>
    },
  },
},{
    mode: 'modal',
    headerMode: 'none',
  }
)
