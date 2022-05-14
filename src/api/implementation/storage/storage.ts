import { FirebaseStorage, getStorage } from "firebase/storage";

const storage = (): FirebaseStorage => {
    return getStorage();
};

export default storage;
