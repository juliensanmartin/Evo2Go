import React, { Component, PropTypes } from 'react'
import { View, Switch, Text } from 'react-native'
import styled from 'styled-components/native'

export default class FilterComponent extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledView>
          <StyledSwitch
            //onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
            value={this.props.evoSwitchIsOn} />
          <Text>EVO</Text>
        </StyledView>
        <StyledView>
          <StyledSwitch
            //onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
            value={this.props.car2GoSwitchIsOn} />
          <Text>CAR2GO</Text>
        </StyledView>
      </StyledContainer>
    )
  }
}

FilterComponent.propTypes = {
  evoSwitchIsOn: PropTypes.bool.isRequired,
  car2GoSwitchIsOn: PropTypes.bool.isRequired
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: flex-start;
  padding: 10;
  margin: 10;
`

const StyledView = styled.View`
  flexDirection: row;
  justifyContent: flex-start;
  alignItems: center;
`

const StyledSwitch= styled.Switch`
  padding: 10;
  margin: 10;
`
