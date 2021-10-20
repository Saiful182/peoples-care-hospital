import { useEffect, useState } from "react"
import initializedAuthentication from "../../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

initializedAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logInwithPassAndEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });

    }
    const registration = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('');
                setUserName();
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message
                setError(errorMessage);
            });
    };
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {
                console.log(user);
                setError('');
            }).catch((error) => {
                setError(error);
            }
            )
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }
    useEffect(() => {
        const unsuscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
        return () => unsuscribed;
    })
    return {
        user, logout, error, signInUsingGoogle, password, setPassword, setError, email, setEmail, logInwithPassAndEmail, setName, registration
    }
}

export default useFirebase;