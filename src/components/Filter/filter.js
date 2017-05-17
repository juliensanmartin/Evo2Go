import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Switch, Text } from 'react-native'
import styled from 'styled-components/native'

export default class FilterComponent extends Component {
  render() {
    return (
      <StyledView>
        <Switch
          //onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={this.props.evoSwitchIsOn} />
        <Text>See Evo cars</Text>
        <Switch
          //onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={this.props.car2GoSwitchIsOn} />
        <Text>See Car2Go cars</Text>
      </StyledView>
    )
  }
}

FilterComponent.propTypes = {
  evoSwitchIsOn: PropTypes.bool.isRequired,
  car2GoSwitchIsOn: PropTypes.bool.isRequired,
}

// Usage of styled-components : https://github.com/styled-components/styled-components
const StyledView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  alignSelf: stretch;
  backgroundColor: #F5FCFF;
`;
