import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { TouchableOpacity, View } from 'react-native'
import MapScreen from '../screens/Map/index'
import AboutComponent from '../screens/About/index'
import styled from 'styled-components/native'

export default StackNavigator({
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'CAR 4 VAN',
        headerBackTitle: 'MAP',
        headerRight: (
          <StyledRightSideHeader>
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
      })
    },
    About: {
      screen: AboutComponent,
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
