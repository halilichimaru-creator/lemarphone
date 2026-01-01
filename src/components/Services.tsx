import { motion } from 'framer-motion';
import { services } from '../data/menu';
import type { Service } from '../data/menu';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4 animate-blur-in">
                        Nos services
                    </h2>
                    <p className="text-gray-400 text-lg max-w-md mx-auto animate-blur-in" style={{ animationDelay: '0.2s' }}>
                        Tout pour votre mobile, dans un seul endroit.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service: Service, index: number) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="card p-8 group cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <service.icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
