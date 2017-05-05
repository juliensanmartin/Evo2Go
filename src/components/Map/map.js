import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { Component, PropTypes } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components/native';
import mapStyle from './map.style';

const car2GoPin = require('./assets/car2go_pin.png');
const evoPin = require('./assets/evo_pin.png');

const getPin = (type) => (type === 'evoPin') ? evoPin : car2GoPin;

// we export the class for testing purposes, passing stubs for props
export default class MapContainer extends Component {
  render() {
    // the last 2 attributes in comment in MapView are for customize googlemap on IOS, doesn't work :
    // Read this for more info https://github.com/airbnb/react-native-maps#customizing-the-map-style
    return (
      < StyledView>
        < MapView style={styles.map} initialRegion={initialRegion} /*customMapStyle={mapStyle} provider={PROVIDER_GOOGLE}*/>
            { this.props.markers.map(marker =>
                < MapView.Marker key={marker.id} coordinate={marker.latlng} image={getPin(marker.type)}/>
              )
            }
        < /MapView>
        < ActivityIndicator
          animating={this.props.loading}
          size="large"
          color="blue"
        />
      < /StyledView>
    );
  }
};

MapContainer.propTypes = {
  markers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const initialRegion = {
  latitude: 49.2800565,
  longitude: -123.1212937,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

// Usage of styled-components : https://github.com/styled-components/styled-components
const StyledView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCFF;
`;

// But need to styled-components this one!!
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  load_vehicules_btn: {},
});
