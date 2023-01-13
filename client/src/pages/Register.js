import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serverUrl } from "../services/api";

function Register() {

const navigate = useNavigate();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const registerHandler = (e) => {
  e.preventDefault();
  fetch(`${serverUrl}/auth/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name, email, password
    })
  }).then(res => res.json()).then(res => {
    if(res.status === "success") navigate('/login');
    if (res.status === "failed") setMessage(`* ${res.message}`);
  })
}

  return (
    <div className='w-full h-screen flex flex-col justify-center bg-blue-100 px-4'>
        <div className='flex flex-col bg-white shadow-lg rounded-lg p-6 gap-4 w-full md:w-1/2 lg:w-1/3 md:mx-auto h-1/2 justify-center'>
            <h1 className='text-6xl font-bold text-slate-700 mb-4 text-center'><span className='text-blue-600 text-7xl'>!</span>Calc</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' className='px-2 py-2 border-2 border-slate-300 rounded-lg focus:outline-0 duration-200 text-sm text-slate-700' placeholder='name'/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' className='px-2 py-2 border-2 border-slate-300 rounded-lg focus:outline-0 duration-200 text-sm text-slate-700' placeholder='email'/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='px-2 py-2 border-2 border-slate-300 rounded-lg focus:outline-0 duration-200 text-sm text-slate-700' placeholder='password'/>
            <span className="text-sm font-md text-red-600">{message}</span>
              <button onClick={registerHandler} className='bg-blue-600 py-2 mt-4 text-center rounded-lg text-white font-semibold active:bg-blue-800 duration-500'>Sign Up</button>
            <span className="text-sm text-center mt-8">Already have an account? <Link to={'/login'}><button className="text-blue-600 font-semibold">Login</button></Link>
            </span>
        </div>
    </div>
  );
}

export default Register;