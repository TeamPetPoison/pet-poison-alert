import 'leaflet/dist/leaflet.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { LocationProvider } from './LocationContext';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
