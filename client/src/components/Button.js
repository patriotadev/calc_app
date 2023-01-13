import React, { useContext } from 'react'
import { IsSpellingContext } from '../context/IsSpellingContext';
import { OperationContext } from '../context/OperationContext'
import { ResultContext } from '../context/ResultContext';
import { SpellingContext } from '../context/SpellingContext';
import angkaTerbilang from '@develoka/angka-terbilang-js'; 

function Button({label, index}) {
  
  const [operation, setOperation] = useContext(OperationContext);
  const [result, setResult] = useContext(ResultContext)
  const [isSpelling, setIsSpelling] = useContext(IsSpellingContext);
  const [spelling, setSpelling] = useContext(SpellingContext);

  const operationHandler = (index) => {
    if (index !== 1 && index !== 20 && index !== 3) {
        let n = label !== 'x' ? label : '*';
        setOperation(operation => [...operation, n]);
    } else if (index === 1) {
        setOperation([]);
        setResult("");
        setSpelling("");
    } else if (index === 3) {
        let data = operation;
        let currentData = data.splice(0, data.length - 1);
        setOperation(currentData);
    } else if (index === 20) {
        let temp = eval(operation.join(""));
        setResult(temp);
        if (isSpelling) {
            setSpelling(angkaTerbilang(temp))
        } ;

        // let operand = operation.filter(o => o === '+' || o === '-' || o === 'x' || o === '/' || o === '%');
        // let operationString = operation.join("");
        // let number = operationString.split(/[-,x,/,+,%]/);
        // let i=1
        // let temp = parseFloat(number[0]);
        // while (i < number.length) {
        //     let n = parseFloat(number[i]);
        //     switch (operand[i-1]) {
        //         case '+':
        //             temp = temp + n;   
        //             break;
        //         case '-':
        //             temp = temp - n;   
        //             break;
        //         case 'x':
        //             temp = temp * n;   
        //             break;
        //         case '/':
        //             temp = temp / n;   
        //             break;
        //         case '%':
        //             temp = n ? temp * n / 100 : temp / 100;   
        //             break;
        //         default:
        //             break;
        //     }
        //     i++;
        // }
        // setResult(temp);

        // const SPELL_DICTIONARY = {
        //     0 : 'Nol',
        //     1 : 'Satu',
        //     2 : 'Dua',
        //     3 : 'Tiga',
        //     4 : 'Empat',
        //     5 : 'Lima',
        //     6 : 'Enam',
        //     7 : 'Tujuh',
        //     8 : 'Delapan',
        //     9 : 'Sembilan',
        //     10 : 'Sepuluh',
        //     11 : 'Sebelas', 
        //   };
        
        // SPELLING FUNCTION
        // let resultLength = temp.toString().length;
        // let resultString = temp.toString();
        // if (isSpelling) {
            // if (resultLength < 2 || temp <= 11) {
            //   for (let i = 0; i < Object.keys(SPELL_DICTIONARY).length; i++) {
            //     if (parseInt(Object.keys(SPELL_DICTIONARY)[i]) === temp) {
            //         setSpelling(Object.values(SPELL_DICTIONARY)[i]);
            //     }
            //   }
            // } else if (resultLength === 2 && temp >= 20) {
            //     let tempSpelling = [];
            //     for (let i = 0; i < resultLength; i++) {
            //         for (let j = 0; j < Object.keys(SPELL_DICTIONARY).length; j++) {
            //             if (Object.keys(SPELL_DICTIONARY)[j] === resultString[i]) {
            //                 if (resultString[i] === '0') {
            //                     tempSpelling.push('Puluh');
            //                 } else {
            //                     tempSpelling.push(Object.values(SPELL_DICTIONARY)[j]);
            //                 }
            //             }
            //         }
            //     }
            //     if (tempSpelling[1] === 'Puluh') {
            //         setSpelling(tempSpelling.join(" "));
            //     } else {
            //         setSpelling(tempSpelling.join(" Puluh "))
            //     }
            // } else if (resultLength === 2 && temp < 20) {
            //     let tempSpelling = [];
            //     for (let i = 0; i < resultLength; i++) {
            //         for (let j = 0; j < Object.keys(SPELL_DICTIONARY).length; j++) {
            //             if (Object.keys(SPELL_DICTIONARY)[j] === resultString[i]) {
            //                 if (resultString[i] === '1') {
            //                     tempSpelling.push('Belas');
            //                 } else {
            //                     tempSpelling.push(Object.values(SPELL_DICTIONARY)[j]);
            //                 }
            //             }
            //         }
            //     }
            //     setSpelling(tempSpelling.reverse().join(" "));
            // } else if (resultLength === 3 && temp >= 100) {
            //     let tempSpelling = [];
            //     for (let i = 0; i < resultLength; i++) {
            //         for (let j = 0; j < Object.keys(SPELL_DICTIONARY).length; j++) {
            //             if (Object.keys(SPELL_DICTIONARY)[j] === resultString[i]) {
            //                 tempSpelling.push(Object.values(SPELL_DICTIONARY)[j]);
            //             }
            //         }
            //     }
            //     if (tempSpelling[0] === 'Satu' && tempSpelling[1] === 'Nol' && tempSpelling[2] === 'Nol') {
            //         setSpelling('Seratus');
            //     } else if (tempSpelling[0] === 'Satu') {
            //         tempSpelling.shift();
            //         setSpelling('Seratus ' + tempSpelling.join(" Puluh "));
            //     } else {
            //         let fn = tempSpelling[0];
            //         tempSpelling.shift();
            //         setSpelling(fn + ' Ratus ' + tempSpelling.join(" Puluh "));
            //     }
            // }
        // }   
    }
  }

  return (
    <div onClick={() => operationHandler(index)} className='w-20 h-20 md:w-24 md:h-24 bg-slate-100 shadow-inner rounded-2xl flex justify-center items-center cursor-pointer active:shadow-2xl active:shadow-blue-300 active:scale-110 duration-100'>
        <span className={`text-4xl text-slate-700 font-semibold ${index % 4 === 0 || index < 4 ? 'text-blue-600' : ''}`}>{label}</span>
    </div>
  )
}

export default Button