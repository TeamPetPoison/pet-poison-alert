import 'leaflet/dist/leaflet.css';
import type { AppProps } from 'next/app';
import { useResizeWindow } from '../lib/hooks/useResizeWindow';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useResizeWindow();
  return <Component {...pageProps} />;
}
