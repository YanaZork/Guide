import { getFirestore, Firestore } from "firebase/firestore";

const storage = (): Firestore => {
    return getFirestore();
};

export default storage;
