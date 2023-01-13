import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='w-full h-screen flex flex-col justify-center bg-blue-100 px-4'>
        <div className='flex flex-col bg-white shadow-lg rounded-lg p-6 gap-4 w-full md:w-1/2 lg:w-1/3 md:mx-auto h-1/2 justify-center'>
            <h1 className='text-6xl font-bold text-slate-700 mb-4 text-center'><span className='text-blue-600 text-7xl'>!</span>Calc</h1>
            <input type='text' className='mb-2 px-2 py-2 border-2 border-slate-300 rounded-lg focus:outline-0 duration-200 text-sm text-slate-700' placeholder='username'/>
            <input type='password' className='px-2 py-2 border-2 border-slate-300 rounded-lg focus:outline-0 duration-200 text-sm text-slate-700' placeholder='password'/>
            <Link to={'/'} className='bg-blue-600 py-2 mt-4 text-center rounded-lg text-white font-semibold'>
                <button>Login</button>
            </Link>
            <span className="text-sm text-center mt-8">Don't have an account? <Link to={'/register'}><button className="text-blue-600 font-semibold">Register</button></Link>
            </span>
        </div>
    </div>
  );
}

export default Login;