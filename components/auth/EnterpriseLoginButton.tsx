"use client"

import { FC } from 'react';
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';

interface EnterpriseLoginButtonProps {
  provider: 'google' | 'github' | 'linkedin';
  onClick: () => void;
}

const EnterpriseLoginButton: FC<EnterpriseLoginButtonProps> = ({ provider, onClick }) => {
  const getIcon = () => {
    switch (provider) {
      case 'google':
        return <FaGoogle className="w-4 h-4" />;
      case 'github':
        return <FaGithub className="w-4 h-4" />;
      case 'linkedin':
        return <FaLinkedin className="w-4 h-4" />;
    }
  };

  const getLabel = () => {
    switch (provider) {
      case 'google':
        return 'Google';
      case 'github':
        return 'GitHub';
      case 'linkedin':
        return 'LinkedIn';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`enterprise-login-button ${provider} flex items-center gap-4 px-4 py-2`}
      aria-label={`Login with ${provider}`}
    >
      {getIcon()}
      {getLabel()}
    </button>
  );
};

export default EnterpriseLoginButton;

