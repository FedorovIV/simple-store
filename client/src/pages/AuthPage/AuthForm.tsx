import React, { useContext, useState } from "react";
import Context from "../../main";

const AuthForm = () => {

  const {store} = useContext(Context);

  const [ lUsername, setlUsername ] = useState("");
  const [ lPassword, setlPassword ] = useState("");
  const [ rUsername, setrUsername ] = useState("");
  const [ rEmail, setrEmail ] = useState("");
  const [ rPassword, setrPassword] = useState("");
  
  const handleLogin = async () =>{
    await store.login(lUsername, lPassword)
  }

  const handleRegistration = async () =>{
    await store.registration(rUsername, rEmail, rPassword)
  }

  return (
    <div className=" bg-black rounded text-white p-2 flex flex-col gap-1">
      <h1 className=" text-3xl">Sign in</h1>
      <label>Username</label>
      <input className="text-black pl-1" type="text" onChange={(e)=>{setlUsername(e.target.value)}}/>
      <label>Password</label>
      <input className="text-black pl-1" type="password" onChange={(e)=>{setlPassword(e.target.value)}} />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md w-fit" onClick={()=>{handleLogin()}}>
        Sign in
      </button>
      <h1 className=" text-3xl">Or sign up</h1>
      <label>Username</label>
      <input className="text-black pl-1" type="text" onChange={(e)=>{setrUsername(e.target.value)}} />
      <label>Email</label>
      <input className="text-black pl-1" type="text" onChange={(e)=>{setrEmail(e.target.value)}}/>
      <label>Password</label>
      <input className="text-black pl-1" type="password" onChange={(e)=>{setrPassword(e.target.value)}}/>
      <button className="bg-blue-400 text-white px-4 py-2 mt-2 rounded-md w-fit" onClick={()=>{handleRegistration()}}>
        Sign up
      </button>
    </div>
  );
};

export default AuthForm;
