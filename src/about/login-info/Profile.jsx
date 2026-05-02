import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { RiArrowLeftSLine, RiPencilLine, RiCheckLine, RiCloseLine } from '@remixicon/react';

function Profile() {
  const navigate = useNavigate();
  const { user, updateUser, logout } = useAuth();
  
  const [editingField, setEditingField] = useState(null);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    phoneNumber: user?.phoneNumber || '',
    address: user?.address || '',
    profileImage: user?.profileImage || ''
  });
  const [imagePreview, setImagePreview] = useState(user?.profileImage || '');
  const [message, setMessage] = useState('');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData(prev => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveField = (field) => {
    const newValue = formData[field];
    
    if (field === 'username' && newValue.trim().length < 3) {
      setMessage('Username must be at least 3 characters');
      return;
    }
    
    if (field === 'phoneNumber' && newValue && !/^\d{10,}$/.test(newValue.replace(/\D/g, ''))) {
      setMessage('Please enter a valid phone number');
      return;
    }

    updateUser({ [field]: newValue });
    setMessage(`${field === 'profileImage' ? 'Profile image' : field} updated successfully!`);
    setEditingField(null);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleCancel = () => {
    setFormData({
      username: user.username,
      phoneNumber: user.phoneNumber || '',
      address: user.address || '',
      profileImage: user.profileImage
    });
    setImagePreview(user.profileImage);
    setEditingField(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='w-full min-h-screen bg-linear-to-br from-gray-900 to-gray-800 pt-24 pb-10'>
      <div className='max-w-2xl mx-auto px-4'>
        {/* Header */}
        <div className='flex items-center gap-4 mb-8'>
          <button
            onClick={() => navigate('/')}
            className='p-2 hover:bg-gray-700 rounded-lg transition-colors'
          >
            <RiArrowLeftSLine size={24} color='#D47968' />
          </button>
          <h1 className='text-3xl font-bold text-[#ebebeb]'>My Account</h1>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg text-white text-sm ${
            message.includes('error') ? 'bg-red-500' : 'bg-green-500'
          }`}>
            {message}
          </div>
        )}

        {/* Profile Card */}
        <div className='bg-gray-800 rounded-lg shadow-2xl p-8 mb-6'>
          
          {/* Profile Image Section */}
          <div className='flex flex-col items-center mb-8 pb-8 border-b border-gray-700'>
            <div className='relative'>
              <img
                src={imagePreview}
                alt={user.username}
                className='w-32 h-32 rounded-full object-cover border-4 border-[#D47968]'
              />
              {editingField !== 'profileImage' && (
                <button
                  onClick={() => setEditingField('profileImage')}
                  className='absolute bottom-0 right-0 bg-[#D47968] p-2 rounded-full hover:bg-[#c26857] transition-colors'
                >
                  <RiPencilLine size={16} color='white' />
                </button>
              )}
            </div>

            {editingField === 'profileImage' && (
              <div className='mt-4 w-full'>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='w-full px-4 py-2 bg-gray-700 text-[#ebebeb] rounded-lg border border-gray-600 file:text-[#D47968] file:bg-gray-600 file:border-0 file:px-3 file:py-1 file:rounded text-sm'
                />
                <div className='flex gap-2 mt-3'>
                  <button
                    onClick={() => handleSaveField('profileImage')}
                    className='flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2'
                  >
                    <RiCheckLine size={16} /> Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className='flex-1 bg-gray-700 text-[#ebebeb] py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2'
                  >
                    <RiCloseLine size={16} /> Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Info Grid */}
          <div className='space-y-6'>
            
            {/* Email */}
            <div className='p-4 bg-gray-700 rounded-lg'>
              <label className='block text-[#D47968] text-sm font-medium mb-2'>Email</label>
              <p className='text-[#ebebeb] text-lg'>{user.email}</p>
              <p className='text-gray-400 text-xs mt-1'>Cannot be changed</p>
            </div>

            {/* Username */}
            <div className='p-4 bg-gray-700 rounded-lg'>
              <div className='flex items-center justify-between mb-2'>
                <label className='block text-[#D47968] text-sm font-medium'>Username</label>
                {editingField !== 'username' && (
                  <button
                    onClick={() => setEditingField('username')}
                    className='text-[#D47968] hover:text-[#ebebeb] transition-colors'
                  >
                    <RiPencilLine size={16} />
                  </button>
                )}
              </div>
              
              {editingField === 'username' ? (
                <div>
                  <input
                    type='text'
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                    className='w-full px-4 py-2 bg-gray-600 text-[#ebebeb] rounded-lg border border-[#D47968] focus:outline-none mb-3'
                  />
                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleSaveField('username')}
                      className='flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm'
                    >
                      <RiCheckLine size={16} /> Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className='flex-1 bg-gray-600 text-[#ebebeb] py-2 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center gap-2 text-sm'
                    >
                      <RiCloseLine size={16} /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className='text-[#ebebeb] text-lg'>{formData.username}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className='p-4 bg-gray-700 rounded-lg'>
              <div className='flex items-center justify-between mb-2'>
                <label className='block text-[#D47968] text-sm font-medium'>Phone Number</label>
                {editingField !== 'phoneNumber' && (
                  <button
                    onClick={() => setEditingField('phoneNumber')}
                    className='text-[#D47968] hover:text-[#ebebeb] transition-colors'
                  >
                    <RiPencilLine size={16} />
                  </button>
                )}
              </div>
              
              {editingField === 'phoneNumber' ? (
                <div>
                  <input
                    type='tel'
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    placeholder='+1 (555) 123-4567'
                    className='w-full px-4 py-2 bg-gray-600 text-[#ebebeb] rounded-lg border border-[#D47968] focus:outline-none mb-3'
                  />
                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleSaveField('phoneNumber')}
                      className='flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm'
                    >
                      <RiCheckLine size={16} /> Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className='flex-1 bg-gray-600 text-[#ebebeb] py-2 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center gap-2 text-sm'
                    >
                      <RiCloseLine size={16} /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className='text-[#ebebeb] text-lg'>
                  {formData.phoneNumber || <span className='text-gray-400 italic'>No phone number added</span>}
                </p>
              )}
            </div>

            {/* Address */}
            <div className='p-4 bg-gray-700 rounded-lg'>
              <div className='flex items-center justify-between mb-2'>
                <label className='block text-[#D47968] text-sm font-medium'>Address</label>
                {editingField !== 'address' && (
                  <button
                    onClick={() => setEditingField('address')}
                    className='text-[#D47968] hover:text-[#ebebeb] transition-colors'
                  >
                    <RiPencilLine size={16} />
                  </button>
                )}
              </div>
              
              {editingField === 'address' ? (
                <div>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    placeholder='Enter your full address'
                    className='w-full px-4 py-2 bg-gray-600 text-[#ebebeb] rounded-lg border border-[#D47968] focus:outline-none mb-3 resize-none'
                    rows={3}
                  />
                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleSaveField('address')}
                      className='flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm'
                    >
                      <RiCheckLine size={16} /> Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className='flex-1 bg-gray-600 text-[#ebebeb] py-2 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center gap-2 text-sm'
                    >
                      <RiCloseLine size={16} /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className='text-[#ebebeb] text-lg'>
                  {formData.address || <span className='text-gray-400 italic'>No address added</span>}
                </p>
              )}
            </div>

            {/* Orders */}
            <div className='p-4 bg-gray-700 rounded-lg'>
              <label className='block text-[#D47968] text-sm font-medium mb-2'>Total Orders</label>
              <p className='text-[#ebebeb] text-3xl font-bold'>{(user.orders || []).length}</p>
              {(user.orders || []).length > 0 && (
                <div className='mt-4 space-y-2'>
                  <p className='text-gray-400 text-xs mb-3'>Recent Orders:</p>
                  {user.orders.slice(-3).reverse().map((order, index) => (
                    <div key={index} className='p-2 bg-gray-600 rounded text-[#ebebeb] text-sm'>
                      <p>Order #{index + 1} - {order.date}</p>
                      <p className='text-gray-400 text-xs'>Items: {order.items || 0}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className='w-full mt-8 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
