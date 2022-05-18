
import { collection, getDocs, query, where } from "firebase/firestore";
import { User } from "../../../types/User.model";
import database from '../../implementation/firestore/firestoreDatabase';

export const fetchUser = async (userUid: string) => {
    try {
      const q = query(collection(database(), 'users'), where('uid', '==', userUid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      return data as User;
    } catch (err) {}
  }
 