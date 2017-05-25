import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import MapScreen from '../screens/Map/index'
import FilterScreen from '../screens/Filter/index'

const homeStack = StackNavigator({
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Map',
        headerRight: (
          <Icon
            type='font-awesome'
            size={ 20 }
            name='sliders'
            onPress={() => navigation.navigate('Filter')}/>
          )
      })
    },
    Filter: {
      screen: FilterScreen,
      navigationOptions: {
        title: 'Filter'
      }
    }
  }
)

export default TabNavigator({
  tabHome: {
    screen: homeStack,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' size={ 20 } name='map' color={ tintColor }/>
    },
  }
},{
    mode: 'modal',
    headerMode: 'none',
  }
)
