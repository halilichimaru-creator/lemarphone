import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Shield, Zap, MessageCircle } from 'lucide-react';

interface ProductModalProps {
    product: any;
    isOpen: boolean;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative h-80 md:h-auto bg-gray-200 p-12 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="glass-pure px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20">
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.name}</h2>
                                <p className="text-2xl font-bold text-white mb-6">{product.price}</p>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Garantie 6 mois</h4>
                                            <p className="text-gray-400 text-sm">Réparation ou échange standard incluse.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
                                            <Smartphone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">État Irréprochable</h4>
                                            <p className="text-gray-400 text-sm">Testé sur plus de 40 points de contrôle.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Batterie neuve</h4>
                                            <p className="text-gray-400 text-sm">Capacité maximum garantie supérieure à 85%.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={`https://wa.me/33766055555?text=Bonjour, je suis intéressé par le ${product.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary flex items-center justify-center gap-2 group"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Commander sur WhatsApp
                                    </a>
                                    <button className="btn-secondary">
                                        Fiche technique
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
