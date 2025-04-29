import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden px-6">
      {/* Gradient Background with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--main)] via-[var(--sec)] to-[var(--brown)]"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientWave 12s ease infinite",
        }}
      />

      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/path/to/subtle-pattern.png')] bg-cover bg-center mix-blend-overlay"
      />

      {/* Content container */}
      <div className="relative z-10 text-center max-w-6xl mx-auto py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl-brown md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md"
        >
          <span className="block text-[var(--brown)]">E ardhmja fillon</span>
          <span className="block text-[var(--brown)]">këtu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Edukojmë brezat e rinj me përkushtim, dijeni dhe dashuri për kulturën
          shqiptare.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            href="#about"
            className="inline-block bg-[var(--brown)] text-white font-semibold  rounded-full text-lg shadow-lg transition-all duration-300"
          >
            Mëso më shumë
          </motion.a>
        </motion.div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes gradientWave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
