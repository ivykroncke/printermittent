import React, { Component } from "react"
import styled from "styled-components"
import Pdf from "react-to-pdf";

const ref = React.createRef();

const BadgeTemplate = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 500px;
width: 350px;
margin: 3rem;
padding: 50px;
background-color: cornflowerblue;
`

const SampleText = styled.div`
font-size: 2rem;
`

const PortraitImage = styled.img`
margin: 40px;
border-radius: 50%;
heighth: 200px;
width: 200px;
`

class Badge extends Component {

    render () {
        return (
          <div>
            <BadgeTemplate ref={ref}>
              <SampleText>Company Name</SampleText>
              <PortraitImage src={this.props.imageSrc} />
            </BadgeTemplate>
            <Pdf targetRef={ref} filename="Current-Badge.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
           </div>
        )
    }
}

export default Badge
