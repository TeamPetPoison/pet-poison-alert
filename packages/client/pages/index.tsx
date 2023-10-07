import dynamic from 'next/dynamic';
import Head from 'next/head';
import BottomNav from '../lib/components/BottomNav/BottomNav';
import LocationSearch from '../lib/components/LocationSearch';
import ReportForm from '../lib/components/ReportForm/ReportForm';
import { useFormStore } from '../store/formStore';
import { useMainStoreActions } from '../store/store';

const MapWithNoSSR = dynamic(() => import('../lib/components/Map'), {
  ssr: false,
});

export default function Home() {
  const showForm = useFormStore((state) => state.showForm);
  const { setGeoData } = useMainStoreActions();

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
        {showForm ? (
          <ReportForm />
        ) : (
          <>
            <LocationSearch setLocationData={setGeoData} />
            <MapWithNoSSR />
            <BottomNav />
          </>
        )}
      </main>
    </>
  );
}
