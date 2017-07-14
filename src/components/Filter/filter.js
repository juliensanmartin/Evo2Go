import React, { Component, PropTypes } from 'react'
import { View, Switch, Text, Image } from 'react-native'
import styled from 'styled-components/native'

export default class FilterComponent extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledView>
          <StyledLeftView>
            <StyledImageLong source={require('../assets/prius.png')}/>
            <StyledText>EVO CARS</StyledText>
          </StyledLeftView>
          <StyledSwitch
            onValueChange={this.props.onEvoToggle}
            value={this.props.evoVisible}
            onTintColor='#135589'/>
        </StyledView>
        <StyledView>
          <StyledLeftView>
            <StyledImage source={require('../assets/smart.png')}/>
            <StyledText>CAR2GO CARS</StyledText>
          </StyledLeftView>
          <StyledSwitch
            onValueChange={this.props.onCar2GoToggle}
            value={this.props.car2GoVisible}
            onTintColor='#135589'/>
        </StyledView>
        <StyledView>
          <StyledLeftView>
            <StyledImageLong source={require('../assets/bus.png')}/>
            <StyledText>BUS</StyledText>
          </StyledLeftView>
          <StyledSwitch
            onValueChange={this.props.onBusToggle}
            value={this.props.busVisible}
            onTintColor='#135589'/>
        </StyledView>
        <StyledView>
          <StyledLeftView>
            <StyledImage source={require('../assets/bike.png')}/>
            <StyledText>MOBI BIKES</StyledText>
          </StyledLeftView>
          <StyledSwitch
            onValueChange={this.props.onMobiToggle}
            value={this.props.mobiVisible}
            onTintColor='#135589'/>
        </StyledView>
      </StyledContainer>
    )
  }
}

FilterComponent.propTypes = {
  evoVisible: PropTypes.bool.isRequired,
  car2GoVisible: PropTypes.bool.isRequired,
  busVisible: PropTypes.bool.isRequired,
  onEvoToggle: PropTypes.func.isRequired,
  onCar2GoToggle: PropTypes.func.isRequired,
  onBusToggle: PropTypes.func.isRequired,
  mobiVisible: PropTypes.bool.isRequired,
  onMobiToggle: PropTypes.func.isRequired
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: space-around;
  padding: 10;
  margin: 10;
  height: 200;
  backgroundColor: #EDFAFD;
`

const StyledView = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const StyledLeftView = styled.View`
  flexDirection: row;
  justifyContent: space-between;
`

const StyledSwitch= styled.Switch`
  padding: 10;
  margin: 10;
`

const StyledImage= styled.Image`
  height: 20;
  width: 20;
  marginHorizontal: 10;
`

const StyledImageLong= styled.Image`
  height: 15;
  width: 30;
  marginHorizontal: 10;
`

const StyledText= styled.Text`
  color: #135589;
`
