import e from "cors";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import Button from "./shared/Button";

function SignIn() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const navigate = useNavigate();

	const onChange = (event) => {
		setFormData((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	};

	return (
		<>
			<div className="container">
				<h1 className="">
					<p className="font-weight-bold">Welcome to Whiteboard!</p>
				</h1>

				<main>
					<form>
						<input
							type="email"
							className="input-text-wide"
							placeholder="Email"
							id="email"
							value={email}
							onChange={onChange}
						/>
						<br/>
						<input
							type={showPassword ? "text" : "password"}
							className="input-text-wide"
							placeholder="Password"
							id="password"
							value={password}
							onChange={onChange}
						/>
						<img
							src={visibilityIcon}
							alt="Show Password"
							className="input-icon-right pos-relative"
							onClick={() => setShowPassword((prevState) => !prevState)}
						/>
						<div className="text-left mb-3">
							<Button type="submit" version="dark" isDisabled={false}>
								Sign In
								<ArrowRightIcon fill="#ffffff" width='25px' height='25px' />
							</Button>
						</div>
						<Link to="/forgotPassword" className="h6 mt-2 font-weight-light">
							Forgot Password?
						</Link>
						<br/>
						<Link to="/signUp"className="h6 mt-2 font-weight-light">
							Sign Up
						</Link>
					</form>

					{/* Google OAuth */}

					
				</main>
			</div>
		</>
	);
}

export default SignIn;
