import ButtonContainer from '../components/ButtonContainer';
import Display from '../components/Display';
import { ResultProvider } from '../context/ResultContext';

function Main() {

  return (
    <>
      <ResultProvider>
        <Display/>
        <ButtonContainer/>
      </ResultProvider>
    </>
  );
}

export default Main;