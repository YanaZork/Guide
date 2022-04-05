export interface Brand {
    name: string;
    logo: string;
    info: {
        about: string;
        belong: string;
        category: string;
        founders: string;
        yearCreation: string;
        yearDeath: string;
    }
    models: [
        {
            title: string;
            body: string;
            class: string;
            generations: string;
            photo: string;
            years: string;
        }
    ]
}