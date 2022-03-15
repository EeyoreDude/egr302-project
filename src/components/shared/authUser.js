import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "./firebase";

function IsUserAuth() {
	const user = useAuthUser(["user"], auth);

	if (user.isLoading) {
		return <div />;
	}

	if (user.data) {
		return <div>Welcome {user.data.displayName}!</div>;
	}

	return <div>Not signed in.</div>;
}

function User() {
	const user = useAuthUser(["user"], auth);

	return <div>Welcome {user.data.displayName}!</div>;
}

const user = useAuthUser(["user"], auth, {
	onSuccess(user) {
		if (user) {
			console.log("User is authenticated!", user);
		}
	},
	onError(error) {
		console.error("Failed to subscribe to users authentication state!");
	},
});

export default { IsUserAuth, User };
