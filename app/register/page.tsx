'use client';

import Link from 'next/link';
import RegisterForm from './form';
import AuthRepository from '@/api/repositories/auth-repository';
import React from 'react';
import Notification from '@/app/components/notification';

export default function Register() {
  const [submitting, setSubmitting] = React.useState(false);

  const authRepository = new AuthRepository();

  const registerUser = async (email: string, password: string) => {
    setSubmitting(true);
    try {
      await authRepository.registerUser(email, password);
    } catch (error) {
      console.error('Registration failed:', error);
      generateSnackbar();
    } finally {
      setSubmitting(false);
    }
  };

  function generateSnackbar() {
    return (
      <Notification
        message="Registration failed. Please try again."
        open={true}
        type="error"
        onClose={() => {}}
      />
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold mb-8">Register Your Account</h1>
      <RegisterForm submitting={submitting} onRegister={registerUser} />
      <span className="mt-4 text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-500">
          Login here
        </Link>
      </span>
    </div>
  );
}
