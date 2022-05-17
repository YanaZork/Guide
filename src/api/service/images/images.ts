import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from '../../implementation/storage/storage';

export const updateImage = (path: string, file: any, name: string) => {
    const storageRef = ref(storage(), `${path}/${name}`);

    return uploadBytes(storageRef, file);
}

export const uploadLogo = async (file: any, name: string) => {
    const uploadTask = await updateImage('logos', file, name);
    const downloadLink = await getDownloadURL(uploadTask.ref)
    return downloadLink;
}

export const updateModelPhoto = async (file: any, name: string) => {
    const uploadTask = await updateImage('models', file, name);
    const downloadLink = await getDownloadURL(uploadTask.ref)
    return downloadLink;
}

