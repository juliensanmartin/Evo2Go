import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { TouchableOpacity, View } from 'react-native'
import MapScreen from '../screens/Map/index'
import FilterScreen from '../screens/Filter/index'
import CarDetailsScreen from '../screens/CarDetails/index'
import AboutScreen from '../screens/About/index'
import styled from 'styled-components/native'

export default StackNavigator({
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        title: '',
        headerBackTitle: 'MAP',
        headerRight: (
          <StyledRightSideHeader>
            <TouchableOpacity>
              <Icon
                type='font-awesome'
                size={ 20 }
                name='sliders'
                onPress={() => navigation.navigate('Filter')}
                color='#135589'
                //reverse
                //raised
                containerStyle={{marginHorizontal:10}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                type='font-awesome'
                size={ 20 }
                name='info-circle'
                onPress={() => navigation.navigate('About')}
                color='#135589'
                //reverse
                //raised
                containerStyle={{marginHorizontal:10}}/>
            </TouchableOpacity>
          </StyledRightSideHeader>
        ),
        headerTitleStyle: {
          color: '#135589'
        },
        headerStyle: {
         backgroundColor: '#edfafd'
        },
        gesturesEnabled: true
        // tintColor: {
        //   /* this will color your back and forward arrows or left and right icons */
        // }
      })
    },
    Filter: {
      screen: FilterScreen,
      navigationOptions: {
        title: 'FILTER',
        headerTitleStyle: {
          color: '#135589'
        },
        headerStyle: {
         backgroundColor: '#edfafd'
        },
        gesturesEnabled: true
      }
    },
    CarDetails: {
      screen: CarDetailsScreen,
      navigationOptions: {
        title: 'DETAILS',
        headerTitleStyle: {
          color: '#135589'
        },
        headerStyle: {
         backgroundColor: '#edfafd'
        },
        gesturesEnabled: true
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'ABOUT',
        headerTitleStyle: {
          color: '#135589'
        },
        headerStyle: {
         backgroundColor: '#edfafd'
        },
        gesturesEnabled: true
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

const StyledRightSideHeader = styled.View`
  flexDirection: row;
  justifyContent: space-around;
  padding: 5;
  margin: 5;
`
