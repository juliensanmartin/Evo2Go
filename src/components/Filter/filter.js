import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Switch, Dimensions, Image, Text, Platform } from 'react-native'
import styled from 'styled-components/native'
import Interactable from 'react-native-interactable'

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height -75
}

export default class FilterComponent extends Component {
  render() {
    return (
      // Issue : the map does not move or zoom
      // https://github.com/airbnb/react-native-maps/issues/108 :
      // Add the property pointerEvents=none to the View which is on the same level as the MapView
      <View style={styles.panelContainer} pointerEvents={'none'}>
        <Interactable.View
          verticalOnly={true}
          snapPoints={[{y: 0, tension: 0, damping: 1}, {y: -Screen.height + 80}]}
          gravityPoints={[{y: 0, strength: 220, falloff: Screen.height*8, damping: 0.7, influenceArea: {top: (-Screen.height + 80) * 0.5}}]}
          initialPosition={{y: -Screen.height + 80}}
          boundaries={{top: -Screen.height, bottom: 0, bounce: 2, haptics: true}}>
          <View style={styles.panel}>
            <Switch
              //onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
              style={{marginBottom: 10}}
              value={this.props.evoSwitchIsOn} />
            <Text>See Evo cars</Text>
            <Switch
              //onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
              style={{marginBottom: 10}}
              value={this.props.car2GoSwitchIsOn} />
            <Text>See Car2Go cars</Text>
          </View>
        </Interactable.View>
      </View>
    );
  }
};

FilterComponent.propTypes = {
  evoSwitchIsOn: PropTypes.bool.isRequired,
  car2GoSwitchIsOn: PropTypes.bool.isRequired,
};

const StyledView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCFF;
`;

const styles = StyleSheet.create({
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  panel: {
    height: Screen.height + 2,
    backgroundColor: '#182e43f0',
    padding: 15,
    paddingTop: 30,
    flexDirection: 'column'
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 10
  },
  contentImage: {
    width: Screen.width-50,
    height: Screen.width-50
  },
  contentBody: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10
  },
  panelHeader: {
    fontSize: 24,
    color: 'white',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 10,
    justifyContent: 'flex-start'
  },
  panelFooterIos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  panelFooterAndroid: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  panelFooterText: {
    fontSize: 13,
    color: '#ffffff80',
    marginBottom: 10
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff80'
  },
  notificationContainer: {
    backgroundColor: '#b0cbdd',
    borderRadius: 14,
    marginBottom: 10
  },
  notificationHeader: {
    height: 30,
    backgroundColor: '#c3d6e1',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 20
  },
  notificationTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#1c5675'
  },
  notificationBody: {
    marginVertical: 14,
    marginHorizontal: 20
  }
});
