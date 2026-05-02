import React, { useState, useCallback } from 'react';
import { AuthContext } from './authContextCreate';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on component mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user:', error);
      }
    }
  }, []);

  const createAccount = useCallback((userData) => {
    const { username, email, password, profileImage } = userData;
    
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some(u => u.username === username || u.email === email);
    
    if (userExists) {
      return { success: false, message: 'Username or email already exists' };
    }

    // Store new user with complete profile fields
    const newUser = { 
      username, 
      email, 
      profileImage,
      phoneNumber: '',
      address: '',
      orders: []
    };
    existingUsers.push({ ...newUser, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));

    return { success: true, message: 'Account created successfully' };
  }, []);

  const login = useCallback((username, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.username === username && u.password === password);

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true, message: 'Login successful' };
    }

    return { success: false, message: 'Invalid username or password' };
  }, []);

  const updateUser = useCallback((updatedData) => {
    setUser(prevUser => {
      const updated = { ...prevUser, ...updatedData };
      localStorage.setItem('user', JSON.stringify(updated));
      
      // Also update in users array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.username === prevUser.username);
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedData };
        localStorage.setItem('users', JSON.stringify(users));
      }
      
      return updated;
    });
    return { success: true, message: 'Profile updated successfully' };
  }, []);

  const addOrder = useCallback((order) => {
    setUser(prevUser => {
      const orders = prevUser.orders || [];
      const updated = { 
        ...prevUser, 
        orders: [...orders, { ...order, date: new Date().toLocaleDateString() }]
      };
      localStorage.setItem('user', JSON.stringify(updated));
      
      // Also update in users array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.username === prevUser.username);
      if (userIndex !== -1) {
        users[userIndex] = updated;
        localStorage.setItem('users', JSON.stringify(users));
      }
      
      return updated;
    });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);

  return (
    <AuthContext.Provider value={{ user, createAccount, login, logout, updateUser, addOrder }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
