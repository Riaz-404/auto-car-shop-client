import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const User = result.user;
                // ...
                console.log(User);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

                console.log(errorCode, errorMessage, email, credential);
            });
    }

    // useEffect (() => {
    //     const unsubscibe = onAuthStateChanged((user) => {
    //         if (user) {
    //             setUser(user);
    //         } else {
    //             setUser({});
    //         }
    //     });
    //     return ()=>unsubscibe;
    // }, [auth])

    return {
        user,
        signInWithGoogle,

    }
};

export default useFirebase;