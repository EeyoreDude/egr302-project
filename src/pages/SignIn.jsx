import { useState } from "react";
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import Button from "./shared/Button";
import OAuth from "./components/OAuth";

function SignIn({Courses, handleSetCourses}) {
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
				navigate('/profile')
			}

		} catch (error) {
			toast.error('Bad User Credentials')
		}

	}

	return (
		<>
			<div className="pageLayout">
				<div className="container">
					<div className="row align-items-center my-5">
						<div className="col-lg-10">
							<h1 className="font-weight-light">Sign In</h1>
							<main>
								<div className="formCard">
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
									<div className="text-left">
										<Button type="submit" version="btn-1 btnDark" isDisabled={false}>
											Sign In
											{/* <ArrowRightIcon className="float-right" fill="#ffffff" width='25px' height='25px' /> */}
										</Button>
									</div>
								</form>
								</div>

								<Link to="/forgot-password" className="h6 mt-2 font-weight-light">
									Forgot Password?
								</Link>
								<br />
								<Link to="/sign-up" className="h6 mt-2 font-weight-light">
									Sign Up
								</Link>
								<div className="mt-5 h4 font-weight-light">Link your Google Classroom account:</div>
								<div className="mt-2">
									<OAuth Courses = {Courses} handleSetCourses={handleSetCourses}/>
								</div>

							</main>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignIn;
