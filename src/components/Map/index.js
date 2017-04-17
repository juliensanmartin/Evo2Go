import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';
import React, { Component, PropTypes } from 'react';

// we export the class for testing purposes, passing stubs for props
const MapContainer = ({markers}) => {
  return (
    < View style = { styles.container } >
      < MapView style = { styles.map } initialRegion = { initialRegion }>
          { markers.map(marker =>
              < MapView.Marker key = { marker.id } coordinate = { marker.latlng } />
            )
          }
      < /MapView>
    < /View>
  );
};

MapContainer.propTypes = {
  // these come from 'connect'
  markers: PropTypes.object.isRequired,
};

const initialRegion = {
  latitude: 49.2800565,
  longitude: -123.1212937,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  load_vehicules_btn: {

  },
});
