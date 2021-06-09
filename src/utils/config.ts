export default {
  PROJECT_NAME: 'Tipbox App',
  VERSION: '0.0.1',
  FILE_SIZE: '15mb',
  PORT: process.env.REACT_APP_PORT || 8080,
  ENV: process.env.NODE_ENV || 'production',
  APP: {
    URL: process.env.REACT_APP_APP_URL || 'http://localhost:8080',
    API_URL:
      `${process.env.REACT_APP_API_URL}/graphql` ||
      'http://localhost:9090/graphql',
  },
  AWS: {
    ACCESS_KEY: process.env.REACT_APP_AWS_ACCESS_KEY || '',
    SECRET_ACCESS_KEY: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || '',
    REGION: process.env.REACT_APP_AWS_REGION || 'us-west-2',
    S3: {
      BUCKET: process.env.REACT_APP_AWS_S3_BUCKET || 'staging.tipbox.io',
    },
    COGNITO: {
      URI:
        process.env.REACT_APP_COGNITO_URI ||
        'https://cognito-idp.us-west-2.amazonaws.com/us-west-2_yj5VWaMtA/.well-known/jwks.json',
      REDIRECT_URI:
        process.env.REACT_APP_COGNITO_REDIRECT_URI || 'http://localhost:8080',
      USER_POOL_ID:
        process.env.REACT_APP_COGNITO_POOL_ID || 'us-west-2_GfObF7yPW',
      IDENTITY_POOL_ID:
        process.env.REACT_APP_IDENTITY_POOL_ID || '4a331mnhf2fhfo83hr88rqa339',
      CLIENT_ID: process.env.REACT_APP_COGNITO_CLIENT_ID || '',
      CALLBACK:
        process.env.REACT_APP_COGNITO_REDIRECT_URI ||
        'http://localhost:8080/callback',
    },
  },
}
