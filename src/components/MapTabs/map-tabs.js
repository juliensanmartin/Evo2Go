import { Tabs, Tab, Icon } from 'react-native-elements'
import { View } from 'react-native'
import React, { Component, PropTypes } from 'react'
import styled from 'styled-components/native'

// we export the class for testing purposes, passing stubs for props
export default class MapTabsComponent extends Component {
  render() {
    return (
      < StyledView>
        <Tabs>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            selected={selectedTab === 'feed'}
            title={selectedTab === 'feed' ? 'FEED' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
            onPress={() => this.changeTab('feed')}>
            <Feed />
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            selected={selectedTab === 'profile'}
            title={selectedTab === 'profile' ? 'PROFILE' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
            onPress={() => this.changeTab('profile')}>
            <Profile />
          </Tab>
        </Tabs>
      < /StyledView>
    );
  }
};

MapTabsComponent.propTypes = {
  evoSwitchIsOn: PropTypes.bool.isRequired,
  car2GoSwitchIsOn: PropTypes.bool.isRequired,
};

// Usage of styled-components : https://github.com/styled-components/styled-components
const StyledView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCFF;
`;
