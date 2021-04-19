import React from 'react'
import './App.css';

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const equation = ["/", "x", "-", "+", "="]

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			equationString: '',
			inputString: '',
			isOnResult: false
		}
		this.insertInput = this.insertInput.bind(this)
	}

	insertInput(value) {

	}

	render() {
		return (
		<div className="App">
			<p className="equation">{this.state.equationString}</p>
			<p className="input">{this.state.inputString}</p>
			<div className="keyboard">
				<button className="reset">AC</button>
				<button className="divide">/</button>
				<button className="multiply">x</button>
				<button className="seven">7</button>
				<button className="eight">8</button>
				<button className="nine">9</button>
				<button className="minus">-</button>
				<button className="four">4</button>
				<button className="five">5</button>
				<button className="six">6</button>
				<button className="plus">+</button>
				<button className="one">1</button>
				<button className="two">2</button>
				<button className="three">3</button>
				<button className="equal">=</button>
				<button className="zero">0</button>
				<button className="dot">.</button>
			</div>
		</div>
		);
	}
}

export default App;
