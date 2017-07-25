import React, { Component, PropTypes } from 'react'
import { View, Switch, Text, Image, Animated, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Interactable from 'react-native-interactable'

export default class FilterComponent extends Component {
  constructor(props) {
    super(props)
    this.deltaX = new Animated.Value(0)
  }

  render() {
    return (
      <Interactable.View
        horizontalOnly={true}
        snapPoints={[
          {x: 360},
          {x: 0, damping: 1-1-0.7, tension: 300},
          {x: -360}
        ]}
        animatedValueX={this.deltaX}>
        <Animated.View style={[styles.card, {
          opacity: this.deltaX.interpolate({
            inputRange: [-300, 0, 300],
            outputRange: [0, 1, 0],
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp'
          })
        }]}>
        <StyledView>
          <TitleText>VEHICLES DATA PROVIDED BY</TitleText>
          <StyledCreditText>EVO CAR SHARE</StyledCreditText>
          <StyledCreditText>TRANSLINK</StyledCreditText>
          <StyledCreditText>MOBI BIKE</StyledCreditText>
          <StyledCreditText>MODO</StyledCreditText>
          <StyledCreditText>This product uses the car2go API but is not endorsed or certified by car2go.</StyledCreditText>
        </StyledView>
        <StyledView>
          <TitleText>DISTANCE DATA PROVIDED BY</TitleText>
          <StyledCreditText>GOOGLE</StyledCreditText>
        </StyledView>
        <StyledView>
          <TitleText>ICONS AND ASSETS PROVIDED BY</TitleText>
          <StyledCreditText>Freepik from www.flaticon.com</StyledCreditText>
          <StyledCreditText>Car by Nurutdinov Timur from the Noun Project</StyledCreditText>
          <StyledCreditText>Loader by Steven Parisi</StyledCreditText>
        </StyledView>
        <StyledView>
          <StyledTextSmall>Made with &hearts; from Vancouver, BC</StyledTextSmall>
          <StyledTextSmall>By Simon Reggiani &amp; Julien Sanmartin</StyledTextSmall>
          <StyledTextSmall><StyledHighlightedText> Evo 2 Go </StyledHighlightedText> - Version 0.1.0</StyledTextSmall>
        </StyledView>
        </Animated.View>
      </Interactable.View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
    margin: 10,
    height: 400,
    backgroundColor: '#EDFAFD',
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#7f7f7f',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 4
  }
})

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
