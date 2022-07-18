import React, {useState} from 'react'
import './Style.css';

const Calculator = () => {
    const [input,setInput]=useState('');

    const clickHandler = e => {
      setInput (input.concat(e.target.name));
    }
    const clear = () => {
      setInput('');
    }
    const backspace = () => {
      setInput(input.slice(0, - 1)); //or input -1
    }
    const calculate = () => {
      try {
        setInput(eval(input).toString());
      } catch(err) {
        setInput('Error')
      }
    }
  return (
    <div className='container'>
      <form>
          <input id='input' type='text' value={input} />
      </form>
          <div className='keypad'>
                <button className='highlight' onClick={clear} id='clear' >Clear</button>
                <button className='highlight' onClick={backspace} id='backspace'>C</button>
                <button className='highlight' name='/' onClick={clickHandler}>&divide;</button>
                <button name='7' onClick={clickHandler}>7</button>
                <button name='8' onClick={clickHandler}>8</button>
                <button name='9' onClick={clickHandler}>9</button>
                <button className='highlight' name='*' onClick={clickHandler}>&times;</button>
                <button name='4' onClick={clickHandler}>4</button>
                <button name='5' onClick={clickHandler}>5</button>
                <button name='6' onClick={clickHandler}>6</button>
                <button className='highlight' name='-' onClick={clickHandler}>-</button>
                <button name='1' onClick={clickHandler}>1</button>
                <button name='2' onClick={clickHandler}>2</button>
                <button name='3' onClick={clickHandler}>3</button>
                <button className='highlight' name='+' onClick={clickHandler}>+</button>
                <button name='0' onClick={clickHandler}>0</button>
                <button name='.' onClick={clickHandler}>.</button>
                <button className='highlight' onClick={calculate} id='result'>=</button>
            </div>
      </div>
  )
}

export default Calculator;