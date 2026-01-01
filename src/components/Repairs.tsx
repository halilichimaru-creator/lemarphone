import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { repairServices } from '../data/menu';

const Repairs = () => {
    return (
        <section id="repairs" className="py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Réparation
                        <span className="text-gradient"> express</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                        Écran brisé ? Batterie fatiguée ? Nos experts réparent votre mobile en moins de 30 minutes.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {repairServices.map((service, index) => (
                            <motion.div
                                key={service}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-2xl"
                            >
                                <div className="w-8 h-8 bg-accent-green/10 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-accent-green" />
                                </div>
                                <span className="text-sm text-gray-400 text-center">{service}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Repairs;
