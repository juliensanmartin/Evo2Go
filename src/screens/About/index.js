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
        </StyledView>
        <StyledView>
          <StyledTextSmall>Made with &hearts; by Simon Reggiani &amp; Julien Sanmartin</StyledTextSmall>
          <StyledTextSmall><StyledText> Evo 2 Go </StyledText> - Version 0.1.0</StyledTextSmall>
        </StyledView>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: space-around;
  padding: 10;
  margin: 10;
  height: 400;
  backgroundColor: #EDFAFD;
`

const StyledView = styled.View`
  flexDirection: column;
  justifyContent: space-between;
  alignItems: center;
`

const StyledTextSmall = styled.Text`
  fontSize: 10;
`

const StyledText= styled.Text`
  color: #135589;
`
