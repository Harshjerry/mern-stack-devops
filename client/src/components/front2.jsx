import React from "react";
import styled from "styled-components";
import video from "./../video/noirDESKTOP.mp4";
import video2 from "./../video/noirMOB.mp4";
import { mobile } from "../responsive";

const Container = styled.div`
`;


const VideoContainer = styled.div`
  display: block;
  ${mobile({ display: "none" })}
`;

const VideoContainer2 = styled.div`
  display: none;
  ${mobile({ display: "block" })}
`;

const Front = () => {
  return (<Container>
    <VideoContainer>
      <video width="100%" height="85%" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </VideoContainer>

    <VideoContainer2>
      <video width="100%" height="85%" autoPlay loop muted>
        <source src={video2} type="video/mp4" />
      </video>
    </VideoContainer2>
  </Container>)

}

export default Front;
