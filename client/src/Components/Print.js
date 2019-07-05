import React, { Component } from "react"
import Badge from "./Badge";
import styled from "styled-components"

const MainButton = styled.button`
font-size: 1.5rem;
border-radius: .5rem;
margin: .5rem;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`

class Print extends Component {

    printPhoto = () => {
        console.log(
            "printing starts here"
        )
    }

    render() {
        return (
            <Wrapper>
                <Badge 
                    imageSrc={this.props.imageSrc}
                />
                <MainButton onClick={()=>this.props.toggleViewFromComponent()}>Retake</MainButton>
            </Wrapper>
        )
    }
}

export default Print;
