import { Smartphone, Hammer, BadgeEuro } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
}

export const services = [
    {
        title: 'Achat & Vente',
        description: 'Une large gamme de smartphones neufs et reconditionnés au meilleur prix.',
        icon: Smartphone,
    },
    {
        title: 'Réparation',
        description: 'Écran cassé, batterie fatigue ? Nos experts réparent votre mobile en un temps record.',
        icon: Hammer,
    },
    {
        title: 'Transfert d\'argent',
        description: 'Envoyez de l\'argent à vos proches rapidement et en toute sécurité avec nos partenaires.',
        icon: BadgeEuro,
    },
];

export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        price: '999€',
        image: '/iphone15pro.jpg',
        category: 'iPhone',
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        price: '1149€',
        image: '/samsung-s24.jpg',
        category: 'Samsung',
    },
    {
        id: 3,
        name: 'iPhone 13',
        price: '549€',
        image: '/iphone13.jpg',
        category: 'Reconditionné',
    },
];

export const repairServices = [
    'Remplacement d\'écran',
    'Changement de batterie',
    'Désoxydation',
    'Réparation connecteur de charge',
    'Réparation vitre arrière',
    'Micro & Haut-parleur',
    'Appareil photo',
    'Récupération de données',
];
