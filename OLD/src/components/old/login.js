import * as React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	  this.setState({value: event.target.value});
   }
	handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
	}

  render() {
		return (
		 <>
			<main>
				<h1>Welcome to Whiteboard!</h1>
				 <h2>LOGIN</h2>
				<div className="smallItallic">
					This is definitely secure!
				</div>
				<form onSubmit={this.handleSubmit}>
					<p>
						<label>
							Username:{" "}
							<input type="text" value={this.state.value} onChange={this.handleChange} />
						</label>
					</p>
					<p>
						<label>
							 Password:{" "}
							 <input type="text" value={this.state.value} onChange={this.handleChange} />
						</label>
						<nav className="smallItallic">
							<Link to="/forgotPassword">Forgot your password?</Link>
						</nav>
					</p>
					<input type="submit" value="Submit" />
				</form>
			</main>
		 </>
		);		
  }
}

export Login.render();

