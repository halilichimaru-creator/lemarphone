import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-4">Lemarphone</h3>
                        <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
                            Votre expert en téléphonie mobile à Mulhouse. Achat, vente, réparation et transfert d'argent.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-glow-blue transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-primary hover:shadow-glow-blue transition-all">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Liens rapides</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#repairs" className="text-gray-400 hover:text-primary transition-colors">Réparations</a></li>
                            <li><a href="#products" className="text-gray-400 hover:text-primary transition-colors">Téléphones</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <div className="space-y-3 text-sm">
                            <a href="tel:+33369073077" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                                <Phone className="w-4 h-4" />
                                +33 3 69 07 30 77
                            </a>
                            <a href="mailto:lemarphone68@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                                <Mail className="w-4 h-4" />
                                lemarphone68@gmail.com
                            </a>
                            <div className="flex items-start gap-2 text-gray-400">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>18 place de la réunion<br />68100 Mulhouse</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Lemarphone. Tous droits réservés.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
                        <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
