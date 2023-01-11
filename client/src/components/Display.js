import { useContext } from 'react';
import { ResultContext } from '../context/ResultContext';
import Nav from './Nav';

function Display() {
  const [result] = useContext(ResultContext);
  
  return (
    <div className='w-full h-[30vh] pt-4 px-4 flex flex-col justify-between pb-2'>
        <Nav/>
        <div className='w-full md:w-1/2 md:mx-auto h-full mt-2 flex justify-end items-end'>
            <div className='flex flex-col items-end'>
                <span className='text-2xl text-slate-700 font-medium'>{result}</span>
                <span className='text-6xl text-slate-800 font-semibold'>10</span>
            </div>
        </div>
    </div>
  )
}

export default Display;