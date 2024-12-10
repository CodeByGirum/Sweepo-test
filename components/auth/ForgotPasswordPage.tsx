"use client"

import { useState } from 'react';
import { resetPassword } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await resetPassword({ username: email });
      setSuccess(true);
      router.push('/reset-password');
    } catch (err) {
      console.error('Error resetting password:', err);
      setError('Failed to send reset instructions. Please try again.');
    }
  }

  return (
    <div className="login-container">
      <div className="login-panel-left">
        <h1 className="text-4xl font-bold">Welcome to Sweepo.ai</h1>
      </div>
      <div className="login-panel-right">
        <div className="login-form-container">
          <div className="text-center">
            <h1 className="heading-text">Reset your password</h1>
            <p className="subheading-text">
              Enter your email address and we'll send you instructions to reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-[20px]">
            {error && (
              <div className="text-red-600 text-[14px] text-center">{error}</div>
            )}
            
            <div className="form-group space-y-[20px]">
              <div className="flex flex-col items-center">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="form-input form-control"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Reset Instructions
            </button>
          </form>

          <p className="text-center mt-6">
            <span className="subheading-text">Remember your password? </span>
            <Link href="/login" className="link-text">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 