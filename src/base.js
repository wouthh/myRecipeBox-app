import Rebase from 're-base';

const requireClientConfig = (name, value, exampleValue) => {
  if (!value || !value.trim() || value === exampleValue) {
    throw new Error(`Set ${name} to a project-specific value before running this historical application.`);
  }

  return value;
};

const base = Rebase.createClass({
  apiKey: requireClientConfig(
    'REACT_APP_FIREBASE_API_KEY',
    process.env.REACT_APP_FIREBASE_API_KEY,
    'not-a-real-firebase-key'
  ),
  authDomain: requireClientConfig(
    'REACT_APP_FIREBASE_AUTH_DOMAIN',
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    'example.invalid'
  ),
  databaseURL: requireClientConfig(
    'REACT_APP_FIREBASE_DATABASE_URL',
    process.env.REACT_APP_FIREBASE_DATABASE_URL,
    'https://example.invalid'
  )
});

export default base;
