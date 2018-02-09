import { auth } from "./firebase"



					//signup auth
export const doCreateUserWithEmailAndPassword = (email, password) =>
	auth.createUserWithEmailAndPassword(email, password);



  					//sign in auth
export const doSignInWithEmailAndPassword = (email, password) =>
	auth.signInWithEmailAndPassword(email, password);




export const doSignOut = () =>
	auth.signOut();