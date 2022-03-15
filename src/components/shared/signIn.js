import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";
import { auth } from "./firebase";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const mutation = useAuthSignInWithEmailAndPassword(auth, {
		onError(error) {
			toast.error("Could not sign you in!");
		},
	});

	function onSignIn() {
		mutation.mutate({ email, password });
	}

	return (
		<>
			<input value={email} onChange={(e) => setEmail(e.target.value)} />
			<input value={password} onChange={(e) => setPassword(e.target.value)} />
			<button disabled={mutation.isLoading} onClick={onSignIn}>
				Sign In
			</button>
			{mutation.isError && <p>{mutation.error.message}</p>}
		</>
	);
}

export default { SignIn, SignUp };
