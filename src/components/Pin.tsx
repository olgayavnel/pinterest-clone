import React from 'react';
import styled from 'styled-components';

function Pin(props: { urls: any }) {
  let { urls } = props;
  return (
    <Wrapper>
      <Container>
        <img src={urls?.regular} alt='pin' />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /*  inline-flex makes the flex container display inline. */
  display: inline-flex;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    border-radius: 16px;
    cursor: zoom-in;
    object-fit: cover;
  }
`;

export default Pin;
