import { useState } from "react";
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from "../firebase.config"
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import Button from "./shared/Button";

function SignUp() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { name, email, password } = formData;

	const navigate = useNavigate();

	const onChange = (event) => {
		setFormData((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		try {
			const auth = getAuth();

			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredential.user

			updateProfile(auth.currentUser, {
				displayName: name
			})

			const formDataCopy = { ...formData }
			delete formDataCopy.password
			formDataCopy.timestamp = serverTimestamp()

			await setDoc(doc(db, 'users', user.uid), formDataCopy)

			navigate('/home')
		} catch (error) {
			toast.error('Something Went Wrong')
		}
	}

	return (
		<>
			<div className="pageLayout">
				<div className="container">
					<div className="row align-items-center my-5">
						<div className="col-lg-5">
							<h1 className="font-weight-light">Sign Up</h1>
							<main>
							<div className="formCard">
								<form onSubmit={onSubmit}>
									{/* <input
										type="text"
										className="input-text-wide"
										placeholder="First Name"
										id="firstName"
										value={firstName}
										onChange={onChange}
									/>
									<input
										type="text"
										className="input-text-wide"
										placeholder="Last Name"
										id="lastName"
										value={lastName}
										onChange={onChange}
									/>
									<input
										type="text"
										className="input-text-wide"
										placeholder="School"
										id="school"
										value={school} 
										onChange={onChange}
									/> */}
									<input
										type="text"
										className="input-text-wide"
										placeholder="Name"
										id="name"
										value={name}
										onChange={onChange}
									/>
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
											Sign Up
											{/* <ArrowRightIcon fill="#ffffff" width="25px" height="25px" /> */}
										</Button>
									</div>
								</form>
								</div>

								<Link to="/sign-in" className="h6 mt-2 font-weight-light">
									Back to Sign In
								</Link>

								{/* Google OAuth */}
							</main>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignUp;
