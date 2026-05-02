import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = login(username, password);
      if (result.success) {
        navigate('/');
      } else {
        setError(result.message);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pt-20'>
      <div className='w-full max-w-md'>
        <div className='bg-gray-800 rounded-lg shadow-2xl p-8'>
          <h1 className='text-3xl font-bold text-center text-[#ebebeb] mb-8'>Login</h1>

          {error && (
            <div className='mb-4 p-4 bg-red-500 text-white rounded-lg text-sm'>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className='space-y-6'>
            <div>
              <label className='block text-[#ebebeb] mb-2 font-medium'>Username</label>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter your username'
                className='w-full px-4 py-3 bg-gray-700 text-[#ebebeb] rounded-lg border border-gray-600 focus:border-[#D47968] focus:outline-none transition-colors'
              />
            </div>

            <div>
              <label className='block text-[#ebebeb] mb-2 font-medium'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                className='w-full px-4 py-3 bg-gray-700 text-[#ebebeb] rounded-lg border border-gray-600 focus:border-[#D47968] focus:outline-none transition-colors'
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full bg-[#D47968] text-white py-3 rounded-lg font-semibold hover:bg-[#c26857] transition-colors duration-200 disabled:opacity-50'
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className='mt-8 text-center'>
            <p className='text-[#ebebeb] mb-4'>Don't have an account?</p>
            <button
              onClick={() => navigate('/create-account')}
              className='w-full bg-gray-700 text-[#D47968] py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200 border border-[#D47968]'
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;