import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import MapScreen from '../Map/index';
import FilterScreen from '../Filter/index'

export default class Home extends Component {
  render() {
    return (
      <StyledView>
        <MapScreen />
        <FilterScreen />
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCFF;
`;
