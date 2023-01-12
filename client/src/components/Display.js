import { useContext } from 'react';
import { OperationContext } from '../context/OperationContext';
import Nav from './Nav';

function Display({result}) {
  const [operation] = useContext(OperationContext);
  
  return (
    <div className='w-full h-[30vh] pt-4 px-4 flex flex-col justify-between pb-2'>
        <Nav/>
        <div className='w-full  h-full mt-2 flex justify-end items-end'>
            <div className='flex flex-col items-end'>
                <span className={`text-2xl font-medium ${result === "" ? 'text-6xl text-slate-800' : 'text-slate-600'}`}>{operation}</span>
                <span className={`text-6xl text-slate-800 font-semibold ${result === "" ? 'hidden' : ''}`}>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default Display;