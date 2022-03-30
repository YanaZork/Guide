import { getFirestore, Firestore } from "firebase/firestore";

const database = (): Firestore => {
    return getFirestore();
};

// do not use ServerValue.TIMESTAMP, because it will trigger on change twice
// export const CURRENT_TIMESTAMP = firebase.database.ServerValue.TIMESTAMP;

export default database;
