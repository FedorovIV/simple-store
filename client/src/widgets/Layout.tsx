import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useContext } from "react";
import Context from "../main";
import { observer } from "mobx-react-lite";

const Layout = observer(() => {

  const {store} = useContext(Context);


  return (
    <>
      <Header />
      <Navbar />
      {store.isLoading&&<Loading/>}
      <Outlet />
    </>
  );
});

export default Layout;
