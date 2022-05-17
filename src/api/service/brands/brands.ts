import { collection, getDocs, setDoc, doc, updateDoc } from "firebase/firestore";
import { Brand } from "../../../types/Brand";
import { Model } from "../../../types/Model";
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

export const updateBrandLogo = async (brandName: string, logo: string): Promise<void> => {
    const brandRef = doc(database(), "brand", brandName);
    await updateDoc(brandRef, {
        logo
    })
}

/**
 * Осторожно! Меняет всю пачку моделей
 * @param brandName 
 * @param logo 
 * @param model 
 */
export const updateModelImage = async (brandName: string, models: Model[]): Promise<void> => {
    const brandRef = doc(database(), "brand", brandName);
    await updateDoc(brandRef, {
        models
    })
}