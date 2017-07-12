import React, { Component, PropTypes } from 'react'
import { Modal, Text, View } from 'react-native'
import styled from 'styled-components/native'

export default class ToastComponent extends Component {
  render() {
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={this.props.visible}>
       <StyledContainer>
        <Text>{this.props.message}</Text>
       </StyledContainer>
      </Modal>
    )
  }
}

ToastComponent.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
}

const StyledContainer = styled.View`
  flexDirection: column;
  justifyContent: center;
  margin: 80;
  height: 50;
  width: 200;
`
