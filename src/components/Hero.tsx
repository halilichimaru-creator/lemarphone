import { motion } from 'framer-motion';
import { Smartphone, Shield, Zap } from 'lucide-react';
import Prism from './Prism';
import { useIsMobile } from '../hooks/useIsMobile';

const Hero = () => {
    const isMobile = useIsMobile();
    
    return (
        <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-black">
            {/* Prism Background Overlay - Désactivé sur mobile pour les performances */}
            {!isMobile && (
                <div className="absolute inset-0 z-0 opacity-70">
                    <Prism
                        animationType="rotate"
                        timeScale={0.5}
                        height={3.5}
                        baseWidth={5.5}
                        scale={5.0}
                        hueShift={0}
                        colorFrequency={1}
                        noise={0}
                        glow={1}
                    />
                </div>
            )}

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-green text-xs font-medium mb-6 animate-fade-in-up shine">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
                            </span>
                            Ouvert aujourd'hui jusqu'à 19h
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
                            <span className="text-reveal-container">
                                <span className="animate-text-reveal">Votre expert en</span>
                            </span>
                            <span className="text-reveal-container">
                                <span className="animate-text-reveal" style={{ animationDelay: '0.2s' }}>
                                    téléphonie mobile
                                </span>
                            </span>
                        </h1>

                        <p className="text-lg text-white mb-10 max-w-md leading-relaxed animate-blur-in" style={{ animationDelay: '0.5s' }}>
                            Achat, vente et réparation express. Service premium au cœur de Mulhouse.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <button className="btn-primary shine pop">
                                Découvrir nos téléphones
                            </button>
                            <button className="btn-secondary pop">
                                Nos services
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                            <div className="flex flex-col gap-2 group pop">
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shadow-glow-blue icon-bounce">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-medium text-gray-400">Toutes marques</span>
                            </div>
                            <div className="flex flex-col gap-2 group pop">
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shadow-glow-blue icon-bounce">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-medium text-gray-400">Toutes marques</span>
                            </div>
                            <div className="flex flex-col gap-2 group pop">
                                <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green shadow-glow-green icon-bounce">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-medium text-gray-400">Garantie incluse</span>
                            </div>
                            <div className="flex flex-col gap-2 group pop">
                                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple shadow-glow-purple icon-bounce">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-medium text-gray-400">Réparation express</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 h-[600px] rounded-[2.5rem] overflow-hidden border-[8px] border-white/5 shadow-2xl tilt-card shine group">
                            <img
                                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=800"
                                alt="Lemarphone"
                                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-[2s]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
