"use client"

import { useState } from 'react';
import { signUp } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import EnterpriseLoginButton from './EnterpriseLoginButton';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
      router.push('/verify-email');
    } catch (err) {
      console.error('Error signing up:', err);
      setError('Failed to sign up. Please try again.');
    }
  }

  async function handleEnterpriseSignUp(provider: string) {
    try {
      console.log(`Signing up with ${provider}`);
    } catch (error) {
      console.error(`Error signing up with ${provider}:`, error);
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
            <h1 className="heading-text">Create your account</h1>
            <p className="subheading-text">Start your journey with Sweepo.ai</p>
          </div>

          <div className="social-buttons">
            <EnterpriseLoginButton 
              provider="google" 
              onClick={() => handleEnterpriseSignUp('google')}
            />
            <EnterpriseLoginButton 
              provider="github" 
              onClick={() => handleEnterpriseSignUp('github')}
            />
            <EnterpriseLoginButton 
              provider="linkedin" 
              onClick={() => handleEnterpriseSignUp('linkedin')}
            />
          </div>

          <div className="divider">
            <span>OR CONTINUE WITH</span>
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

              <div className="flex flex-col items-center">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="form-input form-control"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full text-sm text-center text-muted-foreground mb-4">
              By signing up, you agree to our{' '}
              <Link href="/terms" className="link-text">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="link-text">
                Privacy Policy
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full">
              Create Account
            </button>
          </form>

          <p className="text-center mt-6">
            <span className="subheading-text">Already have an account? </span>
            <Link href="/login" className="link-text">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

