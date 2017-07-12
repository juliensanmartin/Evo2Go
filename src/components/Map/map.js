import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native'
import React, { Component, PropTypes } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styled from 'styled-components/native'
import LoaderComponent from '../Loader/loader'
import ToastComponent from '../Toast/index'
import IconMarkerComponent from '../../components/IconMarker/icon-marker'

const initialRegion = {
  latitude: 49.2800565,
  longitude: -123.1212937,
  latitudeDelta: 0.00461,
  longitudeDelta: 0.002105
}

const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 }

export default class MapComponent extends Component {
  constructor(props) {
      super(props)

      this.state = {
        currentPosition: null,
        error: null
      }
    }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
        this.props.onPositionFetched(position.coords)
        if (this.props.positionInVancouver) {
          this.setState({
            currentPosition: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
            error: null
          })
        } else {
          this.setState({
            currentPosition: {
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude
            },
            error: null
          })
        }
        this.onCurrentPositionFetch()
      },
      error => this.setState({
        error: error.message,
        currentPosition: {
          latitude: initialRegion.latitude,
          longitude: initialRegion.longitude
        }
      }),
      {
        timeout: 20000,
        maximumAge: 1000
      }
    )
  }

  onCurrentPositionFetch () {
    const currentRegion = {
      latitude: this.state.currentPosition.latitude,
      longitude: this.state.currentPosition.longitude,
      latitudeDelta: initialRegion.latitudeDelta,
      longitudeDelta: initialRegion.longitudeDelta
    }
    console.log(currentRegion)
    this.map.animateToRegion(currentRegion)
  }

  onMarkerPress (marker) {
    this.map.fitToCoordinates([marker.latlng, this.state.currentPosition], {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    })
    this.props.navigation.navigate('CarDetails', { marker, currentPosition: this.state.currentPosition })
  }

  render() {
    return (
      <MapContainer>
        <MapView
          ref={ref => { this.map = ref }}
          showsUserLocation={this.props.positionInVancouver}
          followsUserLocation={this.props.positionInVancouver}
          showsMyLocationButton={this.props.positionInVancouver}
          showsPointsOfInterest={false}
          showsBuildings={false}
          showsIndoors={false}
          toolbarEnabled={false}
          initialRegion={initialRegion}
          style={styles.map}
          onRegionChangeComplete={this.props.onRegionChange}
          initialRegion={initialRegion}>
            {
              this.props.markers.map(marker =>
                < MapView.Marker
                  key={marker.id}
                  coordinate={marker.latlng}
                  onPress={() => this.onMarkerPress(marker)} >
                    <IconMarkerComponent marker={marker} />
                </ MapView.Marker>
              )
            }
            { this.props.direction &&
                <MapView.Polyline
                  coordinates={this.props.direction}
                  strokeWidth={4}
                  strokeColor="#6699ff"/>
            }

        </MapView>
        <LoaderContainer>
          <LoaderComponent animating={this.props.loading}/>
        </LoaderContainer>
        <ToastComponent message='You are not in Vancouver Area' visible={this.props.positionInVancouver}/>
      </MapContainer>
    )
  }
}

MapComponent.propTypes = {
  markers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  direction: PropTypes.array,
  onRegionChange: PropTypes.func.isRequired,
  onPositionFetched: PropTypes.func.isRequired,
  positionInVancouver: PropTypes.bool.isRequired
}

// Usage of styled-components : https://github.com/styled-components/styled-components
const MapContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backgroundColor: #F5FCFF;
`

const LoaderContainer = styled.View`
  align-self: center;
`

// But need to styled-components this one!!
const styles = StyleSheet.create({
  map: {
    // width: Screen.width,
    // height: Screen.height
    ...StyleSheet.absoluteFillObject
  }
})
