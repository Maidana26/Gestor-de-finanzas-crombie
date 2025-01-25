'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor, completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Simula el registro exitoso
    localStorage.setItem(
      'user',
      JSON.stringify({ name, email, password })
    );
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-4">Regístrate</h1>
        <p className="text-gray-400 text-center mb-6">
          Crea tu cuenta para comenzar a usar FinTrack.
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold mb-1">Nombre completo</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 font-semibold mb-1">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="tuemail@ejemplo.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 font-semibold mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 font-semibold mb-1">Confirmar contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        <button
          onClick={handleRegister}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mt-6"
        >
          Registrarse
        </button>
        <p className="text-center text-gray-400 mt-4">
          ¿Ya tienes una cuenta?{' '}
          <a href="/auth/login" className="text-green-400 hover:text-green-500">
            Inicia sesión aquí
          </a>
          {' o '}
          <a href="/" className="text-green-400 hover:text-green-500">
            Volver al inicio
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
