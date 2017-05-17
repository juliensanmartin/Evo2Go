import React, { Component, PropTypes, Animated } from 'react'
import { StyleSheet, View, Switch, Dimensions, Image, Text, Platform } from 'react-native'
import styled from 'styled-components/native'

export default class FilterComponent extends Component {
  render() {
    return (
      <Animated.View style={styles.panelContainer}>
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
      </Animated.View>
    );
  }
};

FilterComponent.propTypes = {
  evoSwitchIsOn: PropTypes.bool.isRequired,
  car2GoSwitchIsOn: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  panelContainer: {
    backgroundColor: '#278485',
    paddingTop: 10
  }
});
