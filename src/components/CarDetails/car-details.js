import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import { Badge, Icon } from 'react-native-elements'

export default class CarDetailsComponent extends Component {
  render() {
    const { type, address, fuel, name, direction } = this.props.marker
    const { distance, duration } = this.props.distance
    let logo
    if (type==='evoPin') logo=require('../assets/evo_car.png')
    if (type==='car2GoPin') logo=require('../assets/car2go_car.png')
    if (type==='busPin') logo=require('../assets/bus.gif')
    return (
      <StyledContainer>
        <ImageContainer>
          <StyledImage source={logo}/>
        </ImageContainer>

        <DetailsContainer>
          <ViewMainDetails>
            <ViewName>
              <StyledText>{name}</StyledText>
              <StyledTextSmall>{address}</StyledTextSmall>
            </ViewName>
            <Icon type='ionicon' size={ 50 } name='ios-navigate' color='#6699ff'
              onPress={this.props.onDirectionPress}/>
          </ViewMainDetails>
          <ViewSecondaryDetails>
            { fuel &&
              <ViewItem>
                <Icon type='ionicon' size={ 50 } name='ios-speedometer' color='#99A3A4'/>
                <ViewName>
                  <StyledText>{fuel}%</StyledText>
                  <StyledTextSmall>Fuel level</StyledTextSmall>
                </ViewName>
              </ViewItem>
            }
            { direction &&
              <ViewItem>
                <Icon type='ionicon' size={ 50 } name='ios-compass' color='#99A3A4'/>
                <ViewName>
                  <StyledText>{direction}</StyledText>
                  <StyledTextSmall>Direction</StyledTextSmall>
                </ViewName>
              </ViewItem>
            }
            <ViewItem>
              <Icon type='ionicon' size={ 50 } name='ios-clock' color='#99A3A4'/>
              <ViewName>
                <StyledText>{distance}</StyledText>
                <StyledTextSmall>{duration}</StyledTextSmall>
              </ViewName>
            </ViewItem>
          </ViewSecondaryDetails>
        </DetailsContainer>
      </StyledContainer>
    )
  }
}

CarDetailsComponent.propTypes = {
  marker: PropTypes.object.isRequired,
  distance: PropTypes.object.isRequired,
  onDirectionPress: PropTypes.func.isRequired
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: center;
  padding: 10;
  margin: 10;
  height: 400;
`

const DetailsContainer = styled.View`
  flexDirection: column;
  justifyContent: space-around;
  backgroundColor: rgba(255,255,255,0.9);
  padding: 10;
  margin: 10;
`

const ViewMainDetails = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const ViewSecondaryDetails = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const ViewName = styled.View`
  flexDirection: column;
  justifyContent: center;
  margin: 10;
`

const ViewItem = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const ImageContainer = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: flex-end;
`

const StyledImage= styled.Image`
  height: 150;
  width: 250;
`

const StyledText= styled.Text`
  color: #99A3A4;
`

const StyledTextSmall= styled.Text`
  color: #99A3A4;
  fontSize: 10;
`
