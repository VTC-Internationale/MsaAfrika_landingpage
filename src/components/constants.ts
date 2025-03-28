// import { title } from "process";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import recentImg1 from "../assets/recent1.png";
import recentImg2 from "../assets/recent2.png";
import noteImg1 from "../assets/note1.png";
import noteImg2 from "../assets/note2.png";
import starsImg from "../assets/stars.png";

export const socials = [
    {
        icon: (facebook),
    },
    {
        icon: (instagram),
    },
    {
        icon: (linkedin),
    }
]


export const navlinks = [
    {
        name: "Accueil",
        href: "/",
    },
    {
        name: "A Propos",
        href: "/",
    },
    {
        name: "Nos Services",
        href: "/",
    },
    {
        name: "Les Prestataires",
        href: "/",
    },
    {
        name: "Contacts",
        href: "/",
    }
]

export const recent = [
    {
        img: (recentImg1),
        title: 'Afrika Garage'
    },
    {
        img: (recentImg2),
        title: 'Presta Garage'
    },
]

export const note = [
    {
        img: (noteImg1),
        title: 'Ela Garage',
        stars: (starsImg)
    },
    {
        img: (noteImg2),
        title: 'Impact Garage',
        stars: (starsImg)
    }
]

export const dashboardLinks = [
    {
        name: "Tableau de bord",
        href: "/dashboard",
        icon: "tabler:layout-dashboard-filled"
    },
    {
        name: "Alertes",
        href: "/dashboard",
        icon: "mingcute:notification-fill"
    },
    {
        name: "Historique",
        href: "/dashboard",
        icon: "pajamas:history"
    },
    {
        name: "Compte",
        href: "/dashboard",
        icon: "bxs:contact"
    },
    {
        name: "Paiements",
        href: "/dashboard",
        Icon: "si:credit-card-fill"
    },
    {
        name: "Support",
        href: "/dashboard",
        Icon: "mdi:people"
    },
    {
        name: "Offres",
        href: "/dashboard",
        icon: "fa6-solid:hand-holding-dollar"
    },
    {
        name: "Statistiques",
        href: "/dashboard",
        icon: "prime:chart-bar"
    },
    {
        name: "Tâches",
        href: "/dashboard",
        Icon: "mdi:people"
    },
    {
        name: "Paramètres",
        href: "/dashboard",
        Icon: "mdi:people"
    },
    {
        name: "Déconnexion",
        href: "/dashboard",
        Icon: "mdi:people"
    },
    
]