import '../styles/globals.css';
import '../configureAmplify';

import AuthProvider from '../authContext/auth';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
