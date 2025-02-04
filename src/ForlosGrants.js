import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input'; // Cambiada de alias a relativa
import { ScrollArea } from './components/ui/scroll-area'; // Cambiada de alias a relativa


// Mensajes de ejemplo: solo un mensaje inicial
const sampleMessages = [
  {
    sender: 'PymerIA',
    content: '¡Hola! Soy PymerIA, el asistente inteligente de esta empresa. ¿Tienes alguna duda con nuestros servicios? ¡Cuéntame!'
  }
];

export default function InterfazGraficaPymerIA() {
  const [messages, setMessages] = useState(sampleMessages);
  const [currentInput, setCurrentInput] = useState('');

  // Función para enviar mensaje del usuario
  const handleSendMessage = () => {
    if (!currentInput.trim()) return;
    const newMessage = {
      sender: 'User',
      content: currentInput.trim()
    };

    setMessages((prev) => [...prev, newMessage]);
    setCurrentInput('');

    // Simular respuesta de PymerIA
    setTimeout(() => {
      const pymerIAResponse = {
        sender: 'PymerIA',
        content: `Aquí está tu respuesta sobre "${newMessage.content}".`
      };
      setMessages((prev) => [...prev, pymerIAResponse]);
    }, 1000);
  };

  // Enviar mensaje al presionar Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Barra superior mínima */}
      <header className="flex items-center justify-center bg-white py-3 border-b">
        <h1 className="font-semibold text-lg">PymerIA</h1>
      </header>

      {/* Zona de mensajes */}
      <ScrollArea className="flex-1 p-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === 'User' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`my-2 p-3 rounded-lg max-w-3xl break-words shadow-sm ${
              msg.sender === 'User'
                ? 'bg-blue-100 self-end ml-auto text-right'
                : 'bg-gray-200 self-start'
            }`}
          >
            <p className="text-sm font-semibold mb-1">{msg.sender}</p>
            <p className="text-sm leading-normal">{msg.content}</p>
          </motion.div>
        ))}
      </ScrollArea>

      {/* Barra de entrada de mensajes */}
      <div className="w-full bg-white border-t p-4">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-2 flex">
            <Input
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage} variant="default" className="ml-2">
              Enviar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}