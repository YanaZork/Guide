import {
    GoogleAuthProvider,
    getAuth as getFirebaseAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";
  import {
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";
import FirebaseApplication from "../../implementation/firebase/firebaseApp";
import database from "../../implementation/firestore/firestoreDatabase";

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(getAuth(), new GoogleAuthProvider());
        const user = res.user;
        const q = query(collection(database(), "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(database(), "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert((err as Error).message);
    }
};

// вход почта/пароль
export const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(getAuth(), email, password);
        return true;
    } catch (err) {
        return false;
    }
};


// регистрация логин/пароль
export const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(getAuth(), email, password);
        const user = res.user;
        await addDoc(collection(database(), "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
        return true;
    } catch (err) {
        return false;
    }
};

// сброс пароля
export const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(getAuth(), email);
        return true;
    } catch (err) {
        return false;
        
    }
};

// выход из системы
export const logout = async () => {
    await signOut(getAuth());
};

export const getAuth = () => {
    return getFirebaseAuth(FirebaseApplication.app);
}