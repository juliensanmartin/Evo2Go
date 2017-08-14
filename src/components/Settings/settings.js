import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Slider } from 'react-native-elements'

export default class SettingsComponent extends Component {
  render() {
    const {currentNumberHours, setNumberHours} = this.props

    return (
      <StyledView>
        <Slider
          value={currentNumberHours}
          onSlidingComplete={setNumberHours}
          minimumValue={1}
          maximumValue={24}
          step={1} />
        <Text>{currentNumberHours}</Text>
      </StyledView>
    )
  }
}

SettingsComponent.propTypes = {
  currentNumberHours: PropTypes.number.isRequired,
  setNumberHours: PropTypes.func.isRequired
}

const StyledView = styled.View`
  flex: 1;
  justifyContent: center;
`
