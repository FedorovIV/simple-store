import { useContext, useState } from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import Context from "../../main";

const ProfileNotCreated = () => {
  const { store } = useContext(Context);

  console.log(store.user);
  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);

  const handleCreateProfile = async () => {
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      setIsPhoneNumberValid(false);
      return;
    }
    if (!address) {
      setIsAddressValid(false);
      return;
    }

    await store.createProfile({ phoneNumber: phoneNumber, address: address });
  };

  return (
    <div className="flex flex-col p-4 bg-gray-200 rounded-lg w-fit gap-4">
      <p className="text-3xl">Your profile is not created</p>
      <p className="text-2xl">Please, fill profile</p>
      <label>Phone number</label>
      <input
        className={`pl-1 rounded-md border ${
          isPhoneNumberValid ? "border-gray-500" : "border-red-500"
        }`}
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
          setIsPhoneNumberValid(true);
        }}
      />
      {!isPhoneNumberValid && (
        <p className="text-red-500">Invalid phone number</p>
      )}
      <label>Address</label>
      <input
        className={`pl-1 rounded-md border ${
          isAddressValid ? "border-gray-500" : "border-red-500"
        }`}
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
          setIsAddressValid(true);
        }}
      />
      {!isAddressValid && <p className="text-red-500">Please enter address</p>}
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md w-fit"
        onClick={handleCreateProfile}
      >
        Create profile
      </button>
      <YMaps>
        <div>
          My awesome application with maps!
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
      </YMaps>
    </div>
  );
};

export default ProfileNotCreated;
