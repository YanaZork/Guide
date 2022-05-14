import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { Brand } from "../../../types/Brand";
import database from '../../implementation/firestore/firestoreDatabase';

export const getBrands = async (): Promise<Brand[]> => {
    let brands: Brand[] = [];
    const querySnapshot = await getDocs(collection(database(), "brand"));
    querySnapshot.forEach((doc) => {
        // brands.push({
        //     name: doc.data().name ? doc.data().name : '',
        //     logo: doc.data().logo ? doc.data().logo : '',
        //     info: doc.data().info ? {
        //         about: doc.data().info.about,
        //         belong: doc.data().info.belong,
        //         category: doc.data().info.category,
        //         founders: doc.data().info.founders,
        //         yearCreation: doc.data().info.yearCreation,
        //     } : {
        //         about: '',
        //         belong: '',
        //         category: '',
        //         founders: '',
        //         yearCreation: '',
        //     },
        //     models : 
        // })
        brands.push(doc.data() as Brand);
    });
    return brands;
}

export const setBrand = async (brand: Brand): Promise<void> => {
    await setDoc(doc(database(), "brand", brand.name), brand);
}