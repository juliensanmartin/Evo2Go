import React from 'react'
import { Image } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
//import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from '../screens/Home/index'
import Filter from '../screens/Filter/index'

export default TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
    },
  },
  Filter: {
    screen: Filter,
    navigationOptions: {
      tabBarLabel: 'Filter',
      tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'sliders' } color={ tintColor }/>
    },
  },
},{
    mode: 'modal',
    headerMode: 'none',
  }
)
