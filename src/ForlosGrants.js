import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Calculator, ClipboardEdit, Bell } from "lucide-react";

export default function ForlosGrants() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b shadow-sm bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Forlos Grants</div>
          {/* Menú básico */}
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-blue-500 transition">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-blue-500 transition">
                  Planes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-blue-500 transition">
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
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-blue-50 to-blue-100 py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
            Encuentra Subvenciones y Ayudas para tu Empresa
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Encuentra la ayuda que mejor se adapta a tu empresa gracias a nuestro software de IA. Ahorra tiempo y costes en la búsqueda y gestión de subvenciones.
          </p>
          <button className="px-6 py-3 text-lg rounded-2xl shadow bg-blue-500 text-white hover:bg-blue-600 transition">
            Empieza Ahora
          </button>
        </div>
      </motion.section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Funcionalidades Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Chatbot Asesor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="shadow-lg rounded-2xl p-6 flex flex-col items-start">
                <Megaphone className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Chatbot Asesor de Subvenciones</h3>
                <p className="text-gray-600 mb-4">
                  Responde preguntas sobre actividad y situación de la empresa, y sugiere ayudas disponibles.
                </p>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
                  Probar Chatbot
                </button>
              </div>
            </motion.div>

            {/* 2. Calculadora de Subvenciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="shadow-lg rounded-2xl p-6 flex flex-col items-start">
                <Calculator className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Calculadora de Subvenciones</h3>
                <p className="text-gray-600 mb-4">
                  Estima la cuantía de las ayudas y beneficios fiscales según la normativa vigente.
                </p>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
                  Calcular Ahora
                </button>
              </div>
            </motion.div>

            {/* 3. Generación Automática de Documentos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="shadow-lg rounded-2xl p-6 flex flex-col items-start">
                <ClipboardEdit className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Generación de Documentos</h3>
                <p className="text-gray-600 mb-4">
                  Automatiza formularios y genera informes personalizados para tus solicitudes.
                </p>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
                  Generar Documentos
                </button>
              </div>
            </motion.div>

            {/* 4. Alertas y Seguimiento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="shadow-lg rounded-2xl p-6 flex flex-col items-start">
                <Bell className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Alertas y Seguimiento</h3>
                <p className="text-gray-600 mb-4">
                  Recibe notificaciones y seguimiento de nuevas ayudas disponibles para tu empresa.
                </p>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
                  Activar Alertas
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Planes */}
      <section id="planes" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Planes y Precios</h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-8">
            Escoge el plan que mejor se ajuste a tus necesidades. Sin costes ocultos, sin complicaciones.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="border rounded-2xl p-6 shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2">Básico</h3>
              <p className="text-gray-500 mb-4">Para pymes y autónomos</p>
              <div className="text-3xl font-bold mb-4">Gratis</div>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li>Chatbot asesor limitado</li>
                <li>Calculadora básica</li>
                <li>Alertas mensuales</li>
              </ul>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 transition">
                Empezar
              </button>
            </div>

            {/* Plan Pro */}
            <div className="border rounded-2xl p-6 shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-gray-500 mb-4">Para empresas en crecimiento</p>
              <div className="text-3xl font-bold mb-4">49€/mes</div>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li>Chatbot asesor avanzado</li>
                <li>Calculadora fiscal completa</li>
                <li>Alertas semanales</li>
                <li>Generación de documentos básica</li>
              </ul>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 transition">
                Contratar
              </button>
            </div>

            {/* Plan Premium */}
            <div className="border rounded-2xl p-6 shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-500 mb-4">Para empresas consolidadas</p>
              <div className="text-3xl font-bold mb-4">99€/mes</div>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li>Chatbot asesor premium (IA avanzada)</li>
                <li>Calculadora con simulaciones complejas</li>
                <li>Alertas diarias</li>
                <li>Generación completa de documentos</li>
                <li>Soporte prioritario</li>
              </ul>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600 transition">
                Contratar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para impulsar tu empresa?</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Regístrate y descubre las oportunidades de financiación y ayudas en un solo lugar. Prueba nuestro plan gratuito y luego da el salto a Pro o Premium.
          </p>
          <button className="px-6 py-3 text-lg rounded-2xl shadow bg-blue-500 text-white hover:bg-blue-600 transition">
            Regístrate Gratis
          </button>
        </div>
      </section>

      {/* Footer con formulario de contacto */}
      <footer id="contacto" className="mt-auto py-10 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Información de la empresa */}
            <div>
              <h3 className="text-xl font-bold mb-2">Forlos Grants</h3>
              <p className="text-gray-600 mb-4">
                Haz crecer tu negocio encontrando subvenciones y ayudas de forma rápida y sencilla.
              </p>
              <p className="text-gray-500 text-sm">© 2025 Forlos Grants. Todos los derechos reservados.</p>
            </div>
            {/* Formulario de contacto simple */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contáctanos</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
