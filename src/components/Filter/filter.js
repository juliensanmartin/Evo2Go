import React, { Component, PropTypes } from 'react'
import { View, Switch, Text, Image } from 'react-native'
import styled from 'styled-components/native'

export default class FilterComponent extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledView>
          <StyledLeftView>
            <Text>EVO</Text>
          </StyledLeftView>
          <StyledSwitch
            onValueChange={this.props.onEvoToggle}
            value={this.props.evoVisible} />
        </StyledView>
        <StyledView>
          <StyledLeftView>
            <StyledImage
              source={require('./assets/Car2go_logo.png')}
            />
            <Text>CAR2GO</Text>
          </StyledLeftView>
          <StyledSwitch
            onValueChange={this.props.onCar2GoToggle}
            value={this.props.car2GoVisible} />
        </StyledView>
      </StyledContainer>
    )
  }
}

FilterComponent.propTypes = {
  evoVisible: PropTypes.bool.isRequired,
  car2GoVisible: PropTypes.bool.isRequired,
  onEvoToggle: PropTypes.func.isRequired,
  onCar2GoToggle: PropTypes.func.isRequired
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: space-around;
  padding: 10;
  margin: 10;
  height: 150;
  backgroundColor: rgba(135,206,250,0.5);
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
