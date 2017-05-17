import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import MapScreen from '../screens/Map/index'
import FilterScreen from '../screens/Filter/index'


const homeStack = StackNavigator({
    Map: { screen: MapScreen },
    Filter: { screen: FilterScreen }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default TabNavigator({
  tabHome: {
    screen: homeStack,
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
