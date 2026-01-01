import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'Réparations', href: '#repairs' },
        { name: 'Téléphones', href: '#products' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-500 pt-4 px-4">
            <div className={`max-w-6xl mx-auto px-6 h-16 rounded-3xl transition-all duration-500 lg:px-10 ${scrolled
                ? 'glass-pure shadow-lg translate-y-0'
                : 'glass-pure shadow-sm translate-y-0'
                }`}>
                <div className="flex items-center justify-between h-full">
                    <a href="#" className="flex items-center gap-2 group">
                        <img
                            src="/logo.jpg"
                            alt="Lemarphone"
                            className="w-8 h-8 rounded-lg object-cover"
                        />
                        <span className="text-xl font-bold text-white tracking-tight group-hover:text-gray-300 transition-colors">
                            Lemarphone
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-500 hover:text-gray-700 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-gray-100/60"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <a
                            href="tel:+33369073077"
                            className="btn-primary flex items-center gap-2 text-sm py-2.5 px-5"
                        >
                            <Phone className="w-4 h-4" />
                            Appeler
                        </a>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="glass border-t border-gray-200/50 px-6 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 px-4 py-3 rounded-xl text-base font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:+33369073077"
                        className="flex items-center justify-center gap-2 btn-primary mt-4 w-full"
                    >
                        <Phone className="w-4 h-4" />
                        Appeler maintenant
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
