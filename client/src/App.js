import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Camera from "./Components/Camera";
import Print from "./Components/Print";


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

const MainButton = styled.button`
font-size: 1.5rem;
margin: 1rem;
padding: .75rem 1rem;
border-radius: .5rem;
`

class App extends Component {
  state = {
    imageSrc: "",
    toggleView: true
  }

  toggleViewFromComponent = (image) => {
    this.setState({
      toggleView: !this.state.toggleView,
      imageSrc: image
    })
  }
  
  render() {

    return (
      <div>
        <Wrapper>
        <StyledH1>Printermittent</StyledH1>
          {
            this.state.toggleView ?
            (<Camera
              imageSrc={this.state.imageSrc}
              toggleViewFromComponent={this.toggleViewFromComponent}
            />)
            : 
            (<Print 
              imageSrc={this.state.imageSrc}
              toggleViewFromComponent={this.toggleViewFromComponent}
            />)
          }
        </Wrapper>
      </div>
    );
  }
}

export default App;
