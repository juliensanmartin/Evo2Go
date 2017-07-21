import React, { Component, PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import { Badge, Icon } from 'react-native-elements'

export default class CarDetailsComponent extends Component {
  render() {
    const { type, address, fuel, name, direction } = this.props.marker
    const { distance, duration } = this.props.distance
    let { avlBikes } = this.props.marker
    let logo
    let long = false
    if (type==='Evo') {
      logo=require('../assets/evo.png')
      long=true
    }
    if (type==='Car 2 Go') logo=require('../assets/car2go.png')
    if (type==='Modo') logo=require('../assets/modo.png')
    if (type==='Bus')  {
      logo=require('../assets/bus.png')
      long=true
    }
    if (type==='Mobi Bike') logo=require('../assets/bike.png')
    if (avlBikes === 0) avlBikes = 'No'
    return (
      <TouchableContainer onPress={this.props.onDirectionPress}>
        <StyledContainer>
          <DetailsContainer>
            <TitleContainer>
              <StyledTitle>{type}</StyledTitle>
            </TitleContainer>
            <ImageContainer>
              {long &&
                <StyledImageLong source={logo}/>
              }
              {!long &&
                <StyledImage source={logo}/>
              }
            </ImageContainer>
            <ViewMainDetails>
              <ViewName>
                { avlBikes &&
                  <StyledText>{avlBikes} bikes availables</StyledText>
                }
                <StyledText>{name}</StyledText>
                <StyledTextSmall>{address}</StyledTextSmall>
              </ViewName>
              {!this.props.positionInVancouver &&
                <TouchableOpacity onPress={this.props.onDirectionPress}>
                  <Icon type='ionicon' size={ 50 } name='ios-navigate' color='#2A93D7'/>
                </TouchableOpacity>
              }
            </ViewMainDetails>
            <ViewSecondaryDetails>
              { fuel &&
                <ViewItem>
                  <Icon type='ionicon' size={ 50 } name='ios-speedometer' color='#3DDAD7'/>
                  <ViewName>
                    <StyledText>{fuel}%</StyledText>
                    <StyledTextSmall>Fuel level</StyledTextSmall>
                  </ViewName>
                </ViewItem>
              }
              { direction &&
                <ViewItem>
                  <Icon type='ionicon' size={ 50 } name='ios-compass' color='#3DDAD7'/>
                  <ViewName>
                    <StyledText>{direction}</StyledText>
                    <StyledTextSmall>Direction</StyledTextSmall>
                  </ViewName>
                </ViewItem>
              }
              <ViewItem>
                <Icon type='ionicon' size={ 50 } name='ios-clock' color='#3DDAD7'/>
                <ViewName>
                  <StyledText>{distance}</StyledText>
                  <StyledTextSmall>{duration}</StyledTextSmall>
                </ViewName>
              </ViewItem>
            </ViewSecondaryDetails>
          </DetailsContainer>
        </StyledContainer>
      </TouchableContainer>
    )
  }
}

CarDetailsComponent.propTypes = {
  marker: PropTypes.object.isRequired,
  distance: PropTypes.object.isRequired,
  onDirectionPress: PropTypes.func.isRequired,
  positionInVancouver: PropTypes.bool.isRequired
}

const TouchableContainer = styled.TouchableWithoutFeedback`
  flex: 1;
  backgroundColor: #F5FCFF;
`

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
  backgroundColor: #EDFAFD;
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

const TitleContainer = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: flex-start;
`

const StyledImage = styled.Image`
  height: 100;
  width: 100;
`

const StyledImageLong = styled.Image`
  height: 80;
  width: 200;
`

const StyledText= styled.Text`
  color: #135589;
`

const StyledTitle= styled.Text`
  color: #135589;
  fontSize: 20;
`

const StyledTextSmall= styled.Text`
  color: #135589;
  fontSize: 10;
`

const StyledTextBig= styled.Text`
  color: #135589;
  fontSize: 16;
`
