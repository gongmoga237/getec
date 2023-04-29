export interface User {
  email: string;
  name: string;
  telephone: string;
}

export interface Doctor extends User {
  status: "available" | "unavailable";
  speciality?: string[];
  consultations: number;
  image: string;
}

export interface Patient extends User {
  titre: "madame" | "monsieur" | "mademoiselle";
  consultation: number;
}

export interface Hospital {
  email: string;
  name: string;
  telephone: string;
  position?: [number, number];
  services: string[];
  doctors: string[];
  image: any;
}

export interface Article {
  slug: string;
  title: string;
  image: string;
}

export interface Pharmacie {
  email: string;
  name: string;
  telephone: string;
  image: string;
  availableDrugs: string[];
}

export interface Laboratoire extends Hospital {}
