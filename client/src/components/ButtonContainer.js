import Button from "./Button";

function ButtonContainer({result, setResult}) {

  const buttonLabel = ['C', '%', '<=', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];
  const buttons = [];
  for (let i = 0; i < buttonLabel.length; i++) {
    buttons.push(<Button result={result} setResult={setResult} index={i+1} label={buttonLabel[i]}/>)
  }
  return (
    <div className="w-full mx-auto bg-slate-300 rounded-md h-[70vh] grid grid-cols-4 gap-1 grid-rows-5 px-4 pt-12 justify-items-center">
        {buttons}
    </div>
  );
}

export default ButtonContainer;