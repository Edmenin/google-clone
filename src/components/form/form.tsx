import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../buttons/buttons';
import { Header } from '../header/header';

export const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.nome,
          body: formData.mensagem,
          userId: 1,
          email: formData.email
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

      const data = await response.json();
      console.log('Resposta da API:', data);
      alert('Formulário enviado com sucesso!');
      setFormData({ nome: '', email: '', mensagem: '' });
    } catch (err) {
      setError('Ocorreu um erro ao enviar o formulário. Tente novamente.');
      console.error('Erro:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col items-center justify-center pt-20">
        <div className="w-full max-w-md px-8 py-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium text-gray-900">
              Formulário do Google
            </h2>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.nome}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.mensagem}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button text="Voltar" onClick={handleVoltar} />
              <Button 
                text={isLoading ? "Enviando..." : "Enviar"} 
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}; 