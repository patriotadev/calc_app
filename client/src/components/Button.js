import React, { useContext } from 'react'
import { ResultContext } from '../context/ResultContext'

function Button({label, index}) {
  
  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useContext(ResultContext);
  
  const resultHandler = (index) => {
    if (index !== 1 && index !== 20 && index !== 3) {
        setResult(result => [...result, label]);
    } else if (index === 1) {
        setResult([]);
    } else if (index === 3) {
        let data = result;
        let currentData = data.splice(0, data.length - 1);
        setResult(currentData);
    }
  }

  return (
    <div onClick={() => resultHandler(index)} className='w-24 h-24 bg-slate-100 shadow-inner rounded-2xl flex justify-center items-center cursor-pointer active:shadow-2xl active:shadow-blue-200'>
        <span className={`text-4xl text-slate-700 font-semibold ${index % 4 === 0 || index < 4 ? 'text-blue-600' : ''}`}>{label}</span>
    </div>
  )
}

export default Button