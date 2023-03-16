import React from 'react'
import './style.css'

export default function Winner({ ganador , handleReset}) {

	return (
		<div id='div-winner'>
			<h1> { ganador } </h1>
			<button onClick={handleReset}>Reset</button>
		</div>
	)
}
