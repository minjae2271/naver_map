'use client';

import MapSection from "./_component/MapSection";
import { useEffect } from "react";
import useStores from "@/hooks/useStores";
import DetailSection from "./_component/DetailSection";


export default function Home() {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores()
  }, [initializeStores]);

  return (
    <>
      <main style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}>
        <MapSection />
        <DetailSection />
      </main>
    </>
  );
}