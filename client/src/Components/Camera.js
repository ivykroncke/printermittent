import React, { Component } from "react";
import styled from "styled-components";
import Webcam from 'react-webcam'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`

const MainButton = styled.button`
font-size: 1.5rem;
margin: 1rem;
padding: .75rem 1rem;
border-radius: .5rem;
`

class Camera extends Component {

  setRef = webcam => {
    this.webcam = webcam;
  };
  
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.toggleViewFromComponent(imageSrc)
  };
  
  render() {
    const videoConstraints = {
      width: 600,
      height: 600,
      facingMode: "user"
    };

    return (
      <Wrapper>
          <Webcam 
            audio={false}
            height={600}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={600}
            videoConstraints={videoConstraints}
          />
          <MainButton onClick={this.capture}>Take A Picture</MainButton>
      </Wrapper>
    );
  }
}

export default Camera;
