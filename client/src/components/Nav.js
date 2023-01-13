import { useContext } from "react"
import { IsSpellingContext } from "../context/IsSpellingContext"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { serverUrl } from "../services/api";

function Nav() {
  
  const navigate = useNavigate();
  const [isSpelling, setIsSpelling] = useContext(IsSpellingContext);

  const logoutHandler = async (e) => {
    const userCookie = JSON.parse(Cookies.get("user"));
    e.preventDefault();
    fetch(`${serverUrl}/auth/logout`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userCookie.user_id
      })
    }).then(res => res.json()).then(res => {
      if (res.status === "success") {
        Cookies.remove("user");
        navigate('/')
      }
    });
  }

  return (
    <div className='flex justify-between h-fit w-full items-center'>
        <div>
            <h1 className='text-4xl font-bold text-slate-700'><span className='text-blue-600 text-4xl'>!</span>Calc</h1>
        </div>
        <div className="flex items-center gap-4">
            <div className="bg-slate-300 px-2 py-1 rounded-lg flex items-center gap-2">
                <label className="font-medium">Spelling</label>
                <input type={"checkbox"} onChange={() => setIsSpelling(!isSpelling)}/>
            </div>
            <button onClick={logoutHandler} className='w-fit h-fit bg-blue-600 py-1 px-2 rounded-lg text-white'>Logout</button>
        </div>
    </div>
  )
}

export default Nav