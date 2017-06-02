import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Badge } from 'react-native-elements'

export default class CarDetailsComponent extends Component {
  render() {
    const { type, address, fuel, name } = this.props.navigation.state.params.marker
    let fuelColor = 'green'
    if (fuel > 20 && fuel < 50) fuelColor = 'orange'
    if (fuel <= 20) fuelColor = 'red'

    return (
      <StyledContainer>
        <Text>{type==='evoPin' ? 'EVO' : 'CAR2GO'}</Text>
        <ViewItem>
          <Text>Address</Text>
          <Text>{address}</Text>
        </ViewItem>
        <ViewItem>
          <Text>Fuel</Text>
          <Badge value={fuel} containerStyle={{ backgroundColor: fuelColor, width:50, height:20 }} />
        </ViewItem>
        <ViewItem>
          <Text>Name</Text>
          <Text>{name}</Text>
        </ViewItem>
      </StyledContainer>
    )
  }
}

CarDetailsComponent.propTypes = {
  navigation: PropTypes.object.isRequired
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: space-around;
  padding: 10;
  margin: 10;
  backgroundColor: rgba(135,206,250,0.5);
  height: 150;
`

const ViewItem = styled.View`
  flexDirection: row;
  justifyContent: space-between;
`
