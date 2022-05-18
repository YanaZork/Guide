
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { User } from "../../../types/User.model";
import database from '../../implementation/firestore/firestoreDatabase';

export const fetchUser = async (userUid: string) => {
    try {
        const q = query(collection(database(), 'users'), where('uid', '==', userUid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        return data as User;
    } catch (err) { }
}

export const updateLikes = async (userUid: string, like: string) => {
    try {
        const q = query(collection(database(), 'users'), where('uid', '==', userUid));
        const doc = await getDocs(q);
        const newLikes = doc.docs[0].data().likes ? doc.docs[0].data().likes : [];
        if (newLikes && newLikes.indexOf(like) !== -1) {
            newLikes.splice(newLikes.indexOf(like), 1);
        } else {
            newLikes.push(like);
        }
        await updateDoc(doc.docs[0].ref, {
            likes: newLikes
        })

        return newLikes;
    } catch (err) { }
}
