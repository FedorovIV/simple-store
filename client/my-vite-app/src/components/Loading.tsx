import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 220px);
  height: calc(100vh - 100px);
  margin-left: 200px;       
  position:fixed;
`;

const Loading = () => {
  return (
    <Container className=" opacity-60 bg-white w-full z-30  text-6xl flex items-center justify-center">
      Loading...
    </Container>
  );
};

export default Loading;
