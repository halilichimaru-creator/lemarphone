import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
    const contactMethods = [
        {
            icon: Phone,
            label: 'Téléphone',
            value: '+33 3 69 07 30 77',
            href: 'tel:+33369073077',
            color: 'bg-primary/10 text-primary',
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '+33 7 66 05 55 55',
            href: 'https://wa.me/33766055555',
            color: 'bg-accent-green/10 text-accent-green',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'lemarphone68@gmail.com',
            href: 'mailto:lemarphone68@gmail.com',
            color: 'bg-accent-purple/10 text-accent-purple',
        },
        {
            icon: MapPin,
            label: 'Adresse',
            value: '18 place de la réunion, Mulhouse',
            href: 'https://maps.google.com/?q=18+place+de+la+reunion+68100+Mulhouse',
            color: 'bg-accent-orange/10 text-accent-orange',
        },
    ];

    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4 animate-blur-in">
                            Contactez-nous
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 animate-blur-in" style={{ animationDelay: '0.2s' }}>
                            Une question ? Passez nous voir ou contactez-nous directement.
                        </p>

                        <div className="space-y-4">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.label}
                                    href={method.href}
                                    target={method.href.startsWith('http') ? '_blank' : undefined}
                                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 8 }}
                                    className="flex items-center gap-4 p-4 glass-premium hover:bg-white/5 rounded-2xl transition-colors group"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.color}`}>
                                        <method.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                                            {method.label}
                                        </div>
                                        <div className="text-white font-medium">
                                            {method.value}
                                        </div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Hours */}
                        <div className="mt-10 p-6 glass-premium rounded-2xl">
                            <h4 className="font-semibold text-white mb-3">Horaires d'ouverture</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>Lundi - Samedi</span>
                                    <span className="font-medium text-white">09:30 - 19:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Dimanche</span>
                                    <span className="text-accent-pink font-medium">Fermé</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-[500px] rounded-3xl overflow-hidden shadow-card"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.2585253818617!2d7.336442676839352!3d47.74661857850228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919bc0f607412b%3A0xc3f58a361c77dd0c!2s18%20Pl.%20de%20la%20R%C3%A9union%2C%2068100%20Mulhouse!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
