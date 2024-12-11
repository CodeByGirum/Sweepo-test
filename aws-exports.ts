const awsconfig = {
  "aws_project_region": "us-east-1",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
  "oauth": {
    "domain": process.env.NEXT_PUBLIC_AWS_OAUTH_DOMAIN,
    "scope": ["email", "openid", "profile"],
    "redirectSignIn": process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN,
    "redirectSignOut": process.env.NEXT_PUBLIC_REDIRECT_SIGN_OUT,
    "responseType": "code"
  },
  "federationTarget": "COGNITO_USER_POOLS",
  "aws_cognito_username_attributes": ["EMAIL"],
  "aws_cognito_social_providers": ["GOOGLE", "GITHUB"],
  "aws_cognito_signup_attributes": ["EMAIL"],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [],
  "aws_cognito_password_protection_settings": {
    "passwordPolicyMinLength": 8,
    "passwordPolicyCharacters": []
  }
};

export default awsconfig; 