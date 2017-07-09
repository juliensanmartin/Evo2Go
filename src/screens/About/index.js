//<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

//Car by Nurutdinov Timur from the Noun Project

import React, { Component, PropTypes } from 'react'
import { View, Switch, Text, Image } from 'react-native'
import styled from 'styled-components/native'

export default class FilterComponent extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledView>
          <Text>VEHICLES DATA PROVIDED BY</Text>
          <StyledText>EVO CAR SHARE</StyledText>
          <StyledText>CAR2GO</StyledText>
          <StyledText>TRANSLINK</StyledText>
        </StyledView>
        <StyledView>
          <Text>DISTANCE DATA PROVIDED BY</Text>
          <StyledText>GOOGLE</StyledText>
        </StyledView>
        <StyledView>
          <Text>ICONS AND ASSETS PROVIDED BY</Text>
          <StyledText>www.flaticon.com</StyledText>
          <StyledText>Nurutdinov Timur from the Noun Project</StyledText>
          <StyledText>TRANSLINK</StyledText>
        </StyledView>
        <Text>Made with love by Simon Reggiani Julien Sanmartin </Text>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: space-around;
  padding: 10;
  margin: 10;
  height: 150;
  backgroundColor: #EDFAFD;
`

const StyledView = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const StyledText= styled.Text`
  color: #135589;
`
