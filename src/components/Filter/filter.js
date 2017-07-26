import React, { Component, PropTypes } from 'react'
import { View, Switch, Text, Image, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Interactable from 'react-native-interactable'

export default class FilterComponent extends Component {
  constructor(props) {
    super(props)
    this.deltaX = new Animated.Value(0)
  }

  render() {
    return (
      <TouchableContainer onPress={this.props.onOutsidePress}>
        <StyledContainer>
          <Interactable.View
            horizontalOnly={false}
            snapPoints={[
              {x: 360},
              {x: 0, damping: 1-1-0.7, tension: 300},
              {x: -360}
            ]}
            onSnap={this.props.onOutsidePress}
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
            </Animated.View>
          </Interactable.View>
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
  onOutsidePress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
    height: 200,
    backgroundColor: '#EDFAFD',
    borderRadius: 6,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#7f7f7f',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 4
  }
})

const TouchableContainer = styled.TouchableWithoutFeedback`
  flex: 1;
`

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: flex-start;
  padding: 10;
  margin: 10;
  height: 100%;
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
  zIndex:10;
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
