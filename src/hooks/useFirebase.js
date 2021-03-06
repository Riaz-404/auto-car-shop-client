import { showNotification } from "@mantine/notifications";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, FacebookAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState();
    const [admin, setAdmin] = useState({});

    const navigate = useNavigate();

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

    const signInWithGoogle = (location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'POST')
                notification("Success", "You are now signed in with Google", "green");
                const destination = location?.state?.from || "/";
                navigate(destination, { replace: true });
            }).catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;


                notification("Error", errorMessage, "red");
            });
    }

    //sign-up with email and password
    const signUpWithEmail = (email, password, name, location) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                notification("Success", "Created your account successfully", "green");
                const destination = location?.state?.from || "/";
                navigate(destination, { replace: true });
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
    const loginWithEmail = (email, password, location) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                notification("Success", "Successfully logged in", "green");
                const destination = location?.state?.from || "/";
                navigate(destination, { replace: true });
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                notification("Error", errorMessage, "red");
            })
            .finally(() => {
                setLoading(false)
            });
    }

    //password reset
    const passwordReset = (email) => {
        setLoading(true);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                notification("Notification", "Password reset email sent to your email", "green");
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

    //facebook authentication
    const facebookProvider = new FacebookAuthProvider();
    const signInWithFacebook = (location) => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                notification("Success", "You are now signed in with Facebook", "green");
                const destination = location?.state?.from || "/";
                navigate(destination, { replace: true });
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
            localStorage.removeItem('loggedInUser');
            localStorage.removeItem('loggedInUserRole');
            navigate("/")
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
                localStorage.setItem('loggedInUser', user.email);
            } else {
                setUser({});
            }
        });
        return () => unsubscibed;
    }, [auth])

    //saving user to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://auto-car-shop.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // setting user role to localStorage
    useEffect(() => {
        fetch(`https://auto-car-shop.herokuapp.com/users/admin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
            })
    }, [user.email])


    return {
        user,
        isLoading,
        admin,
        signInWithGoogle,
        signUpWithEmail,
        loginWithEmail,
        passwordReset,
        signInWithFacebook,
        logout
    }
};

export default useFirebase;