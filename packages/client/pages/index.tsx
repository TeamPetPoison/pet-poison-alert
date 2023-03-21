import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '@/styles/Home.module.css';

const MapWithNoSSR = dynamic(() => import('../lib/Components/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Poison Alert</title>
        <meta
          name="description"
          content="Vital community alerts and information for pet related incidences and poisonings!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background text-foreground">
        <MapWithNoSSR />
      </main>
    </>
  );
}
