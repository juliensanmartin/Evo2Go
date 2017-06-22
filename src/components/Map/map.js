import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native'
import React, { Component, PropTypes } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styled from 'styled-components/native'
import LoaderComponent from '../Loader/loader'
import IconMarkerComponent from '../../components/IconMarker/icon-marker'

// initialRegion not used
const initialRegion = {
  latitude: 49.2800565,
  longitude: -123.1212937,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
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
        this.setState({
          currentPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          error: null
        })
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
          showsUserLocation
          followsUserLocation
          showsMyLocationButton
          showsPointsOfInterest={false}
          showsBuildings={false}
          showsIndoors={false}
          style={styles.map}>
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
        <ActivityIndicator
          animating={this.props.loading}
          size="large"
          color="blue"
        />
      </MapContainer>
    )
  }
}

MapComponent.propTypes = {
  markers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  direction: PropTypes.array
}

// Usage of styled-components : https://github.com/styled-components/styled-components
const MapContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCFF;
`

// But need to styled-components this one!!
const styles = StyleSheet.create({
  map: {
    // width: Screen.width,
    // height: Screen.height
    ...StyleSheet.absoluteFillObject
  }
})
