import React, { Component, PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Platform, Linking } from 'react-native'
import styled from 'styled-components/native'
import { Badge, Icon } from 'react-native-elements'
import ToastComponent from '../Toast/index'

export default class CarDetailsComponent extends Component {
  state = {
    canOpenURL: false,
    link: ''
  }

  componentDidMount() {
    let linking
    this.state.link = ''

    if (this.props.marker.type==='Car 2 Go') {
      if (Platform.OS === 'ios') {
        linking = 'car2go://'
      } else {
        linking = 'https://car2go.com/'
      }
      this.state.link = linking.concat(`vehicles/${this.props.marker.id}?latlng=${this.props.marker.latlng.latitude},${this.props.marker.latlng.longitude}`)
      // Android: https://car2go.com/vehicle/WME4513341K828695?latlng=53.58775,10.12023
      // iOS: car2go://vehicle/WME4513341K828695?latlng=53.58775,10.12023
    }

    if (this.props.marker.type==='Evo') {
      if (Platform.OS === 'ios') {
        linking = 'evo://'
      } else {
        linking = 'https://evo.ca/'
      }
      this.state.link = linking.concat(`vehicles/${this.props.marker.id}?latlng=${this.props.marker.latlng.latitude},${this.props.marker.latlng.longitude}`)
    }

    if (this.props.marker.type==='Modo') {
      if (Platform.OS === 'ios') {
        linking = 'modo://'
      } else {
        linking = 'https://bookit.modo.coop/'
      }
      this.state.link = linking.concat(`vehicles/${this.props.marker.id}?latlng=${this.props.marker.latlng.latitude},${this.props.marker.latlng.longitude}`)
    }

    Linking.canOpenURL(this.state.link)
      .then(supported => {
        console.log(this.state.link, ' SUPPORTED ? ',supported)
        this.state.canOpenURL = supported
      })

  }

  onClickLinkApp(linking) {
    return Linking.openURL(linking)
     .catch(err => this.props.onLinkingError(err.message))
  }

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
    if (type==='Car 2 Go') {
      logo=require('../assets/car2go.png')
    }
    if (type==='Modo') logo=require('../assets/modo.png')
    if (type==='Bus') {
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
              { this.state.canOpenURL &&
                <TouchableOpacity onPress={() => this.onClickLinkApp(this.state.link)}>
                  <Icon reverse raised type='ionicon' size={ 30 } name='ios-link' color='#2A93D7'/>
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
          <ToastComponent message='Problems to access the App' visible={this.props.errorLinking !== ''}/>
        </StyledContainer>
      </TouchableContainer>
    )
  }
}

CarDetailsComponent.propTypes = {
  marker: PropTypes.object.isRequired,
  distance: PropTypes.object.isRequired,
  onDirectionPress: PropTypes.func.isRequired,
  positionInVancouver: PropTypes.bool.isRequired,
  onLinkingError: PropTypes.func.isRequired,
  errorLinking: PropTypes.string.isRequired
}

const TouchableContainer = styled.TouchableWithoutFeedback`
  flex: 1;
`

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: space-between;
  padding: 10;
  margin: 10;
  height: 500;
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
