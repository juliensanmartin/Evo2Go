import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import { Badge, Icon } from 'react-native-elements'

export default class CarDetailsComponent extends Component {
  render() {
    const { type, address, fuel, name } = this.props.navigation.state.params.marker
    let fuelColor = 'green'
    if (fuel > 20 && fuel < 50) fuelColor = 'orange'
    if (fuel <= 20) fuelColor = 'red'

    let logo
    if (type==='evoPin') logo=require('../assets/evo_car.png')
    if (type==='car2GoPin') logo=require('../assets/car2go_car.png')
    return (
      <StyledContainer>
        <ImageContainer>
          <StyledImage
            source={logo}
          />
        </ImageContainer>
        <DetailsContainer>
          <ViewItem>
            <Icon reverse type='font-awesome' size={ 20 } name='map-marker' color='#6699ff'/>
            <Text>{address}</Text>
          </ViewItem>
          <ViewItem>
            <Icon reverse type='ionicon' size={ 20 } name='ios-speedometer' color='#6699ff'/>
            <Badge value={fuel} containerStyle={{ backgroundColor: fuelColor, width:50, height:20 }} />
          </ViewItem>
          <ViewItem>
            <Icon reverse type='font-awesome' size={ 20 } name='id-card' color='#6699ff'/>
            <Text>{name}</Text>
          </ViewItem>
        </DetailsContainer>
      </StyledContainer>
    )
  }
}

CarDetailsComponent.propTypes = {
  navigation: PropTypes.object.isRequired
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: center;
  padding: 10;
  margin: 10;
  height: 400;
`

const DetailsContainer = styled.View`
  flexDirection: column;
  justifyContent: space-around;
  backgroundColor: rgba(255,255,255,0.9);
  padding: 10;
  margin: 10;
`

const ViewItem = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const ImageContainer = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: flex-end;
`

const StyledImage= styled.Image`
  height: 150;
  width: 250;
`
