import React, { useContext } from 'react'
import { OperationContext } from '../context/OperationContext'

function Button({label, index, result, setResult}) {
  
  const [operation, setOperation] = useContext(OperationContext);
  
  const operationHandler = (index) => {
    if (index !== 1 && index !== 20 && index !== 3) {
        setOperation(operation => [...operation, label]);
    } else if (index === 1) {
        setOperation([]);
        setResult("");
    } else if (index === 3) {
        let data = operation;
        let currentData = data.splice(0, data.length - 1);
        setOperation(currentData);
    } else if (index === 20) {
        let operand = operation.filter(o => o === '+' || o === '-' || o === 'x' || o === '/' || o === '%');
        let operationString = operation.join("");
        let number = operationString.split(/[-,x,/,+,%]/);
        // setOperation(number);
        let i=1
        let temp = parseFloat(number[0]);
        while (i < number.length) {
            let n = parseFloat(number[i]);
            switch (operand[i-1]) {
                case '+':
                    temp = temp + n;   
                    break;
                case '-':
                    temp = temp - n;   
                    break;
                case 'x':
                    temp = temp * n;   
                    break;
                case '/':
                    temp = temp / n;   
                    break;
                case '%':
                    temp = n ? temp * n / 100 : temp / 100;   
                    break;
                default:
                    break;
            }
            i++;
        }
        setResult(temp);
    }
  }

  return (
    <div onClick={() => operationHandler(index)} className='w-20 h-20 md:w-24 md:h-24 bg-slate-100 shadow-inner rounded-2xl flex justify-center items-center cursor-pointer active:shadow-2xl active:shadow-blue-300 active:scale-110 duration-100'>
        <span className={`text-4xl text-slate-700 font-semibold ${index % 4 === 0 || index < 4 ? 'text-blue-600' : ''}`}>{label}</span>
    </div>
  )
}

export default Button