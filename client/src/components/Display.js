import { useContext } from 'react';
import { IsSpellingContext } from '../context/IsSpellingContext';
import { OperationContext } from '../context/OperationContext';
import { ResultContext } from '../context/ResultContext';
import { SpellingContext } from '../context/SpellingContext';
import Nav from './Nav';

function Display() {

  const [result] = useContext(ResultContext);
  const [operation] = useContext(OperationContext);
  const [isSpelling, setIsSpelling] = useContext(IsSpellingContext);
  const [spelling, setSpelling] = useContext(SpellingContext);

  return (
    <div className='w-full h-[30vh] pt-4 px-4 flex flex-col justify-between pb-2'>
        <Nav/>
        <div className='mt-3'>
            <p className={`italic text-lg capitalize ${spelling === "" ? 'hidden' : 'inline'}`}>{isSpelling ? `"${spelling}"` : ''}</p>
        </div>
        <div className='w-full h-full mt-2 flex justify-end items-end'>
            <div className='flex flex-col items-end'>
                <span className={`text-2xl font-medium ${result === "" ? 'text-6xl text-slate-800' : 'text-slate-600'}`}>{operation}</span>
                <span className={`text-6xl text-slate-800 font-semibold ${result === "" ? 'hidden' : ''}`}>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default Display;