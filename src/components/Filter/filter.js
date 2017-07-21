import React, { Component, PropTypes } from 'react'
import { View, Switch, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

export default class FilterComponent extends Component {
  render() {
    return (
      <TouchableContainer onPress={this.props.onOutsidePress}>
        <StyledContainer>
          <StyledView>
            <StyledLeftView>
              <StyledImage source={require('../assets/evo.png')}/>
              <StyledText>EVO CARS</StyledText>
            </StyledLeftView>
            <StyledSwitch
              onValueChange={this.props.onEvoToggle}
              value={this.props.evoVisible}
              onTintColor='#135589'/>
          </StyledView>
          <StyledView>
            <StyledLeftView>
              <StyledImage source={require('../assets/car2go.png')}/>
              <StyledText>CAR2GO CARS</StyledText>
            </StyledLeftView>
            <StyledSwitch
              onValueChange={this.props.onCar2GoToggle}
              value={this.props.car2GoVisible}
              onTintColor='#135589'/>
          </StyledView>
          <StyledView>
            <StyledLeftView>
              <StyledImage source={require('../assets/modo.png')}/>
              <StyledTextView>
                <StyledText>MODO CARS</StyledText>
                <StyledTextSmall>(Available the next 2 hours)</StyledTextSmall>
              </StyledTextView>
            </StyledLeftView>
            <StyledSwitch
              onValueChange={this.props.onModoToggle}
              value={this.props.modoVisible}
              onTintColor='#135589'/>
          </StyledView>
          <StyledView>
            <StyledLeftView>
              <StyledImage source={require('../assets/bus.png')}/>
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
      </TouchableContainer>
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
  onMobiToggle: PropTypes.func.isRequired,
  modoVisible: PropTypes.bool.isRequired,
  onModoToggle: PropTypes.func.isRequired,
  onOutsidePress: PropTypes.func.isRequired,
}

const TouchableContainer = styled.TouchableWithoutFeedback`
  flex: 1;
`

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

const StyledTextView = styled.View`
  flexDirection: column;
  justifyContent: space-between;
  alignItems: flex-start;
`

const StyledLeftView = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const StyledSwitch= styled.Switch`
  padding: 10;
  margin: 10;
`

const StyledImage= styled.Image`
  height: 30;
  width: 30;
  marginHorizontal: 20;
`

const StyledImageLong= styled.Image`
  height: 15;
  width: 30;
  marginLeft: 20;
  marginRight: 10;
`

const StyledText= styled.Text`
  color: #135589;
`

const StyledTextSmall= styled.Text`
  fontSize: 10;
  color: #135589;
`
