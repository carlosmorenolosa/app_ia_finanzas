import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Calculator, ClipboardEdit, Bell } from "lucide-react";

// ForlosGrants con diseño minimalista, uso de espacios en blanco, paleta más vibrante y tipografías modernas.
// Se asume TailwindCSS y Framer Motion. Se pueden añadir imágenes / ilustraciones para mayor impacto.
// Pequeñas microinteracciones agregadas con Framer Motion.

export default function ForlosGrantsEnhanced2() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Forlos Grants
          </div>
          <nav>
            <ul className="flex gap-6 text-base md:text-lg">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-blue-600 transition">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-blue-600 transition">
                  Planes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-blue-600 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-blue-50 to-white py-20 md:py-32"
      >
        {/* Se podría agregar una imagen o ilustración aquí */}
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
            Encuentra Subvenciones y Ayudas para tu Empresa
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Simplifica la búsqueda y gestión de subvenciones con nuestra plataforma de IA, ahorrando tiempo y costes
            mientras aprovechas las mejores oportunidades de financiación.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg rounded-full shadow bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Empieza Ahora
          </motion.button>
        </div>
      </motion.section>

      {/* Funcionalidades */}
      <section
        id="funcionalidades"
        className="py-20 md:py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 tracking-tight"
          >
            Funcionalidades Principales
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* 1. Chatbot Asesor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start text-left bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <Megaphone className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Chatbot Asesor</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Haz preguntas sobre la actividad y situación de la empresa; la IA te sugiere ayudas disponibles.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                Probar Chatbot
              </motion.button>
            </motion.div>

            {/* 2. Calculadora de Subvenciones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-start text-left bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <Calculator className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Calculadora de Subvenciones</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Calcula la cuantía de las ayudas y beneficios fiscales que podrías recibir, acorde a la normativa vigente.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                Calcular Ahora
              </motion.button>
            </motion.div>

            {/* 3. Generación Automática de Documentos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start text-left bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <ClipboardEdit className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Generación de Documentos</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automatiza formularios y genera informes personalizados para agilizar las solicitudes.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                Generar Documentos
              </motion.button>
            </motion.div>

            {/* 4. Alertas y Seguimiento */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-start text-left bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <Bell className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Alertas y Seguimiento</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Recibe notificaciones y lleva un seguimiento del estado de cada solicitud de ayuda.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                Activar Alertas
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Planes */}
      <section id="planes" className="py-20 md:py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900"
          >
            Planes y Precios
          </motion.h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen asistencia básica y actualizaciones.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-blue-100 rounded-2xl p-6 shadow-sm bg-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Básico</h3>
                <p className="text-gray-500 mb-4">Para pymes y autónomos</p>
                <div className="text-3xl font-bold mb-4">Gratis</div>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>Chatbot asesor limitado</li>
                  <li>Calculadora básica</li>
                  <li>Alertas mensuales</li>
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Empezar
              </motion.button>
            </motion.div>

            {/* Plan Pro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-blue-100 rounded-2xl p-6 shadow-sm bg-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Pro</h3>
                <p className="text-gray-500 mb-4">Para empresas en crecimiento</p>
                <div className="text-3xl font-bold mb-4">49€/mes</div>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>Chatbot asesor avanzado</li>
                  <li>Calculadora fiscal completa</li>
                  <li>Alertas semanales</li>
                  <li>Generación de documentos básica</li>
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Contratar
              </motion.button>
            </motion.div>

            {/* Plan Premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-blue-100 rounded-2xl p-6 shadow-sm bg-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Premium</h3>
                <p className="text-gray-500 mb-4">Para empresas consolidadas</p>
                <div className="text-3xl font-bold mb-4">99€/mes</div>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>Chatbot asesor premium (IA avanzada)</li>
                  <li>Calculadora con simulaciones complejas</li>
                  <li>Alertas diarias</li>
                  <li>Generación completa de documentos</li>
                  <li>Soporte prioritario</li>
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Contratar
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
          >
            ¿Listo para impulsar tu empresa?
          </motion.h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed">
            Regístrate ahora y descubre las oportunidades de financiación y ayudas en un solo lugar. Empieza con nuestro plan gratuito y evoluciona a Pro o Premium cuando lo necesites.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg rounded-full shadow bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Regístrate Gratis
          </motion.button>
        </div>
      </section>

      {/* Footer con formulario de contacto */}
      <footer id="contacto" className="mt-auto py-10 bg-blue-50 border-t border-blue-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Información de la empresa */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Forlos Grants</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Haz crecer tu negocio encontrando subvenciones y ayudas de forma rápida y sencilla.
              </p>
              <p className="text-gray-500 text-sm">© 2025 Forlos Grants. Todos los derechos reservados.</p>
            </div>
            {/* Formulario de contacto simple */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-900">Contáctanos</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full border border-gray-300 rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                >
                  Enviar
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}