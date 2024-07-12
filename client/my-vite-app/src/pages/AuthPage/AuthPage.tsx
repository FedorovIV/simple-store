import React, { useContext, useEffect } from "react";
import AuthForm from "./AuthForm";
import styled from "styled-components";
import { Navigate, useLocation } from "react-router-dom";
import Context from "../../main";
import { observer } from "mobx-react-lite";

const Container = styled.div`
  width: calc(100% - 220px);
  height: calc(100vh - 100px);
  margin-left: 200px;
  margin-top: 80px;
  padding-top: 20px;
`;


const AuthPage = observer(() => {

  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const { store } = useContext(Context);

  useEffect(() => {
    store.getInfo();
  });

  if (store.isAuth) {
    return <Navigate to={fromPage} />;
  }

  return (
    <Container className=" flex items-center justify-center">
      <AuthForm />
    </Container>
  );
});

export default AuthPage;
