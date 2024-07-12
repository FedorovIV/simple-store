/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import styled from "styled-components";
import Context from "../../main";

const Container = styled.div`
  width: calc(100% - 220px);
  height: calc(100vh - 100px);
  margin-left: 200px;
  margin-top: 80px;
  padding-top: 20px;
`;

const UploadFile = observer(() => {
  const { store } = useContext(Context);
  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  return (
    <Container className=" flex items-center justify-center">
      <div className="flex flex-col">
        <input type="file" onChange={handleFileChange} />{" "}
        <button
          className="bg-blue-400 text-white px-4 py-2 mt-2 rounded-md w-fit"
          onClick={() => store.uploadPhoto(file)}
        >
          Upload
        </button>
      </div>
    </Container>
  );
});

export default UploadFile;
