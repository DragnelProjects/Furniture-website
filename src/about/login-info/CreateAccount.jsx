import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function CreateAccount() {
  const navigate = useNavigate();
  const { createAccount } = useAuth();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password || !confirmPassword || !profileImage) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = createAccount({
        username,
        email,
        password,
        profileImage
      });

      if (result.success) {
        setSuccess('Account created successfully! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(result.message);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pt-20 pb-10'>
      <div className='w-full max-w-md'>
        <div className='bg-gray-800 rounded-lg shadow-2xl p-8'>
          <h1 className='text-3xl font-bold text-center text-[#ebebeb] mb-8'>Create Account</h1>

          {error && (
            <div className='mb-4 p-4 bg-red-500 text-white rounded-lg text-sm'>
              {error}
            </div>
          )}

          {success && (
            <div className='mb-4 p-4 bg-green-500 text-white rounded-lg text-sm'>
              {success}
            </div>
          )}

          <form onSubmit={handleCreateAccount} className='space-y-5'>
            <div>
              <label className='block text-[#ebebeb] mb-2 font-medium'>Username</label>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Choose a username'
                className='w-full px-4 py-2 bg-gray-700 text-[#ebebeb] rounded-lg border border-gray-600 focus:border-[#D47968] focus:outline-none transition-colors text-sm'
              />
            </div>

            <div>
              <label className='block text-[#ebebeb] mb-2 font-medium'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='w-full px-4 py-2 bg-gray-700 text-[#ebebeb] rounded-lg border border-gray-600 focus:border-[#D47968] focus:outline-none transition-colors text-sm'
              />
            </div>

            <div>
              <label className='block text-[#ebebeb] mb-2 font-medium'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Create a password (min 6 characters)'
                className='w-full px-4 py-2 bg-gray-700 text-[#ebebeb] rounded-lg border border-gray-600 focus:border-[#D47968] focus:outline-none transition-colors text-sm'
              />
            </div>

            <div>
              <label className='block text-[#ebebeb] mb-2 font-medium'>Confirm Password</label>
              <input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirm your password'
                className='w-full px-4 py-2 bg-gray-700 text-[#ebebeb] rounded-lg border border-gray-600 focus:border-[#D47968] focus:outline-none transition-colors text-sm'
              />
            </div>

            <div>
              <label className='block text-[#ebebeb] mb-2 font-medium'>Profile Image</label>
              <div className='flex flex-col gap-3'>
                {imagePreview && (
                  <div className='flex justify-center'>
                    <img
                      src={imagePreview}
                      alt='Profile preview'
                      className='w-20 h-20 rounded-full object-cover border-2 border-[#D47968]'
                    />
                  </div>
                )}
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='px-4 py-2 bg-gray-700 text-[#ebebeb] rounded-lg border border-gray-600 focus:border-[#D47968] focus:outline-none transition-colors text-sm file:text-[#D47968] file:bg-gray-600 file:border-0 file:px-3 file:py-1 file:rounded'
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full bg-[#D47968] text-white py-3 rounded-lg font-semibold hover:bg-[#c26857] transition-colors duration-200 disabled:opacity-50 mt-6'
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-[#ebebeb] mb-3'>Already have an account?</p>
            <button
              onClick={() => navigate('/login')}
              className='w-full bg-gray-700 text-[#D47968] py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200 border border-[#D47968]'
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
