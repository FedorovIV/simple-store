import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Context from '../../main';

const ProfileCreated = observer(() => {
  const { store } = useContext(Context);

  return (
    <div className='bg-white shadow-md p-4 rounded-md w-fit pr-20'>
      <h2 className='text-xl font-bold mb-4'>User Profile</h2>
      <div className='flex flex-col'>
        <div>
          <p className='text-lg'>Username:</p>
          <p>{store.user.username}</p>
        </div>
        <div>
          <p className='text-lg'>Email:</p>
          <p>{store.user.email}</p>
        </div>
        <div>
          <p className='text-lg'>Delivery Address:</p>
          <p>{store.user.deliveryAddress}</p>
        </div>
        <div>
          <p className='text-lg'>Phone Number:</p>
          <p>{store.user.phoneNumber}</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md w-fit">Edit Profile</button>
      </div>
    </div>
  );
});

export default ProfileCreated;