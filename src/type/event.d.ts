export interface Consequence {
    costs: number;
    mood: number;
    production: number;
    popularity: number;
}

export interface EventType {
    id: number;
    title: string;
    description: string;
    consequencesPreview: string;
    firstChoice: string;  // "Oui"
    SecondChoice: string; // "Non"
    goodChoice: Consequence;
    badChoice: Consequence;
}