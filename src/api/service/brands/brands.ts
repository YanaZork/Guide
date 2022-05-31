
import { collection, getDocs, setDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
// import { limit } from "firebase/firestore";
import { Brand } from "../../../types/Brand";
import { Model } from "../../../types/Model";
import database from '../../implementation/firestore/firestoreDatabase';

export const getBrands = async (): Promise<Brand[]> => {
    let brands: Brand[] = [];
// const q = query(collection(database(), "brand"), orderBy("name", "asc"), limit(30));
    const q = query(collection(database(), "brand"), orderBy("name", "asc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
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
