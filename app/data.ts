import { Hospital, Pharmacie } from "~/types";
const IMAGE_PATH = "/image";

export const hospitals: Hospital[] = [
  {
    email: "contact@hrg.cm",
    name: "Hopital général de Garoua",
    telephone: "+237 222 271 261",
    doctors: ["Dr Babong Arnold", "Dr Danmo Jean"],
    services: ["Urgence", "Radiologie", "Pharmacie", "Laboratoire", "Gynécologie", "Cardiologie", "Rhumatologie", "Pédiatrie"],
    image: "",
    position: [9.303827, 13.388355],
  },
  {
    email: "contact@hrg.cm",
    name: "Centre Médical de Lainde, Garoua",
    telephone: "+237 229 271 261",
    doctors: ["Dr Djekore Bienvenue"],
    services: ["Pharmacie", "Laboratoire", "Rhumatologie", "Pédiatrie", "Gynécologie"],
    image: "",
  },
  {
    email: "contact@hrg.cm",
    name: "Hopital régionale de Garoua",
    telephone: "+237 224 271 261",
    doctors: ["Dr Vincent Pestalozie"],
    services: ["Urgence", "Radiologie", "Pharmacie", "Laboratoire", "Cardiologie", "Rhumatologie", "Pédiatrie", "Gynécologie"],
    image: "",
  },
];

export const pharmacy: Pharmacie[] = [
  {
    telephone: "+237 220 176 870",
    name: "Pharmacie la gràce de Dang",
    email: "la_grace@pharmacie.cm",
    availableDrugs: ["Paracetamol 500 mg", "Mebendazol", "Albendazole 500mg"],
    image: "",
  }
];
