import React, { useState } from 'react'
import './App.css'

export default function App() {
	const [result, setResult] = useState('')

	const handleClick = (e) => {
		setResult(result.concat(e.target.value))
	}

	const handleDelet = () => {
		setResult('')
	}

	const handleEqual = () => {
		setResult(eval(result).toString())
	}

	const handleDelet2 = () => {
		setResult(result.slice(0, -1));
    };

  return (
	<div className='calc'>
		<input value={result} className='text' type="text" name="text" placeholder='0' />
		<div className="calc2">
		<input onClick={handleClick} className='btn' type="button" value="9" />
		<input onClick={handleClick} className='btn' type="button" value="8" />
		<input onClick={handleClick} className='btn' type="button" value="7" />
		</div>
		<div className="calc2">
		<input onClick={handleClick} className='btn' type="button" value="6" />
		<input onClick={handleClick} className='btn' type="button" value="5" />
		<input onClick={handleClick} className='btn' type="button" value="4" />
		</div>
		<div className="calc2">
		<input onClick={handleClick} className='btn' type="button" value="3" />
		<input onClick={handleClick} className='btn' type="button" value="2" />
		<input onClick={handleClick} className='btn' type="button" value="1" />
		</div>
		<div className="calc2">
		<input onClick={handleClick} className='btn' type="button" value="0" />
		<input onClick={handleClick} className='btn' type="button" value="+" />
		<input onClick={handleClick} className='btn' type="button" value="-" />
		</div>
		<div className="calc2">
		<input onClick={handleClick} className='btn' type="button" value="*" />
		<input onClick={handleClick} className='btn' type="button" value="/" />
		<input onClick={handleClick} className='btn' type="button" value="%" />
		</div>
		<div className="calc2">
		<input onClick={handleClick} className='btn2' type="button" value="." />
		<input onClick={handleEqual} className='btn2' type="button" value="=" />
		</div>
		<div className="calc2">
		<input onClick={handleDelet} className='btn2' type="button" value="DEL" />
		<input onClick={handleDelet2} className='btn2' type="button" value="C" />
		</div>
	</div>
  )
}
