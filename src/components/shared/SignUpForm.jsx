import React from "react";
import { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";

function SignUpForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(false);
	const [message, setMessage] = useState('');

	const handleChange = (event) => {
		setEmail(email);
		
	}

	return (
		<div>
			<form>
				<TextInput name="Email" hasValue={(email) => setEmail(email)}/>
				<TextInput name="Password" hasValue={(password) => setPassword(password)}/>
				<br />
				<Button type="submit" version="success" isDisabled={btnDisabled}>Sign Up</Button>
				{message && <div className='alert-red'>{message}</div>}
			</form>
		</div>
	);
}

export default SignUpForm;
