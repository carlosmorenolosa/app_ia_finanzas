import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { ScrollArea } from './components/ui/scroll-area';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Mensajes de ejemplo: solo un mensaje inicial
const sampleMessages = [
  {
    sender: 'PymerIA',
    content: '👋 ¡Hola! Soy PymerIA, el asistente inteligente de IA4PYMES. ¿Quieres saber sobre nuestros servicios? ¡Pregúntame! 🤖'
  }
];

// URL de la API Gateway y API Key
const LAMBDA_URL = "https://go066mldzb.execute-api.eu-west-1.amazonaws.com/prod";
const API_KEY = "jR72QE1yTW2gMIvIy5IZt5YJsVaN9Puz7X7PxcaF";

export default function InterfazGraficaPymerIA() {
  const [messages, setMessages] = useState(sampleMessages);
  const [currentInput, setCurrentInput] = useState('');

  // Función para enviar mensaje del usuario y obtener respuesta de Lambda
  const handleSendMessage = async () => {
    if (!currentInput.trim()) return;

    // Añade el mensaje del usuario al historial
    const newMessage = {
      sender: 'User',
      content: currentInput.trim(),
    };

    // Limitar el historial a los últimos 20 mensajes
    const updatedMessages = [...messages, newMessage].slice(-20);
    setMessages(updatedMessages);
    setCurrentInput('');

    try {
      // Solicitud a la Lambda con la API Key
      const response = await fetch(LAMBDA_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({ conversation: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error('Error al conectar con el servidor');
      }

      const data = await response.json(); // Respuesta de la Lambda

      // Añade la respuesta de la Lambda al historial
      const pymerIAResponse = {
        sender: 'PymerIA',
        content: data.response || 'No tengo una respuesta para eso en este momento.',
      };
      setMessages((prev) => [...prev, pymerIAResponse]);
    } catch (error) {
      // Manejo de errores
      const errorMessage = {
        sender: 'PymerIA',
        content: 'Hubo un problema al procesar tu solicitud. Inténtalo de nuevo más tarde.',
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Error al llamar a la Lambda:', error);
    }
  };

  // Enviar mensaje al presionar Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0f0f0f] text-white">
      {/* Encabezado */}
      <header className="flex items-center justify-center bg-[#1a1a1a] py-3 border-b border-[#333]">
        <h1 className="font-semibold text-lg text-indigo-400">PymerIA</h1>
      </header>

      {/* Zona de mensajes */}
      <ScrollArea className="flex-1 p-4 flex flex-col space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-[#2a2a2a]">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === 'User' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`my-2 px-4 py-2 rounded-2xl break-words shadow-md w-fit max-w-[80%] ${
              msg.sender === 'User'
                ? 'bg-indigo-600 self-end ml-auto text-right text-white'
                : 'bg-[#1e1e1e] self-start text-left text-gray-100'
            }`}
            
          >
            {/* Mostrar solo nombre si NO es el usuario */}
            {msg.sender !== 'User' && (
              <p className="text-sm font-semibold mb-1 text-indigo-300">{msg.sender}</p>
            )}
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="prose prose-sm max-w-none text-white prose-strong:text-indigo-300"
            >
              {msg.content}
            </ReactMarkdown>
          </motion.div>
        ))}
      </ScrollArea>

      {/* Barra de entrada */}
      <div className="w-full bg-[#1a1a1a] border-t border-[#333] px-3 py-1 pb-4">
        <div className="flex items-center gap-2">
          <Input
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            className="flex-1 h-8 bg-[#121212] text-white border border-[#444] rounded-md px-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <Button
            onClick={handleSendMessage}
            className="h-8 px-3 text-sm bg-indigo-600 text-white hover:bg-indigo-500 rounded-md"
          >
            Enviar
          </Button>
        </div>
      </div>


    </div>

  );
}
