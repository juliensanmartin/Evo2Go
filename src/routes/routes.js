import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import MapScreen from '../screens/Map/index'
import FilterScreen from '../screens/Filter/index'
import CarDetailsScreen from '../screens/CarDetails/index'
import AboutScreen from '../screens/About/index'

const homeStack = StackNavigator({
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'MAP',
        headerRight: (
          <TouchableOpacity>
            <Icon
              type='font-awesome'
              size={ 20 }
              name='sliders'
              onPress={() => navigation.navigate('Filter')}
              color='#135589'
              //reverse
              //raised
              containerStyle={{marginHorizontal:25}}/>
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          color: '#135589'
        },
        headerStyle: {
         backgroundColor: '#edfafd'
        },
        // tintColor: {
        //   /* this will color your back and forward arrows or left and right icons */
        // }
      })
    },
    Filter: {
      screen: FilterScreen,
      navigationOptions: {
        title: 'FILTER',
        gesturesEnabled: true,
        headerTitleStyle: {
          color: '#135589'
        },
        headerStyle: {
         backgroundColor: '#edfafd'
        },
      }
    },
    CarDetails: {
      screen: CarDetailsScreen,
      navigationOptions: {
        title: 'DETAILS',
        gesturesEnabled: true,
        headerTitleStyle: {
          color: '#135589'
        },
        headerStyle: {
         backgroundColor: '#edfafd'
        },
      }
    }
  },
  {
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1
    }
  }
)

const settingsDrawer = DrawerNavigator({
    About: {
      screen: AboutScreen
    },
    About2: {
      screen: AboutScreen
    }
  },
  {
    drawerWidth: 200
  })

export default TabNavigator({
  tabHome: {
    screen: homeStack,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon type='ionicon' size={ 20 } name='ios-map' color={ tintColor }/>
    },
  },
  tabSettings: {
    screen: settingsDrawer,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <Icon type='ionicon' size={ 20 } name='ion-navicon' color={ tintColor }/>
    },
  }
},{
    mode: 'modal',
    headerMode: 'none',
    animationEnabled: true,
    swipeEnabled: true
  }
)
