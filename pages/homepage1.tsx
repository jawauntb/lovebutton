import dynamic from 'next/dynamic';

const LoveButton = dynamic(() => import('./LoveButton'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <LoveButton />
    </div>
  );
}
