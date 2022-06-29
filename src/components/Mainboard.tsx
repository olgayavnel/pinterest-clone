import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';
import './Mainboard.css';

function Mainboard(props: { pins: any }) {
  let { pins } = props;

  return (
    <Wrapper>
      <Container className='mainboard__container'>
        {pins.map((pin: { urls: any }, index: React.Key | null | undefined) => {
          let { urls } = pin;
          return <Pin key={index} urls={urls} />;
        })}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`;

const Container = styled.div`
  background-color: white;
  height: 100%;
  margin: 0 auto;
`;

export default Mainboard;
