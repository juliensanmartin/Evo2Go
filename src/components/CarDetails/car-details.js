import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

export default class CarDetailsComponent extends Component {
  render() {
    return (
      <StyledContainer>
        <Text>ID : {this.props.car.id}</Text>
      </StyledContainer>
    )
  }
}

CarDetailsComponent.propTypes = {
  car: PropTypes.object.isRequired
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: flex-start;
  padding: 10;
  margin: 10;
  backgroundColor: red;
  height: 300;
`
