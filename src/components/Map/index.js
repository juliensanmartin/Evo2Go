import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';
import React, { Component, PropTypes } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';

// we export the class for testing purposes, passing stubs for props
export default class MapContainer extends Component {
  render() {
    return (
      < StyledView>
        < MapView initialRegion = { initialRegion }>
            { this.props.markers.map(marker =>
                < MapView.Marker key = { marker.id } coordinate = { marker.latlng } />
              )
            }
        < /MapView>
      < /StyledView>
    );
  }
};

MapContainer.propTypes = {
  markers: PropTypes.array.isRequired,
};

const initialRegion = {
  latitude: 49.2800565,
  longitude: -123.1212937,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const StyledView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCFF;
`;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   load_vehicules_btn: {
//
//   },
// });
