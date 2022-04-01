import { showNotification } from "@mantine/notifications";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";


import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState();

    const auth = getAuth();

    //show notification

    const notification = (title, message, color) => {
        showNotification({
            title: title,
            message: message,
            autoClose: 4000,
            color: color,

        });
    }


    //Google Authentication
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                notification("Success", "You are now signed in with Google", "green");

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;


                notification("Error", errorMessage, "red");
            });
    }

    //sign-up with email and password
    const signUpWithEmail = (email, password, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                notification("Success", "Created your account successfully", "green");
            })
            .catch((error) => {
                
                const errorMessage = error.message;
                // ..
                notification("Error", errorMessage, "red");
            })
            .finally(() => {
                setLoading(false)
            });

    }

    //login with email and password
    const loginWithEmail = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                notification("Success", "Successfully logged in", "green");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                notification("Error", errorMessage, "red");
            })
            .finally(() => {
                setLoading(false)
            });
    }

    //facebook authentication
    const facebookProvider = new FacebookAuthProvider();
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                notification("Success", "You are now signed in with Facebook", "green");
            })
            .catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                // const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
                notification("Error", errorMessage, "red");
            });
    }

    //logout
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            notification("Success", "You are now signed out", "#1f2937");
        }).catch((error) => {
            // An error happened.
            notification("Error", error.message, "red");
        });
    }

    //setting user state
    useEffect(() => {
        const unsubscibed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscibed;
    }, [auth])

    return {
        user,
        isLoading,
        signInWithGoogle,
        signUpWithEmail,
        loginWithEmail,
        signInWithFacebook,
        logout
    }
};

export default useFirebase;