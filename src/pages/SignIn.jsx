import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
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


	const onSubmit = async (event) => {
		event.preventDefault()

		try {
			const auth = getAuth()

			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)

			if (userCredential.user) {
				navigate('/home')
			}

		} catch (error) {
			console.log(error)
		}

	}

	return (

		<>
			<div className="sign-in">
				<div class="container">
					<div class="row align-items-center my-5">
						<div class="col-lg-5">
							<h1 class="font-weight-light">Sign In</h1>
							<main>
								<form onSubmit={onSubmit}>
									<input
										type="email"
										className="input-text-wide"
										placeholder="Email"
										id="email"
										value={email}
										onChange={onChange}
									/>
									<br />
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
									<Link to="/forgot-password" className="h6 mt-2 font-weight-light">
										Forgot Password?
									</Link>
									<br />
									<Link to="/sign-up" className="h6 mt-2 font-weight-light">
										Sign Up
									</Link>
								</form>

								{/* Google OAuth */}


							</main>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignIn;
