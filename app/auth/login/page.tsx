'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const hardcodedUser = {
  email: 'matumaidana26@gmail.com',
  password: 'root',
  name: 'Matías Maidana',
};

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      // Simula autenticación exitosa
      localStorage.setItem('user', JSON.stringify(hardcodedUser));
      router.push('/dashboard');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-4">Inicia Sesión</h1>
        <p className="text-gray-400 text-center mb-6">
          Accede a FinTrack y comienza a gestionar tus finanzas.
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
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
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mt-6"
        >
          Iniciar Sesión
        </button>
        <p className="text-center text-gray-400 mt-4">
          ¿No tienes una cuenta?{' '}
          <a href="/auth/register" className="text-green-400 hover:text-green-500">
            Regístrate aquí
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

export default AuthPage;
