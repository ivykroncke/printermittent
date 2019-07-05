import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Webcam from 'react-webcam'


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`

const StyledH1 = styled.h1`
font-size: 2rem;
margin: 2rem;
`

const StyledImg = styled.img`
margin: .5rem 0 1.5rem 0;
height: 20rem;
`

const MainButton = styled.button`
font-size: 1.5rem;
margin: 1rem;
padding: .75rem 1rem;
border-radius: .5rem;
`

class App extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };
  
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc)
  };
  
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Wrapper>
          <StyledH1>Printermittent</StyledH1>
          <Webcam 
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
          <MainButton onClick={this.capture}>Take A Picture</MainButton>
          <MainButton>Print a Picture</MainButton>
        </Wrapper>
      </div>
    );
  }
}

export default App;
