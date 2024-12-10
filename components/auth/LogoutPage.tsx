"use client"

import { useEffect } from 'react';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function handleSignOut() {
      try {
        await signOut();
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
    handleSignOut();
  }, []);

  async function handleLogoutAllDevices() {
    try {
      await signOut({ global: true });
      console.log("Logged out from all devices");
    } catch (error) {
      console.error('Error logging out from all devices:', error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[480px] mx-auto px-6 space-y-[20px]">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-[#F0FDF4] rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="heading-text">Successfully Logged Out</h1>
          <p className="subheading-text mt-2">Thank you for using Sweepo.ai</p>
        </div>

        <div className="flex flex-col items-center space-y-[12px]">
          <Link 
            href="/login"
            className="btn-primary"
          >
            Log back in
          </Link>

          <button
            onClick={handleLogoutAllDevices}
            className="btn-secondary"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Log out from all devices
          </button>
        </div>

        <p className="text-center">
          <span className="subheading-text">Having trouble? </span>
          <Link href="/contact" className="link-text">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}

