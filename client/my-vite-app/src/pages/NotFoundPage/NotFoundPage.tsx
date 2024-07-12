import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 220px);
  height: calc(100vh - 100px);
  margin-left: 200px;
  margin-top: 80px;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const NotFoundPage = () => {
  return (
    <Container className=' text-6xl'>Not found</Container>
  )
}

export default NotFoundPage