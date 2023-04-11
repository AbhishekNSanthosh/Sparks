import { Box, Stack } from "@mui/material";
import React from "react";
import styled, { keyframes, css } from "styled-components";
import partner1 from '../Assets/iedc.svg'
import partner2 from '../Assets/ccet.svg'

function App() {
    const row1 = [
        partner1,
        partner2,
   ];

    return (
        <Stack sx={{p:{sm:3,xs:1},width:{xs:'360px',sm:'700px'}}} overflow='hidden' >

            <AppContainer>
                <Wrapper>
                    <Marquee>
                        <MarqueeGroup>
                            {row1.map((el) => (
                                <Stack mr={5}>
                                    <Box  component='img' src={el}/>
                                </Stack>
                            ))}
                        </MarqueeGroup>
                        <MarqueeGroup>
                            {row1.map((el) => (
                               <Stack  mr={5}>
                               <Box  component='img' src={el}/>
                           </Stack>
                            ))}
                        </MarqueeGroup>
                    </Marquee>
                </Wrapper>
            </AppContainer>
        </Stack>
    );
}

export default App;

const AppContainer = styled.div`
  /* width: 100vw;
  height: 100vh; */
  /* color: #000000; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 15s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(20rem, 1rem + 0vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 10vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;