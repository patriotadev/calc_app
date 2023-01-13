import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import ButtonContainer from '../components/ButtonContainer';
import Display from '../components/Display';
import { IsSpellingProvider } from '../context/IsSpellingContext';
import { OperationProvider } from '../context/OperationContext';
import { ResultProvider } from '../context/ResultContext';
import { SpellingProvider } from '../context/SpellingContext';
import Cookies from 'js-cookie';

function Main() {
  const navigate = useNavigate();

  const userCookie = Cookies.get("user");
  useEffect(() => {
    if (!userCookie) navigate("/login");
  })

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