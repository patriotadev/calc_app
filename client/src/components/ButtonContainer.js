import Button from "./Button";

function ButtonContainer() {

  const buttonLabel = ['C', '%', '<=', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];
  const buttons = [];
  for (let i = 0; i < buttonLabel.length; i++) {
    buttons.push(<Button index={i+1} label={buttonLabel[i]}/>)
  }
  return (
    <div className="w-full md:w-1/2 md:mx-auto h-[70vh] grid grid-cols-4 gap-px grid-rows-5 px-4 pt-12 justify-items-center">
        {buttons}
    </div>
  );
}

export default ButtonContainer;