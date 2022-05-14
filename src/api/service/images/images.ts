import { getDownloadURL, ref, uploadString } from "firebase/storage";
import storage from '../../implementation/storage/storage';

export const updateImage = (name: string, path: string, image: string) => {
    const storageRef = ref(storage(), `${path}/${name}`);

    return uploadString(storageRef, image, 'base64');
}

export const uploadLogo = async (name: string, image: string) => {
    const uploadTask = await updateImage(name, 'logos', image);
    const downloadLink = await getDownloadURL(uploadTask.ref)
    return downloadLink;
}