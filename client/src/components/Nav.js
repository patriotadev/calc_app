import { useContext } from "react"
import { IsSpellingContext } from "../context/IsSpellingContext"

function Nav() {

  const [isSpelling, setIsSpelling] = useContext(IsSpellingContext);

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
            <button className='w-fit h-fit bg-blue-600 py-1 px-2 rounded-lg text-white'>Logout</button>
        </div>
    </div>
  )
}

export default Nav