import React from 'react'
import './App.css';

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const equation = ["/", "x", "-", "+"]

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			equationString: '',
			inputString: '',
			isOnResult: false, 
			isOnEquation: false
		}
		this.insertInput = this.insertInput.bind(this)
	}

	insertInput(value) {

		if (value === "RESET") {
			this.setState({
				equationString: '',
				inputString: '',
				isOnResult: false,
				isOnEquation: false
			})
		}

		if (value === "=") {
			if (this.state.isOnEquation || this.state.isOnResult) return

			try {
				const res = eval(this.state.equationString.replace("x", "*"))
				this.setState({
					equationString: this.state.equationString + "=" + res,
					inputString: res,
					isOnResult: true
				})
			} catch (error) {
				this.setState({
					equationString: '',
					inputString: "INVALID EQUATION",
					isOnResult: true
				})
			}
		}
		
		if (this.state.inputString.length >= 17) {
			let tmpInput = this.state.inputString
			this.setState({
				inputString: 'DIGITAL LIMITE MET'
			})
			setTimeout((previousIn) => { this.setState({inputString: previousIn}) }, 3000, tmpInput)
			return
		}
		
		if (equation.includes(value)) {
			if ( (value === "x" || value === "/") && (this.state.isOnResult || this.state.equationString === "" || this.state.equationString.substr(-1) === "/")) return

			if (this.state.isOnResult) {
				this.setState({
					equationString: '' + value, 
					inputString: '' + value, 
					isOnResult: false,
					isOnEquation: true
				})
			} else {
				this.setState({
					equationString: this.state.equationString + value, 
					inputString: '' + value, 
					isOnEquation: true
				})
			}
		}

		if (number.includes(value) || value === '.') {


			if (this.state.isOnResult) {
				this.setState({
					equationString: '' + value, 
					inputString: '' + value,
					isOnResult: false
				})
			} else if (this.state.isOnEquation) {
				this.setState({
					equationString: this.state.equationString + value, 
					inputString: '' + value,
					isOnEquation: false
				})
			} else {
				this.setState({
					equationString: this.state.equationString + value, 
					inputString: this.state.inputString + value, 
				})
			}
		}
	}

	render() {
		return (
		<div className="App">
			<p className="equation">{this.state.equationString}</p>
			<p className="input">{this.state.inputString}</p>
			<div className="keyboard">
				<button className="reset" onClick={() => this.insertInput("RESET")}> AC </button>
				<button className="divide" onClick={() => this.insertInput("/")}> / </button>
				<button className="multiply" onClick={() => this.insertInput("x")}> x </button>
				<button className="seven" onClick={() => this.insertInput(7)}> 7 </button>
				<button className="eight" onClick={() => this.insertInput(8)}> 8 </button>
				<button className="nine" onClick={() => this.insertInput(9)}> 9 </button>
				<button className="minus" onClick={() => this.insertInput("-")}> - </button>
				<button className="four" onClick={() => this.insertInput(4)}> 4 </button>
				<button className="five" onClick={() => this.insertInput(5)}> 5 </button>
				<button className="six" onClick={() => this.insertInput(6)}> 6 </button>
				<button className="plus" onClick={() => this.insertInput("+")}> + </button>
				<button className="one" onClick={() => this.insertInput(1)}> 1 </button>
				<button className="two" onClick={() => this.insertInput(2)}> 2 </button>
				<button className="three" onClick={() => this.insertInput(3)}> 3 </button>
				<button className="equal" onClick={() => this.insertInput("=")}> = </button>
				<button className="zero" onClick={() => this.insertInput(0)}> 0 </button>
				<button className="dot" onClick={() => this.insertInput(".")}> . </button>
			</div>
		</div>
		);
	}
}

export default App;
