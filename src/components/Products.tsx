import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/menu';
import ProductModal from './ProductModal';
import { useIsMobile } from '../hooks/useIsMobile';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const isMobile = useIsMobile();

    return (
        <section id="products" className="py-24 bg-gray-50 texture-noise">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
                >
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4 animate-blur-in">
                            Nos téléphones
                        </h2>
                        <p className="text-gray-400 text-lg animate-blur-in" style={{ animationDelay: '0.2s' }}>
                            Neufs et reconditionnés, garantis.
                        </p>
                    </div>
                    <a href="#contact" className="text-white font-medium hover:underline text-sm opacity-80 hover:opacity-100 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Voir tout le catalogue →
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => {
                        const motionProps = isMobile ? {} : {
                            initial: { opacity: 0, y: 40 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true },
                            transition: { delay: index * 0.1, duration: 0.6 }
                        };
                        
                        return (
                        <motion.div
                            key={product.id}
                            {...motionProps}
                            className="group"
                        >
                            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-white/5">
                                <div className="relative h-72 overflow-hidden bg-gray-200 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={`w-full h-full ${!isMobile ? 'transition-transform duration-700 group-hover:scale-105' : ''} ${product.id === 1
                                            ? 'object-cover object-center scale-100'
                                            : 'object-cover object-center'
                                            }`}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="glass-premium text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {product.name}
                                    </h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-white">
                                            {product.price}
                                        </span>
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="btn-secondary text-sm py-2 px-4"
                                        >
                                            Détails
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        );
                    })}
                </div>
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
};

export default Products;
