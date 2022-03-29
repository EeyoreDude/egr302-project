import {useState} from "react";
import { Link } from "react-router-dom";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {toast} from "react-toastify";
import Button from "./shared/Button";



function ForgotPassword() {
	const [email, setEmail] = useState('')
 
	const onChange = (event) => setEmail(event.target.value)

	const onSubmit = async (event) => {
		event.preventDefault()
		try {
			const auth = getAuth()
			await sendPasswordResetEmail(auth, email)
			toast.success("Email was sent!")
		} catch(error){
			toast.error("Could not send the email.")
		}

	}

	return (
		<>
			<div className="pageLayout">
				<div className="container">
					<div className="row align-items-center my-5">
						<div className="col-lg-10">
							<h1 className="font-weight-light">Forgot Password</h1>
							<div className="mt-3 mb-0">
								<p>
									Please enter the email associated with your account.
								</p>
							</div>
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
									<div className="text-left">
									<Button type="submit" version="btn-1 btnDark" isDisabled={false}>
										Send Email
										{/* <ArrowRightIcon className="float-right" fill="#ffffff" width='25px' height='25px' /> */}
									</Button>
								</div>
								</form>
							</div>
							<Link to="/sign-in" className="h6 mt-2 font-weight-light">
								Back to Sign In
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ForgotPassword;