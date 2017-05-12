import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements';

import MapScreen from '../screens/Home/index'
import FilterScreen from '../screens/Filter/index'

const drawerRight = DrawerNavigator({
  Filter: { screen: FilterScreen }
}, {
    drawerPosition: 'right',
    drawerWidth: 200
})

const homeStack = StackNavigator({
  Map: { screen: MapScreen }
  drawerFilter: { screen: drawerRight }
})

export default TabNavigator({
  tabMap: {
    screen: mapStack,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' size={ 20 } name='map' color={ tintColor }/>
    },
  },
  // tabFilter: {
  //   screen: filterStack,
  //   navigationOptions: {
  //     tabBarLabel: 'Filter',
  //     tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' size={ 20 } name='sliders' color={ tintColor }/>
  //   },
  // },
},{
    mode: 'modal',
    headerMode: 'none',
  }
)
