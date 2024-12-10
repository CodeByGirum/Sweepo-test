"use client"

import { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import EnterpriseLoginButton from './EnterpriseLoginButton';
import WelcomeSection from './WelcomeSection'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await signIn({ username: email, password });
      router.push('/');
    } catch (err) {
      console.error('Error signing in:', err);
      setError('Failed to sign in. Please check your credentials.');
    }
  }

  async function handleEnterpriseLogin(provider: string) {
    try {
      console.log(`Logging in with ${provider}`);
    } catch (error) {
      console.error(`Error logging in with ${provider}:`, error);
    }
  }

  return (
    <div className="login-container">
      <WelcomeSection />
      <div className="login-panel-right">
        <div className="login-form-container">
          <div className="text-center">
            <h1 className="heading-text">Welcome to Sweepo.ai</h1>
            <p className="subheading-text">Smarter. Cleaner. Data — Log in securely to your account.</p>
          </div>

          <div className="social-buttons">
            <EnterpriseLoginButton 
              provider="google" 
              onClick={() => handleEnterpriseLogin('google')}
            />
            <EnterpriseLoginButton 
              provider="github" 
              onClick={() => handleEnterpriseLogin('github')}
            />
            <EnterpriseLoginButton 
              provider="linkedin" 
              onClick={() => handleEnterpriseLogin('linkedin')}
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
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="w-[80%] flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="keep-signed-in"
                  type="checkbox"
                  className="checkbox-input"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                />
                <label htmlFor="keep-signed-in" className="checkbox-label">
                  Keep me signed in
                </label>
              </div>
              <Link href="/forgot-password" className="link-text">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full">
              Log in
            </button>
          </form>

          <p className="text-center">
            <span className="subheading-text">Don't have an account? </span>
            <Link href="/signup" className="link-text">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

