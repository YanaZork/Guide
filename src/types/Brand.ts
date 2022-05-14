import { Model } from "./Model";

export interface Brand {
    name: string;
    logo: string;
    info: {
        about: string;
        belong: string;
        category: string;
        founders: string;
        yearCreation: string;
    };
    models: Model[]
}