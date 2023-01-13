import { useState } from 'react';
import ButtonContainer from '../components/ButtonContainer';
import Display from '../components/Display';
import { IsSpellingProvider } from '../context/IsSpellingContext';
import { OperationProvider } from '../context/OperationContext';
import { ResultProvider } from '../context/ResultContext';
import { SpellingProvider } from '../context/SpellingContext';

function Main() {

  return (
    <div className='w-full h-full lg:w-1/2 lg:mx-auto bg-blue-100'>
      <OperationProvider>
        <ResultProvider>
          <IsSpellingProvider>
            <SpellingProvider>
              <Display/>
              <ButtonContainer/>
            </SpellingProvider>
          </IsSpellingProvider>
        </ResultProvider>
      </OperationProvider>
    </div>
  );
}

export default Main;