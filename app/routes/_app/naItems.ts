import {
  ARTICLES,
  CONSULTATION_SURVEILLANCE,
  HOME,
  LABORATOIRE_IMAGERIE,
  PHARMACIE,
  STATISQUES,
} from "~/constants/navigation";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Accueil",
    href: HOME,
  },
  {
    label: "Patient",
    children: [
      {
        label: "Consultation et surveillance",
        subLabel: "Faites vous consulter par un de nos meilleur médécin",
        href: CONSULTATION_SURVEILLANCE,
      },
      {
        label: "Pharmacie",
        subLabel: "Consulter des pharmacies proches de vous pour vos achat",
        href: PHARMACIE,
      },
      {
        label: "Laboratoire et imagerie",
        subLabel: "Trouver les meilleurs laboratoires pour vos examens",
        href: LABORATOIRE_IMAGERIE,
      },
    ],
  },
  {
    label: "Médecin",
    children: [
      {
        label: "Articles",
        subLabel:
          "Vous aurez accès au articles publiés par des médecin d'envergure",
        href: ARTICLES,
      },
      {
        label: "Formation continue",
        subLabel: "Approfondissez vos connaissances sur des pathologies",
        href: PHARMACIE,
      },
    ],
  },
  {
    label: "Statistiques",
    href: STATISQUES,
  },
];
