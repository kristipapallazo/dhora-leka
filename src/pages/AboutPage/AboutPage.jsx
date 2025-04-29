"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const photos = [
    "/images/school1.jpg",
    "/images/school2.jpg",
    "/images/school3.jpg",
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#f69c84]/90 to-[#e6c693]/90 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#f69c84] opacity-10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-[#e6c693] opacity-10 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Rreth Nesh
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Shkolla Shqiptare është themeluar për të ofruar edukim të nivelit të
            lartë, duke ndërthurur traditën me risitë moderne të arsimit.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-16 mb-28">
          {[
            {
              title: "Misioni ynë",
              content:
                "Edukimi gjithëpërfshirës, promovimi i mendimit kritik, dhe ruajtja e vlerave tona kulturore.",
              items: [
                "Nxitje për kreativitet dhe inovacion",
                "Mbështetje për zhvillimin personal të çdo nxënësi",
                "Angazhim në komunitet dhe shoqëri",
              ],
            },
            {
              title: "Vizoni ynë",
              content:
                "Të jemi një institucion lider në Shqipëri, i njohur për standarde të larta akademike dhe formimin e liderëve të së nesërmes.",
              items: [
                "Ofrim i edukimit bashkëkohor dhe ndërkombëtar",
                "Ndërtim i një komuniteti bashkëpunues dhe mbështetës",
                "Rritje e përgjegjësisë qytetare dhe ndërgjegjësimit global",
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {section.title}
              </h3>
              <p className="text-gray-100 mb-6 text-lg leading-relaxed">
                {section.content}
              </p>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#f69c84] mr-2 mt-1">•</span>
                    <span className="text-gray-100">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vlerat tona
            </h3>
            <div className="w-16 h-1 bg-[#f69c84] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Respekti",
                desc: "Çdo individ vlerësohet dhe respektohet si pjesë e komunitetit.",
                icon: "👐",
              },
              {
                title: "Integriteti",
                desc: "Veprojmë me ndershmëri, përgjegjësi dhe transparencë.",
                icon: "🛡️",
              },
              {
                title: "Inovacioni",
                desc: "Nxisim ide të reja për të ndihmuar përparimin personal dhe shoqëror.",
                icon: "💡",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl md:text-2xl font-bold text-[#49416d] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Galeria
            </h3>
            <div className="w-16 h-1 bg-[#f69c84] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {photos.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-64 md:h-80 overflow-hidden group">
                  <img
                    src={src}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Foto {index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
