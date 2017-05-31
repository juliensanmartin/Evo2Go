import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import MapScreen from '../screens/Map/index'
import FilterScreen from '../screens/Filter/index'
import CarDetailsScreen from '../components/CarDetails/car-details'

const carDetailsStack = StackNavigator({
    CarDetails: {
      screen: CarDetailsScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      height: 50,
      backgroundColor: 'purple'
    }
  }
)

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
            onPress={() => navigation.navigate('Filter')}
            containerStyle={{marginHorizontal:10}}/>
          )
      })
    },
    Filter: {
      screen: FilterScreen,
      navigationOptions: {
        title: 'Filter'
      }
    },
    CarDetailsStack: {
      screen: carDetailsStack
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
