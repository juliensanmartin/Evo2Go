import React, { Component, PropTypes } from 'react'
import { View, Switch, Text, Image } from 'react-native'
import styled from 'styled-components/native'

export default class FilterComponent extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledView>
          <TitleText>VEHICLES DATA PROVIDED BY</TitleText>
          <StyledCreditText>EVO CAR SHARE</StyledCreditText>
          <StyledCreditText>CAR2GO</StyledCreditText>
          <StyledCreditText>TRANSLINK</StyledCreditText>
        </StyledView>
        <StyledView>
          <TitleText>DISTANCE DATA PROVIDED BY</TitleText>
          <StyledCreditText>GOOGLE</StyledCreditText>
        </StyledView>
        <StyledView>
          <TitleText>ICONS AND ASSETS PROVIDED BY</TitleText>
          <StyledCreditText>Smart Car icon by Freepik from www.flaticon.com</StyledCreditText>
          <StyledCreditText>Bike icon by Freepik from www.flaticon.com</StyledCreditText>
          <StyledCreditText>Loader by Steven Parisi</StyledCreditText>
        </StyledView>
        <StyledView>
          <StyledTextSmall>Made with &hearts; from Vancouver, BC</StyledTextSmall>
          <StyledTextSmall>By Simon Reggiani &amp; Julien Sanmartin</StyledTextSmall>
          <StyledTextSmall><StyledHighlightedText> Evo 2 Go </StyledHighlightedText> - Version 0.1.0</StyledTextSmall>
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

const StyledCreditText = styled.Text`
  color: #135589;
`

const StyledHighlightedText= styled.Text`
  color: #135589;
`

const TitleText= styled.Text`
  fontSize: 12;
  color: #2A93D5;
`
