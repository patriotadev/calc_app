import { useState } from 'react';
import ButtonContainer from '../components/ButtonContainer';
import Display from '../components/Display';
import { OperationProvider } from '../context/OperationContext';

function Main() {

  const [result, setResult] = useState("");

  return (
    <div className='w-full h-full lg:w-1/2 lg:mx-auto bg-blue-100'>
      <OperationProvider>
            <Display result={result}/>
            <ButtonContainer result={result} setResult={setResult} />
      </OperationProvider>
    </div>
  );
}

export default Main;