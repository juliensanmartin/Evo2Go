import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class Evo2go extends Component {
  constructor(props) {
    super(props);
    this.state = { markers: [] };

    // start to load the vehicles
    this.loadVehicles();

    // load all car2go vehicles every 5 seconds
    setInterval(() => {
      this.loadVehicles();
    }, 5000);
  }

  render() {
    return (
      < View style = { styles.container } >
        < MapView
          style = { styles.map }
          initialRegion = {
            {
              latitude: 49.2800565,
              longitude: -123.1212937,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            { this.state.markers.map(marker =>
                < MapView.Marker key = { marker.id } coordinate = { marker.latlng } />
              )
            }
        < /MapView>
      < /View>
    );
  }

  loadVehicles() {
    //console.log(this);
    fetch('http://www.car2go.com/api/v2.1/vehicles?loc=vancouver&oauth_consumer_key=TransitApp&format=json')
      .then(response => response.json())
      .then(responseJson => responseJson.placemarks)
      .then(placemarks => {
        let markers = [];

        placemarks.map(placemark => {
          markers.push({
            id: markers.length,
            latlng: {
              latitude: placemark.coordinates[1],
              longitude: placemark.coordinates[0],
            },
          });
        });

        this.setState({markers});
      })
      .catch(error => {
        return {};
      });
  }
}

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
