import { observer } from "mobx-react-lite";
import { useContext } from "react";
import styled from "styled-components";
import Context from "../../main";
import ProfileCreated from "./ProfileCreated";
import ProfileNotCreated from "./ProfileNotCreated";

const Container = styled.div`
  width: calc(100% - 220px);
  height: calc(100vh - 100px);
  margin-left: 200px;
  margin-top: 80px;
  padding-left: 100px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap:20px;

`;

const ProfilePage = observer(() => {
  const { store } = useContext(Context);

  const handleLogout =async ()=>{
    await store.logout();
  }
  return (
    <Container className="">
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md w-fit" onClick={handleLogout}>
        Log out
      </button>

      {store?.user?.profileCreated ? (
        <ProfileCreated />
      ) : (
        <ProfileNotCreated />
      )}
    </Container>
  );
});

export default ProfilePage;
