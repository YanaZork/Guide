import { collection, getDocs } from "firebase/firestore";
import { Brand } from "../../../types/Brand";
import database from '../../implementation/firestore/firestoreDatabase';

export const getBrands = async (): Promise<Brand[]> => {
    let brands: Brand[] = [];
    const querySnapshot = await getDocs(collection(database(), "brand"));
    querySnapshot.forEach((doc) => {
        brands.push({
            name: doc.data().name,
            logo: doc.data().logo,
            info: doc.data().info
        })
    });
    return brands;
}

export const setBrand = async (brand: Brand): Promise<void> => {

}