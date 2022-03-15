import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const navigate = useNavigate();

	const onChange = () => {};

	return (
		<>
			<div className="pageContainer">
				<header>
					<p className="pageHeader"></p>
				</header>

				<main>
					<form>
						<input
							type="email"
							className="input"
							placeholder="Email"
							id="email"
							value={email}
							onChange={onChange}
						></input>
						<div className="passwordInputDiv">
							<input
								type={showPassword ? 'text' : 'password'}
								className='passwordInput'>
							</input>
						</div>
					</form>
				</main>
			</div>
		</>
	);
}

export default SignIn;
